export interface Campeonato {
    id: string;
    nome: string;
    jogo: string;
    imagem: string;
    premiacao: string;
    dataProximoJogo: string;
    disponivelParaInscricao: boolean;
    status: string;
    rank: number;
    formato: string;
    descricao: string;
    regras: string;
    dono: any[];
    rodadas: number;
    equipes: any[];
}

export interface Props {
    campeonato: Campeonato;
}