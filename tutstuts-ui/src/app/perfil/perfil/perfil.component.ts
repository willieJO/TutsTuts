import { Component, ElementRef, ViewChild } from '@angular/core';
import { PerfilService } from '../perfil.service';
import { Usuario } from 'src/app/core/model';
import { MessageService } from 'primeng/api';
import { CloudinaryService } from 'src/app/cloudinary.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  providers: [MessageService],
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent {
  usuario: Usuario;
  showIcon: boolean = false;
  isEditing: boolean = false;
  fotoOriginal: string;
  editedUsuario: Usuario; // Para armazenar as alterações temporárias
  @ViewChild('fileInput') fileInput!: ElementRef;

  constructor(
    private messageService: MessageService,
    private perfilService: PerfilService,
    private cloudinaryService: CloudinaryService
  ) {}

  ngOnInit() {
    this.carregarDadosUsuario();
  }

  openFileInput() {
    if (this.isEditing && this.fileInput) {
      this.fileInput.nativeElement.click();
    }
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
