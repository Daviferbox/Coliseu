import { useState } from "react";
import "../../style/teams-list.css";

interface Jogador {
    nome: string;
    apelido: string;
    email: string;
}

interface Equipe {
    id: string;
    nomeEquipe: string;
    logoEquipe: string;
    jogadores: Jogador[];
}

interface TeamsListProps {
    equipes: Equipe[];
}

export default function TeamsList({ equipes }: TeamsListProps) {
    const [hoveredTeam, setHoveredTeam] = useState<string | null>(null);

    if (!equipes || equipes.length === 0) {
        return (
            <div className="teams-list-container">
                <div className="teams-list-empty">
                    <p>Nenhuma equipe cadastrada ainda</p>
                </div>
            </div>
        );
    }

    return (
        <div className="teams-list-container">
            <h1 className="teams-list-title">Equipes Cadastradas</h1>
            <div className="teams-list-grid">
                {equipes.map((equipe) => (
                    <div
                        key={equipe.id}
                        className="teams-list-card"
                        onMouseEnter={() => setHoveredTeam(equipe.id)}
                        onMouseLeave={() => setHoveredTeam(null)}
                    >
                        {/* Logo da equipe */}
                        <div className="teams-list-logo">
                            <img
                                src={equipe.logoEquipe}
                                alt={equipe.nomeEquipe}
                                className="teams-list-logo-image"
                            />
                        </div>

                        {/* Nome da equipe */}
                        <h3 className="teams-list-name">{equipe.nomeEquipe}</h3>

                        {/* Tooltip com membros */}
                        {hoveredTeam === equipe.id && (
                            <div className="teams-list-tooltip">
                                <div className="teams-list-tooltip-title">
                                    Membros ({equipe.jogadores.length})
                                </div>
                                <ul className="teams-list-tooltip-members">
                                    {equipe.jogadores.map((jogador, index) => (
                                        <li key={index} className="teams-list-tooltip-member">
                                            <span className="teams-list-tooltip-apelido">
                                                {jogador.apelido}
                                            </span>
                                            <span className="teams-list-tooltip-nome">
                                                {jogador.nome}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Badge de número de jogadores */}
                        <div className="teams-list-badge">
                            {equipe.jogadores.length} jogadores
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
