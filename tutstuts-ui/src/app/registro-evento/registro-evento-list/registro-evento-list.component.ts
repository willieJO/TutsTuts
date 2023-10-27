import { RegistroEventoServiceService } from './../registro-evento-service.service';
import { Component } from '@angular/core';
import { Evento } from '../../core/model';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-registro-evento-list',
  templateUrl: './registro-evento-list.component.html',
  providers: [MessageService],
  styleUrls: ['./registro-evento-list.component.css'],
})
export class RegistroEventoListComponent {
  title = 'Registro Evento';
  value = '';
  constructor(
    public eventoserviceService: RegistroEventoServiceService,
    private messageService: MessageService
  ) {}
  evento = new Evento();

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

    this.eventoserviceService.enviar(this.evento);
  }
}
