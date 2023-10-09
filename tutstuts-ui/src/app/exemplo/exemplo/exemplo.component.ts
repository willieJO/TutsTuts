import { Component } from '@angular/core';
import { Exemplo } from '../../core/model';
import {ExemploserviceService } from '../../Exemploservice/exemploservice.service';
@Component({
  selector: 'app-exemplo',
  templateUrl: './exemplo.component.html',
  styleUrls: ['./exemplo.component.css']
})
export class ExemploComponent {
  constructor(public exemploserviceService: ExemploserviceService) {}
  exemplo = new Exemplo();

    enviar() {
      this.exemploserviceService.enviar(this.exemplo);
    }
    
}
