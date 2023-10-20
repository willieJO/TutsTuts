import { Component } from '@angular/core';
import { RegistroEventoServiceService } from '../../Registro-Evento-Service/registro-evento-service.service';
import { Evento } from '../../core/model';

@Component({
  selector: 'app-registro-evento-list',
  templateUrl: './registro-evento-list.component.html',
  styleUrls: ['./registro-evento-list.component.css'],
})
export class RegistroEventoListComponent {
  title = 'Registro Evento';
  value = '';
  constructor(public eventoserviceService: RegistroEventoServiceService) {}
  evento = new Evento();

  enviar() {
    this.eventoserviceService.enviar(this.evento);
  }
}
