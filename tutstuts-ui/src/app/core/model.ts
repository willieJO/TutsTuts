export class RegistroUsuario {
  nome: string;
  email: string;
  senha: string;
  confirmacaoSenha: string;
  categoria: string;

  constructor() {
      this.nome = "";
      this.email = "";
      this.senha = "";
      this.confirmacaoSenha = "";
      this.categoria = "";
  }

}
