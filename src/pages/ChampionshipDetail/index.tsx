import { useState } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ChampionshipInfo from "../../components/ChampionshipTabs/ChampionshipInfo";
import ChampionshipCalendar from "../../components/ChampionshipTabs/ChampionshipCalendar";
import TeamsList from "../../components/ChampionshipTabs/TeamsList";
import RegisterTeam from "../../components/ChampionshipTabs/RegisterTeam";
import EditChampionship from "../../components/ChampionshipTabs/EditChampionship";
import { getMatchesByChampionship } from "../../data/mockData";
import graphIcon from "../../assets/grafico-histograma.png";
import calendarIcon from "../../assets/calendario.png";
import treeIcon from "../../assets/arvore-do-grafico.png";
import teamIcon from "../../assets/engrenagem-dos-usuarios.png";
import editSetupIcon from "../../assets/engrenagem-dos-usuarios.png";
import "../../style/championshipDetail.css"
import type { Match } from "../../components/Bracket";

function ChampionshipDetail() {
    const [activeTab, setActiveTab] = useState(0);
    const location = useLocation();
    const { id, nome, jogo, imagem, premiacao, dataProximoJogo, disponivelParaInscricao, status, rank, formato, descricao, regras, dono, rodadas, equipes } = location.state || {};
    
    // Buscar partidas do campeonato
    const matches: Match[] = id ? getMatchesByChampionship(id).map(match => ({
        ...match,
        placar: Object.fromEntries(
            Object.entries(match.placar).map(([key, value]) => [key, value || 0])
        )
    })) : []; // Ensure placar values are numbers

    const renderTabContent = () => {
        switch (activeTab) {
            case 0: // Info
                return (
                    <ChampionshipInfo
                        id={id}
                        nome={nome}
                        jogo={jogo}
                        imagem={imagem}
                        premiacao={premiacao}
                        disponivelParaInscricao={disponivelParaInscricao}
                        status={status}
                        rank={rank}
                        formato={formato}
                        descricao={descricao}
                        regras={regras}
                        dono={dono}
                        rodadas={rodadas}
                        equipes={equipes}
                        matches={matches}
                    />
                );
            case 1: // Calendário
                return <ChampionshipCalendar dataProximoJogo={dataProximoJogo} />;
            case 2: // Equipes
                return <TeamsList equipes={equipes} />;
            case 3: // Registrar Equipe
                return <RegisterTeam campeonatoId={id} />;
            case 4: // Editar Campeonato
                return (
                    <EditChampionship
                        nome={nome}
                        jogo={jogo}
                        imagem={imagem}
                        premiacao={premiacao}
                        dataProximoJogo={dataProximoJogo}
                        disponivelParaInscricao={disponivelParaInscricao}
                        status={status}
                        rank={rank}
                        formato={formato}
                        descricao={descricao}
                        regras={regras}
                        dono={dono}
                        rodadas={rodadas}
                    />
                );
            default:
                return null;
        }
    };

    return (
        <>
            <Header />
            <main className="championship">
                {/* SIDEBAR */}
                <aside className="championship__sidebar">
                    <button
                        className={`championship__menu-item ${activeTab === 0 ? "active" : ""}`}
                        onClick={() => setActiveTab(0)}
                        title="Informações"
                    >
                        <img className="campionship__icon" src={graphIcon} alt="Informações" />
                    </button>

                    <button
                        className={`championship__menu-item ${activeTab === 1 ? "active" : ""}`}
                        onClick={() => setActiveTab(1)}
                        title="Calendário"
                    >
                        <img className="campionship__icon" src={calendarIcon} alt="Calendário" />
                    </button>

                    <button
                        className={`championship__menu-item ${activeTab === 2 ? "active" : ""}`}
                        onClick={() => setActiveTab(2)}
                        title="Equipes"
                    >
                        <img className="campionship__icon" src={treeIcon} alt="Equipes" />
                    </button>

                    <button
                        className={`championship__menu-item ${activeTab === 3 ? "active" : ""}`}
                        onClick={() => setActiveTab(3)}
                        title="Registrar Equipe"
                    >
                        <img className="campionship__icon" src={teamIcon} alt="Registrar Equipe" />
                    </button>

                    <button
                        className={`championship__menu-item ${activeTab === 4 ? "active" : ""}`}
                        onClick={() => setActiveTab(4)}
                        title="Editar"
                    >
                        <img className="campionship__icon" src={editSetupIcon} alt="Editar" />
                    </button>
                </aside>

                {/* CONTEÚDO */}
                <section className="championship__content">
                    {renderTabContent()}
                </section>
            </main>
            <Footer />
        </>
    )

}

export default ChampionshipDetail;