import { auto } from "@cloudinary/url-gen/qualifiers/quality";

export class Evento {
    id: number | null;
    nome: string;
    descricao: string;
    data_evento: string | null;
    cnpj_empresa: number;
    avaliacao: number;
    ativo: number;
    localidade: string;
    categoria: string;
    link: string;
    foto: string;
    curtidasDoEvento: number;
    user: {
        id: number | null;
        nome: string;
        foto: string;
    };
    constructor() {
        this.user = {id: null, nome: "", foto: ""};
        this.foto = "https://res.cloudinary.com/duondvpwq/image/upload/v1698469139/qc8gjncpj9bgakja7llv.gif"
    }
}

export class EventoCard {
  id: number | null;
  nome: string;
  descricao: string;
  data_evento: string | null;
  cnpj_empresa: number;
  avaliacao: number;
  ativo: number;
  localidade: string;
  categoria: string;
  curtiu: boolean;
  link: string;
  foto: string;
  curtidasDoEvento: number;
  user: {
      id: number | null;
      nome: string;
      foto: string;
  };
  constructor() {
      this.user = {id: null, nome: "", foto: ""};
      this.foto = "https://res.cloudinary.com/duondvpwq/image/upload/v1698469139/qc8gjncpj9bgakja7llv.gif"
  }
}


export class Usuario {
    id: number;
  nome: string;
  email: string;
    categoria: string;
  senha: string;
  ativo: boolean;
    foto: string;
    cnpj: string;
    constructor() {
        this.ativo = true;
        this.foto = 'https://res.cloudinary.com/duondvpwq/image/upload/v1697344132/uexc4falwmplpyz0xmrx.jpg';
    }
}
export class Busca {
    id: number;
    nome: string;
    foto: string;
    isEvento: boolean;
}

export class RegistroUsuario {
    nome: string;
    email: string;
    senha: string;
    confirmacaoSenha: string;
    ativo: boolean;
    categoria: string;
    foto:string
    constructor() {
        this.ativo = true;
        this.foto = 'https://res.cloudinary.com/duondvpwq/image/upload/v1697344132/uexc4falwmplpyz0xmrx.jpg';
    }
}

export class Curtida {
  id: number;
  usuario_id: number;
  evento_id: number;
  is_curtiu: boolean;
}

export interface Mensagem {
  id_usuario_origem: number
  id_usuario_destino: number
  mensagem: string
  data_mensagem: string | Date | number;
}
