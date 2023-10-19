import { Component } from '@angular/core';
import { RegistroEventoServiceService } from 'src/app/Registro-Evento-Service/registro-evento-service.service';
import { Evento } from 'src/app/core/model';

@Component({
  selector: 'app-registro-evento-list',
  templateUrl: './registro-evento-list.component.html',
  styleUrls: ['./registro-evento-list.component.css'],
})
export class RegistroEventoListComponent {
  title = 'Registro Evento';

  constructor(public eventoserviceService: RegistroEventoServiceService) {}
  evento = new Evento();

  enviar() {
    this.eventoserviceService.enviar(this.evento);
  }
}
