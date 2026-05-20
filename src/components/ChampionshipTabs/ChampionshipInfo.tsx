import { useState } from "react";
import Modal from "../Modal/Modal";
import "../../style/championship-info.css";
import Bracket, { type Equipe, type Match } from "../Bracket";

interface ChampionshipInfoProps {
    id: string;
    nome: string;
    jogo: string;
    imagem: string;
    premiacao: string;
    disponivelParaInscricao: boolean;
    status: string;
    rank: string;
    formato: string;
    descricao: string;
    regras: string;
    dono: any;
    rodadas: number;
    equipes?: Equipe[];
    matches?: Match[];
}

export default function ChampionshipInfo({
    id,
    nome,
    jogo,
    imagem,
    premiacao,
    disponivelParaInscricao,
    status,
    rank,
    formato,
    descricao,
    regras,
    dono,
    rodadas,
    equipes = [],
    matches = []
}: ChampionshipInfoProps) {
    const [isOwnerModalOpen, setIsOwnerModalOpen] = useState(false);

    return (
        <>
            <div className="championship-info-container">
                {/* BANNER */}
                <div className="championship-info-banner">
                    <img
                        src={imagem}
                        alt={nome}
                        className="championship-info-banner-image"
                    />
                </div>

                {/* INFORMAÇÕES PRINCIPAIS */}
                <div className="championship-info-main">
                    <div className="championship-info-title-section">
                        <h1 className="championship-info-title">{nome}</h1>
                        <span className={`championship-info-status championship-info-status-${status}`}>
                            {status.replace(/_/g, " ")}
                        </span>
                    </div>

                    {/* GRID DE INFORMAÇÕES */}
                    <div className="championship-info-grid">
                        <div className="championship-info-card">
                            <h3>Jogo</h3>
                            <p>{jogo}</p>
                        </div>
                        <div className="championship-info-card">
                            <h3>Formato</h3>
                            <p>{formato.replace(/_/g, " ")}</p>
                        </div>
                        <div className="championship-info-card">
                            <h3>Premiação</h3>
                            <p>{premiacao}</p>
                        </div>
                        <div className="championship-info-card">
                            <h3>Patente Mínima</h3>
                            <p>{rank}</p>
                        </div>
                        <div className="championship-info-card">
                            <h3>Rodada Atual</h3>
                            <p>{rodadas}</p>
                        </div>
                        <div className="championship-info-card">
                            <h3>Inscrições</h3>
                            <p className={disponivelParaInscricao ? "status-open" : "status-closed"}>
                                {disponivelParaInscricao ? "✓ Abertas" : "✗ Fechadas"}
                            </p>
                        </div>
                    </div>

                    {/* DESCRIÇÃO */}
                    <section className="championship-info-section">
                        <h2>Descrição</h2>
                        <p>{descricao}</p>
                    </section>

                    {/* REGRAS */}
                    <section className="championship-info-section">
                        <h2>Regras</h2>
                        <p className="championship-info-rules">{regras}</p>
                    </section>

                    <section className="championship-info-section">
                        <h2>Chaveamento</h2>
                        <Bracket 
                        campeonatoId={id}
                        formato={formato}
                        equipes={equipes}
                        matches={matches}
                        />
                    </section>

                    {/* INFORMAÇÕES DO DONO */}
                    <section className="championship-info-section">
                        <h2>Organizador</h2>
                        <button
                            className="championship-info-owner-button"
                            onClick={() => setIsOwnerModalOpen(true)}
                        >
                            Ver informações do organizador
                        </button>
                    </section>
                </div>
            </div>

            {/* MODAL DO DONO */}
            <Modal
                isOpen={isOwnerModalOpen}
                onClose={() => setIsOwnerModalOpen(false)}
                labelledBy="owner-modal-title"
            >
                <div className="owner-modal-content">
                    <h2 id="owner-modal-title">Informações do Organizador</h2>
                    <div className="owner-modal-info">
                        <p>
                            <strong>Nome:</strong> {dono?.nome || "Não informado"}
                        </p>
                        <p>
                            <strong>Apelido:</strong> {dono?.apelido || "Não informado"}
                        </p>
                        <p>
                            <strong>Email:</strong> {dono?.email || "Não informado"}
                        </p>
                    </div>
                </div>
            </Modal>
        </>
    );
}
