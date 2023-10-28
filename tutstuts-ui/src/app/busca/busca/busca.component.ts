import { Component } from '@angular/core';
import {Busca} from '../../core/model'
@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css']
})
export class BuscaComponent {
  nome: string;
  pessoas: Busca[] = [
    { id: 1, nome: 'Fulano', foto: 'https://res.cloudinary.com/duondvpwq/image/upload/v1696896076/fcdkssdxswqseh8dpopp.jpg' },
    { id: 2, nome: 'Ciclano', foto: 'https://res.cloudinary.com/duondvpwq/image/upload/v1696896076/fcdkssdxswqseh8dpopp.jpg' },
    { id: 3, nome: 'Cilano', foto: 'https://res.cloudinary.com/duondvpwq/image/upload/v1696896076/fcdkssdxswqseh8dpopp.jpg' },


  ];

  resultadosFiltrados: Busca[];

  filtrarPessoas(event: any) {
    let query = event.query;
    this.resultadosFiltrados = this.pessoas.filter(pessoa =>
      pessoa.nome.toLowerCase().includes(query.toLowerCase())
    );
  }

  aoSelecionar(event: any) {
    // Ação que você quer executar quando um item é selecionado
    const idSelecionado = event.id;
    console.log('Item selecionado - ID:', idSelecionado);
    // Aqui você pode adicionar a lógica que deseja executar quando um item é selecionado
  }
}
