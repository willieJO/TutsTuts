export class Evento {
  nome: string;
  descricao: string;
  data_evento: string | null;
  cnpj_empresa: number;
  avaliacao: number;
  ativo: number;
  localidade: string;
  categoria: string;
  user: { id: number };
  
  constructor() {
    this.user = { id: 1 }
  }
}
