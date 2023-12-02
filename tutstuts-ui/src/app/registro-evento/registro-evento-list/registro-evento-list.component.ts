import { CloudinaryService } from './../../cloudinary.service';
import { Component } from '@angular/core';
import { RegistroEventoServiceService } from '../registro-evento-service.service';
import { Evento } from '../../core/model';
import { MessageService } from 'primeng/api';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-registro-evento-list',
  templateUrl: './registro-evento-list.component.html',
  providers: [MessageService],
  styleUrls: ['./registro-evento-list.component.css'],
})
export class RegistroEventoListComponent {
  title = 'Registro Evento';
  value = '';
  isNewPhotoSelected: boolean = true;
  uploadedFiles: any[] = [];
  categorias = [
    { label: 'Nenhum', value: 'NENHUM' },
    { label: 'Festival', value: 'FESTIVAL' },
    { label: 'Show', value: 'SHOW' },
    { label: 'Palestra', value: 'PALESTRA' },
    { label: 'Musical', value: 'MUSICAL' }
  ];
  constructor(
    public eventoserviceService: RegistroEventoServiceService,
    private router:Router,
    private route:ActivatedRoute,
    private cloudinaryService: CloudinaryService,
    private messageService: MessageService
  ) {}
  evento = new Evento();

  onFileSelectClick() {
    this.isNewPhotoSelected = false; // Reseta isNewPhotoSelected ao clicar no botão de seleção
  }

  onFileUploadConfirm(event: any) {
    // Lógica para lidar com a confirmação da imagem
    this.isNewPhotoSelected = false; // Reseta isNewPhotoSelected quando a imagem é confirmada
    this.onFileSelected(event);
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params[`id`];
    if(id != 'new'){
      this.carregarDados(id);
    }
  }

  carregarDados(id: number) {
    this.eventoserviceService.findById(id)
      .then(evento => {
        this.evento = evento[0];
        const partesData = evento[0].data_evento.split('/');
        const dataFormatada = `${partesData[2]}-${partesData[1]}-${partesData[0]}`; // converte para '2023-11-01'
        this.evento.data_evento = dataFormatada;
      })
      .catch(error => console.log(error));
  }

  onFileSelected(event: any) {
    const file: File = event.files[0];
     this.cloudinaryService.uploadImage(file).then((response:any) => {
        this.evento.foto = response.secure_url;
        this.uploadedFiles.pop();
        this.uploadedFiles.push(file);
        this.messageService.add({severity: 'info', summary: 'Imagem enviada com sucesso', detail: ''});
     }).catch((e: any) => {
      console.error('Erro ao fazer upload da imagem: ', e);
     })
  }


  enviar() {
    if (this.evento.nome == '' || this.evento.nome == null) {
      this.messageService.add({
        severity: 'error',
        summary: 'Erro',
        detail: 'O nome é obrigatorio',
        life: 2000,
      });
      return;
    }

    if (this.evento.descricao == '' || this.evento.descricao == null) {
      this.messageService.add({
        severity: 'error',
        summary: 'Erro',
        detail: 'A descrição é obrigatoria',
        life: 2000,
      });
      return;
    }

    if (this.evento.data_evento == '' || this.evento.data_evento == null) {
      this.messageService.add({
        severity: 'error',
        summary: 'Erro',
        detail: 'A Data do Evento é obrigatoria',
        life: 2000,
      });
      return;
    }

    if (this.evento.categoria == '' || this.evento.categoria == null) {
      this.messageService.add({
        severity: 'error',
        summary: 'Erro',
        detail: 'A Categoria é obrigatoria',
        life: 2000,
      });
      return;
    }

    if (this.evento.localidade == '' || this.evento.localidade == null) {
      this.messageService.add({
        severity: 'error',
        summary: 'Erro',
        detail: 'A Localidade é obrigatoria',
        life: 2000,
      });
    }

    this.eventoserviceService.enviar(this.evento).then((response) => {
      setTimeout(() => {
        this.messageService.add({
          severity: 'success',
          summary: 'Evento criado',
          detail: 'Você está sendo redirecionado',
          life: 2000
        });
        setTimeout(() => {
          this.router.navigate(['/principal']); // Redireciona após o segundo setTimeout
        }, 2200);
      }, 100);
    });
  }
}
