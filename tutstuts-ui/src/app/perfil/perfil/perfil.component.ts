import { Component, ElementRef, ViewChild,OnInit } from '@angular/core';
import { PerfilService } from '../perfil.service';
import { Usuario } from 'src/app/core/model';
import { MessageService } from 'primeng/api';
import { CloudinaryService } from 'src/app/cloudinary.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  providers: [MessageService],
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent implements OnInit{
  usuario: Usuario;
  showIcon: boolean = false;
  isEditing: boolean = false;
  fotoOriginal: string;
  isMeuPerfil: boolean = true;
  editedUsuario: Usuario; // Para armazenar as alterações temporárias
  @ViewChild('fileInput') fileInput!: ElementRef;
  categorias = [
    { label: 'Nenhum', value: 'NENHUM' },
    { label: 'Festival', value: 'FESTIVAL' },
    { label: 'Show', value: 'SHOW' },
    { label: 'Palestra', value: 'PALESTRA' },
    { label: 'Musical', value: 'MUSICAL' }
  ];

  constructor(
    private messageService: MessageService,
    private perfilService: PerfilService,
    private route:ActivatedRoute,
    private cloudinaryService: CloudinaryService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params[`id`];
    if(id != undefined &&id != 'new'){
      this.isMeuPerfil = false;
      this.carregarDadosDeVisualizacao(id);
      return;
    }
    this.carregarDadosUsuario();
  }

  openFileInput() {
    if (this.isEditing && this.fileInput) {
      this.fileInput.nativeElement.click();
    }
  }
  carregarDadosDeVisualizacao(id:number) {
    this.perfilService.carregarDadosDeVisualizacao(id).subscribe((user: Usuario) => {
      this.usuario = { ...user };
      this.editedUsuario = { ...user };
      this.fotoOriginal = this.usuario.foto;
    });
  }

  selectFile() {
    const fileInput = document.getElementById('file-input');
    if (fileInput) {
      fileInput.click();
    }
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    this.cloudinaryService
      .uploadImage(file)
      .then((response: any) => {
        this.editedUsuario.foto = response.secure_url;
      })
      .catch((e: any) => {
        console.error('Erro ao fazer upload da imagem: ', e);
      });
  }

  carregarDadosUsuario() {
    this.perfilService.obterUsuarioPorId().subscribe((user: Usuario) => {
      this.usuario = { ...user };
      this.editedUsuario = { ...user };
      this.fotoOriginal = this.usuario.foto;
    });
  }

  enableEditing() {
    this.isEditing = true;
  }

  cancelEditing() {
    this.isEditing = false;
    this.editedUsuario = { ...this.usuario };
  }

  saveChanges() {
    this.isEditing = false;
    this.usuario = { ...this.editedUsuario };
    this.perfilService
      .atualizarUsuario(this.usuario)
      .then((response) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Sucesso',
          detail: 'Informações atualizadas com sucesso.',
          life: 2000,
        });
      })
      .catch((erro) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Erro',
          detail: 'Erro interno, consulte o suporte',
          life: 2000,
        });
      });
  }
  addOverlay() {
    if (this.isEditing) {
      this.showIcon = true;
      const img = document.getElementById('profile-img');
      if (img) {
        img.classList.add('darken');
      }
    }
  }

  removeOverlay() {
    if (this.isEditing) {
      this.showIcon = false;
      const img = document.getElementById('profile-img');
      if (img) {
        img.classList.remove('darken');
      }
    }
  }
}
