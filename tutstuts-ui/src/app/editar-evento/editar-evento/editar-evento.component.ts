import { Component, OnInit } from '@angular/core';
import { EditarEventoService } from '../editar-evento.service';
import { Evento } from 'src/app/core/model';
import { Router } from '@angular/router';
import { Dialog } from 'primeng/dialog';

@Component({
  selector: 'app-editar-evento',
  templateUrl: './editar-evento.component.html',
  styleUrls: ['./editar-evento.component.css']
})
export class EditarEventoComponent implements OnInit {
  suaListaDeDados: Evento[] = [];
  displayConfirmation: boolean = false;
  dadoParaExcluir: any;
  constructor(public editarEventoService:EditarEventoService, private router: Router){}
  ngOnInit(): void {
    this.editarEventoService.findById().then(e=> {
      this.suaListaDeDados = e;
    })
  }
  
  editarDado(id: number) {
    this.router.navigate(['/registroEvento', id]);
    
  }
  exibirModalConfirmacao(dado: any) {
    this.dadoParaExcluir = dado.id;
    this.displayConfirmation = true;
  }
  confirmarExclusao() {
    this.excluirDado(this.dadoParaExcluir);

    this.displayConfirmation = false;
  }
  
  excluirDado(id: number) {
    this.editarEventoService.removeById(id).then(e=> {
      window.location.reload();
    })
  }
  
}
