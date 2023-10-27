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


export class Usuario {
    id: number;
    nome: string;
    email: string;
    categoria: string;
    senha: string;
    ativo: boolean;
    foto: string;
    cnpj: string;

}
export class Busca {
    id: number;
    nome: string;
    foto: string;
}
