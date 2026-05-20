import "../../style/bracket.css";

export type Match = {
    id: string;
    campeonatoId: string;
    fase: string;
    equipes: string[];
    placar: Record<string, number>;
    vencedor: string[];
};

export type Equipe = {
    id: string;
    nomeEquipe: string;
    logoEquipe: string;
};

export type BracketProps = {
    campeonatoId: string;
    formato: string;
    equipes?: Equipe[];
    matches: Match[];
};

function Bracket({ campeonatoId, formato, matches }: BracketProps) {

    const isTree = formato === "single_elimination" || formato === "double_elimination";
    const partidas = matches.filter(m => m.campeonatoId === campeonatoId);

    const fases = [...new Set(partidas.map(p => p.fase))];


    // =============================
    // 🧠 SINGLE ELIMINATION (principal)
    // =============================
    if (formato === "single_elimination") {
        return (
            <div className={`bracket ${isTree ? "bracket--tree" : ""}`}>

                {fases.map((fase) => (
                    <div key={fase} className="bracket__round">

                        <h3 className="bracket__round-title">{fase}</h3>

                        {partidas
                            .filter(p => p.fase === fase)
                            .map(match => {

                                const equipeA = match.equipes[0];
                                const equipeB = match.equipes[1];

                                const vencedor = match.vencedor[0];

                                return (
                                    <div key={match.id} className="bracket__match">

                                        <div className={`bracket__team ${vencedor === equipeA ? "bracket__team--winner" : ""}`}>
                                            <span>{equipeA}</span>
                                            <strong>{match.placar[equipeA] ?? "-"}</strong>
                                        </div>

                                        <div className={`bracket__team ${vencedor === equipeB ? "bracket__team--winner" : ""}`}>
                                            <span>{equipeB}</span>
                                            <strong>{match.placar[equipeB] ?? "-"}</strong>
                                        </div>

                                    </div>
                                );
                            })}
                    </div>
                ))}

            </div>
        );
    }

    // =============================
    // 🔁 ROUND ROBIN / SWISS
    // =============================
    if (formato === "round_robin" || formato === "swiss") {
        return (
            <div className="bracket bracket--table">

                {fases.map(fase => (
                    <div key={fase} className="bracket__round">

                        <h3 className="bracket__round-title">{fase}</h3>

                        {partidas
                            .filter(p => p.fase === fase)
                            .map(match => (
                                <div key={match.id} className="bracket__match bracket__match--row">

                                    <span className="bracket__match--content">{match.equipes[0]}</span>
                                    <strong className="bracket__match--score">
                                        {match.placar[match.equipes[0]] ?? "-"} x {match.placar[match.equipes[1]] ?? "-"}
                                    </strong>
                                    <span className="bracket__match--content">{match.equipes[1]}</span>
                                </div>
                            ))}
                    </div>
                ))}

            </div>
        );
    }

    // =============================
    // 🧠 DOUBLE ELIMINATION (base)
    // =============================
    if (formato === "double_elimination") {

        const upper = partidas.filter(p => p.fase.includes("Upper"));
        const lower = partidas.filter(p => p.fase.includes("Lower"));

        return (
            <div className="bracket bracket--double">

                <div className="bracket__section">
                    <h2>Upper</h2>

                    {[...new Set(upper.map(p => p.fase))].map(fase => (
                        <div key={fase} className="bracket__round">

                            <h4>{fase}</h4>

                            {upper.filter(p => p.fase === fase).map(match => {
                                const vencedor = match.vencedor[0];

                                return (
                                    <div key={match.id} className="bracket__match">

                                        {match.equipes.map(eq => (
                                            <div
                                                key={eq}
                                                className={`bracket__team ${vencedor === eq ? "bracket__team--winner" : ""}`}
                                            >
                                                <span>{eq}</span>
                                                <strong>{match.placar[eq] ?? "-"}</strong>
                                            </div>
                                        ))}

                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>

                <div className="bracket__section">
                    <h2>Lower</h2>

                    {[...new Set(lower.map(p => p.fase))].map(fase => (
                        <div key={fase} className="bracket__round">

                            <h4>{fase}</h4>

                            {lower.filter(p => p.fase === fase).map(match => {
                                const vencedor = match.vencedor[0];

                                return (
                                    <div key={match.id} className="bracket__match">

                                        {match.equipes.map(eq => (
                                            <div
                                                key={eq}
                                                className={`bracket__team ${vencedor === eq ? "bracket__team--winner" : ""}`}
                                            >
                                                <span>{eq}</span>
                                                <strong>{match.placar[eq] ?? "-"}</strong>
                                            </div>
                                        ))}

                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>

            </div>
        );
    }

    return <div>Formato não suportado</div>;
}

export default Bracket;