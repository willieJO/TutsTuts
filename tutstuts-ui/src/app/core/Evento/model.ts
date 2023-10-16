export class Evento {
  nome: string;
  descricao: string;
  data_evento: string;
  cnpj_empresa: number;
  avaliacao: number;
  ativo: number;
  localidade: string;
  categoria: string;

  constructor() {
    this.nome = '';
    this.descricao = '';
    this.data_evento = '';
    this.cnpj_empresa = 0;
    this.avaliacao = 0;
    this.ativo = 0;
    this.localidade = '';
    this.categoria = '';
  }
}
