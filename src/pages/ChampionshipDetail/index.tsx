import { useLocation } from "react-router-dom";
import Bracket from "../../components/Bracket";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { getMatchesByChampionship } from "../../data/mockData";
import graphIcon from "../../assets/grafico-histograma.png";
import calendarIcon from "../../assets/calendario.png";
import treeIcon from "../../assets/arvore-do-grafico.png";
import teamIcon from "../../assets/engrenagem-dos-usuarios.png";
import editSetupIcon from "../../assets/engrenagem-dos-usuarios.png";

type Match = {
    id: string;
    campeonatoId: string;
    fase: string;
    equipes: string[];
    placar: Record<string, number>;
    vencedor: string[];
};

function ChampionshipDetail() {

    const location = useLocation();
    const { id, nome, jogo, imagem, premiacao, dataProximoJogo, disponivelParaInscricao, status, rank, formato, descricao, regras, dono, rodadas, equipes } = location.state || {};

    const matches = getMatchesByChampionship(id);

    const data = dataProximoJogo
        ? new Date(dataProximoJogo)
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
            <Header />
            <main className="championship">
                {/* SIDEBAR */}
                <aside className="championship__sidebar">
                    <button className="championship__menu-item">
                        <img className="campionship__icon" src={graphIcon} alt="" />
                    </button>

                    <button className="championship__menu-item">
                        <img className="campionship__icon" src={calendarIcon} alt="" />
                    </button>

                    <button className="championship__menu-item">
                        <img className="campionship__icon" src={treeIcon} alt="" />
                    </button>

                    <button className={"championship__menu-item"}>
                        <img className="campionship__icon" src={teamIcon} alt="" />
                    </button>

                    <button className="championship__menu-item">
                        <img className="campionship__icon" src={editSetupIcon} alt="" />
                    </button>
                </aside>

                {/* CONTEÚDO */}
                <section className="championship__content">

                    {/* HEADER */}
                    <header className="championship__header">
                        <div className="championship__title-group">
                            <h1 className="championship__title">{nome}</h1>
                            <span className={`championship__status championship__status-${status}`}>{status}</span>
                        </div>

                        <p className="championship__next-match">
                            {data
                                ? `Próximo jogo: ${formatarData(data)}`
                                : "Sem data prevista"}
                        </p>
                    </header>

                    {/* INFO GRID */}
                    <section className="championship__info">
                        <div className="championship__card">
                            <h3 className="championship__card-title">Jogo</h3>
                            <p className="championship__card-content">{jogo}</p>
                        </div>

                        <div className="championship__card">
                            <h3 className="championship__card-title">Formato</h3>
                            <p className="championship__card-content">{formato}</p>
                        </div>

                        <div className="championship__card">
                            <h3 className="championship__card-title">Premiação</h3>
                            <p className="championship__card-content">{premiacao}</p>
                        </div>

                        <div className="championship__card">
                            <h3 className="championship__card-title">Ranking</h3>
                            <p className="championship__card-content">{rank ? "Ranqueado" : "Casual"}</p>
                        </div>
                    </section>

                    {/* DESCRIÇÃO */}
                    <section className="championship__section">
                        <h2>Descrição</h2>
                        <p>{descricao}</p>
                    </section>

                    {/* REGRAS */}
                    <section className="championship__section">
                        <h2>Regras</h2>
                        <p>{regras}</p>
                    </section>

                    {/* CHAVEAMENTO */}
                    <section className="championship__section">
                        <h2>Chaveamento</h2>
                        <Bracket
                            campeonatoId={id}
                            formato={formato}
                            equipes={equipes}
                            matches={matches}
                        />
                    </section>
                </section>
            </main>
            <Footer />
        </>
    )

}

export default ChampionshipDetail;