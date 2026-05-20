import { useState, useContext } from "react";
import { UsuarioLogadoContext } from "../../context/AuthContext";
import "../../style/register-team.css";

interface RegisterTeamProps {
    campeonatoId: string;
    onTeamRegistered?: (teamData: any) => void;
}

interface Jogador {
    nome: string;
    apelido: string;
    email: string;
}

export default function RegisterTeam({
    campeonatoId,
    onTeamRegistered,
}: RegisterTeamProps) {

    const authContext = useContext(UsuarioLogadoContext);
    const [nomeEquipe, setNomeEquipe] = useState("");
    const [logoEquipe, setLogoEquipe] = useState(
        "https://placehold.co/80x80/6c757d/ffffff?text=Logo"
    );
    const [numJogadores, setNumJogadores] = useState(1);
    const [jogadores, setJogadores] = useState<Jogador[]>(
        Array(1).fill(null).map(() => ({
            nome: authContext?.nome || "",
            apelido: authContext?.apelido || "",
            email: authContext?.email || "",
        }))
    );
    const [logoPreview, setLogoPreview] = useState(logoEquipe);
    const [submitted, setSubmitted] = useState(false);
    
    
    

    const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const result = event.target?.result as string;
                setLogoPreview(result);
                setLogoEquipe(result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleNumJogadoresChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newNum = parseInt(e.target.value) || 0;
        setNumJogadores(newNum);

        // Ajustar array de jogadores
        const newJogadores = [...jogadores];
        if (newNum > jogadores.length) {
            // Adicionar novos jogadores
            for (let i = jogadores.length; i < newNum; i++) {
                newJogadores.push({ nome: "", apelido: "", email: "" });
            }
        } else {
            // Remover jogadores
            newJogadores.splice(newNum);
        }
        setJogadores(newJogadores);
    };

    const handleJogadorChange = (
        index: number,
        field: keyof Jogador,
        value: string
    ) => {
        const newJogadores = [...jogadores];
        newJogadores[index][field] = value;
        setJogadores(newJogadores);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Validações
        if (!nomeEquipe.trim()) {
            alert("Por favor, informe o nome da equipe");
            return;
        }

        if (numJogadores < 1) {
            alert("A equipe deve ter pelo menos 1 jogador");
            return;
        }

        const jogadoresValidos = jogadores.every(
            (j) => j.nome.trim() && j.apelido.trim() && j.email.trim()
        );

        if (!jogadoresValidos) {
            alert("Por favor, preencha as informações de todos os jogadores");
            return;
        }

        const teamData = {
            nomeEquipe,
            logoEquipe,
            jogadores: jogadores.slice(0, numJogadores),
            campeonatoId,
        };

        setSubmitted(true);
        if (onTeamRegistered) {
            onTeamRegistered(teamData);
        }

        // Simular envio bem-sucedido
        alert(`Equipe "${nomeEquipe}" registrada com sucesso!`);
        
        // Limpar formulário
        setNomeEquipe("");
        setLogoEquipe("https://placehold.co/80x80/6c757d/ffffff?text=Logo");
        setLogoPreview("https://placehold.co/80x80/6c757d/ffffff?text=Logo");
        setNumJogadores(5);
        setJogadores(
            Array(5).fill(null).map(() => ({
                nome: "",
                apelido: "",
                email: "",
            }))
        );
        setSubmitted(false);
    };

    return (
        <div className="register-team-container">
            <h1 className="register-team-title">Registrar Equipe</h1>

            <form className="register-team-form" onSubmit={handleSubmit}>
                {/* SEÇÃO DE INFORMAÇÕES DA EQUIPE */}
                <section className="register-team-section">
                    <h2>Informações da Equipe</h2>

                    {/* LOGO E NOME */}
                    <div className="register-team-row">
                        <div className="register-team-logo-field">
                            <label htmlFor="logo">Logo da Equipe</label>
                            <div className="register-team-logo-preview">
                                <img src={logoPreview} alt="Logo preview" />
                            </div>
                            <input
                                type="file"
                                id="logo"
                                accept="image/*"
                                onChange={handleLogoChange}
                                className="register-team-file-input"
                            />
                            <p className="register-team-helper-text">
                                ou usar logo padrão acima
                            </p>
                        </div>

                        <div className="register-team-name-field">
                            <label htmlFor="nomeEquipe">Nome da Equipe</label>
                            <input
                                type="text"
                                id="nomeEquipe"
                                value={nomeEquipe}
                                onChange={(e) => setNomeEquipe(e.target.value)}
                                placeholder="Ex: Phantom Squad"
                                className="register-team-input"
                            />
                        </div>
                    </div>

                    {/* NÚMERO DE JOGADORES */}
                    <div className="register-team-field">
                        <label htmlFor="numJogadores">Número de Jogadores</label>
                        <input
                            type="number"
                            id="numJogadores"
                            min="1"
                            max="10"
                            value={numJogadores}
                            onChange={handleNumJogadoresChange}
                            className="register-team-input-number"
                        />
                    </div>
                </section>

                {/* SEÇÃO DE JOGADORES */}
                <section className="register-team-section">
                    <h2>Jogadores ({numJogadores})</h2>

                    <div className="register-team-jogadores-list">
                        {jogadores.map((jogador, index) => (
                            <div key={index} className="register-team-jogador-card">
                                <span className="register-team-jogador-number">
                                    Jogador {index + 1}
                                </span>

                                <div className="register-team-jogador-fields">
                                    <input
                                        type="text"
                                        placeholder="Nome"
                                        value={jogador.nome}
                                        onChange={(e) =>
                                            handleJogadorChange(index, "nome", e.target.value)
                                        }
                                        className="register-team-jogador-input"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Apelido (Nick)"
                                        value={jogador.apelido}
                                        onChange={(e) =>
                                            handleJogadorChange(index, "apelido", e.target.value)
                                        }
                                        className="register-team-jogador-input"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        value={jogador.email}
                                        onChange={(e) =>
                                            handleJogadorChange(index, "email", e.target.value)
                                        }
                                        className="register-team-jogador-input"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* BOTÕES DE AÇÃO */}
                <div className="register-team-actions">
                    <button
                        type="submit"
                        className="register-team-submit-button"
                        disabled={submitted}
                    >
                        {submitted ? "Registrando..." : "Registrar Equipe"}
                    </button>
                </div>
            </form>
        </div>
    );
}
