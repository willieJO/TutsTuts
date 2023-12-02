import { Component,OnInit  } from '@angular/core';
import {Busca} from '../../core/model'
import { ChangeDetectorRef } from '@angular/core';
import { BuscaService } from '../busca.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css']
})
export class BuscaComponent implements OnInit{
  constructor(private cdRef: ChangeDetectorRef, private buscaService:BuscaService, private router: Router) {}
  pessoas: Busca[]
  ngOnInit(): void {
     this.buscaService.obterBusca().then((response)=> {
      if (response == undefined) return;
      this.pessoas = response.map(item => {
        // Criar instâncias de Busca com base nos dados recebidos
        return {
          id: item.id,
          nome: item.nome,
          foto: item.foto,
          isEvento: item.isEvento
        } as Busca;
      });
      
    })
  }
  nome: string;
 

  resultadosFiltrados: Busca[];

  filtrarPessoas(event: any) {
    let query = event.query;
    this.resultadosFiltrados = this.pessoas.filter(pessoa =>
      pessoa.nome.toLowerCase().startsWith(query.toLowerCase())
    );
    this.cdRef.detectChanges();

  }

  aoSelecionar(event: any) {
    const idSelecionado = event.id;
    if (event.isEvento) {
      this.router.navigate(['/principal/' + idSelecionado]);
      return;
    }
    this.router.navigate(['/perfil/' + idSelecionado]);
  }
}
