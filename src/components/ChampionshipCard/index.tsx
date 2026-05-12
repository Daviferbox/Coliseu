import { useNavigate } from "react-router-dom";
import type { Props } from "../interfaces";
import "../../style/championship.css"

function ChampionshipCard({ campeonato }: Props) {

    const navigate = useNavigate();

    const data = campeonato.dataProximoJogo
        ? new Date(campeonato.dataProximoJogo)
        : null;

    const formatarData = (data: Date) => {
        const dia = String(data.getUTCDate()).padStart(2, '0');
        const mes = String(data.getUTCMonth() + 1).padStart(2, '0');
        const ano = data.getUTCFullYear();
        const hora = String(data.getUTCHours()).padStart(2, '0');
        const minuto = String(data.getUTCMinutes()).padStart(2, '0');

        return `${dia}/${mes}/${ano} ${hora}:${minuto}`;
    };

    return (
        <>
            <div className="campeonato-card" onClick={() => {
                navigate('/campeonato',
                    {
                        state: {
                            id: campeonato.id,
                            nome: campeonato.nome,
                            jogo: campeonato.jogo,
                            imagem: campeonato.imagem,
                            premiacao: campeonato.premiacao,
                            dataProximoJogo: campeonato.dataProximoJogo,
                            disponivelParaInscricao: campeonato.disponivelParaInscricao,
                            status: campeonato.status,
                            rank: campeonato.rank,
                            formato: campeonato.formato,
                            descricao: campeonato.descricao,
                            regras: campeonato.regras,
                            dono: campeonato.dono,
                            rodadas: campeonato.rodadas,
                            equipes: campeonato.equipes
                        }
                    })
            }}>

                <img
                    className="campeonato-card__imagem"
                    src={campeonato.imagem}
                    alt={campeonato.nome}
                />

                <p className="campeonato-card__nome">
                    {campeonato.nome}
                </p>

                <p className="campeonato-card__premiacao">
                    {campeonato.premiacao}
                </p>

                <p className="campeonato-card__data">
                    {data ? formatarData(data) : "Não tem data prevista"}
                </p>

                <div
                    className={`campeonato-card__status ${campeonato.disponivelParaInscricao
                        ? "campeonato-card__status--disponivel"
                        : "campeonato-card__status--indisponivel"
                        }`}
                >
                    <div className="campeonato-card__status-indicador"></div>

                    <p className="campeonato-card__status-texto">
                        {campeonato.disponivelParaInscricao
                            ? "Disponível"
                            : "Indisponível"}
                    </p>
                </div>

                <div className={`campeonato-card__patente campeonato-card__patente-${campeonato.rank}`}>
                    <p className="campeonato-card__patente-texto">
                        {campeonato.rank}
                    </p>
                </div>
            </div>
        </>
    )

}

export default ChampionshipCard;