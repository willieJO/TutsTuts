
export class Usuario {
  categoria: String;
  nome: String;
  email: String;
  senha: String;
  cnpj: String;
  ativo: boolean;
  constructor(){
    this.ativo= true;
  }
}
