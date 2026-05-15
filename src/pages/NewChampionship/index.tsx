import { useState } from "react";
import Modal from "../../components/Modal/Modal";
import type { Campeonato } from "../../components/interfaces/index.ts";
import "../../style/championship-form.css";

interface NewChampionshipProps {
    isOpen: boolean;
    onClose: () => void;
    onAddChampionship: (championship: Campeonato) => void;
}

function NewChampionship({ isOpen, onClose, onAddChampionship }: NewChampionshipProps) {
    const [formData, setFormData] = useState({
        nome: "",
        descricao: "",
        disponivelParaInscricao: false,
        jogo: "",
        formato: "single_elimination",
        premiacao: "",
        regras: "",
        dataProximoJogo: "",
        status: "inscricoes_abertas",
        rank: "Bronze",
        imagem: "https://placehold.co/800x300/007bff/ffffff?text=Novo+Campeonato",
    });

    const handleChange = (e: any) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formData.nome.trim() || !formData.jogo.trim()) {
            alert("Por favor, preencha os campos obrigatórios: Nome e Jogo");
            return;
        }

        const newChampionship: Campeonato = {
            id: `c${Date.now()}`,
            nome: formData.nome,
            descricao: formData.descricao,
            disponivelParaInscricao: formData.disponivelParaInscricao,
            jogo: formData.jogo,
            formato: formData.formato,
            premiacao: formData.premiacao,
            regras: formData.regras,
            dataProximoJogo: formData.dataProximoJogo,
            status: formData.status,
            rank: formData.rank,
            imagem: formData.imagem,
            dono: [],
            rodadas: 0,
            equipes: [],
        };

        onAddChampionship(newChampionship);

        setFormData({
            nome: "",
            descricao: "",
            disponivelParaInscricao: false,
            jogo: "",
            formato: "single_elimination",
            premiacao: "",
            regras: "",
            dataProximoJogo: "",
            status: "inscricoes_abertas",
            rank: "Bronze",
            imagem: "https://placehold.co/800x300/007bff/ffffff?text=Novo+Campeonato",
        });

        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} labelledBy="championship-title">
            <div className="championship-form-container">
                <h2 id="championship-title" className="championship-form-title">
                    Cadastrar Novo Campeonato
                </h2>

                <form className="championship-form" onSubmit={handleSubmit}>
                    <div className="form-single">
                        <div className="form-group full">
                            <label htmlFor="nome">Nome do Campeonato *</label>
                            <input
                                type="text"
                                id="nome"
                                name="nome"
                                placeholder="Ex: Copa Valorant SP 2026"
                                value={formData.nome}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-single">
                        <div className="form-group full">
                            <label htmlFor="jogo">Jogo *</label>
                            <input
                                type="text"
                                id="jogo"
                                name="jogo"
                                placeholder="Ex: Valorant"
                                value={formData.jogo}
                                onChange={handleChange}
                                required
                            />
                        </div>

                    </div>

                    <div className="form-group full">
                        <label htmlFor="descricao">Descrição do Campeonato</label>
                        <textarea
                            id="descricao"
                            name="descricao"
                            placeholder="Descreva os detalhes do seu campeonato..."
                            value={formData.descricao}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="formato">Formato</label>
                            <select
                                id="formato"
                                name="formato"
                                value={formData.formato}
                                onChange={handleChange}
                            >
                                <option value="single_elimination">Eliminatória Simples</option>
                                <option value="double_elimination">Dupla Eliminação</option>
                                <option value="round_robin">Round Robin</option>
                                <option value="groups_and_knockout">Grupos + Mata-Mata</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="rank">Patente Mínima</label>
                            <select
                                id="rank"
                                name="rank"
                                value={formData.rank}
                                onChange={handleChange}
                            >
                                <option value="Bronze">Bronze</option>
                                <option value="Prata">Prata</option>
                                <option value="Ouro">Ouro</option>
                                <option value="Platina">Platina</option>
                                <option value="Diamante">Diamante</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="status">Status</label>
                            <select
                                id="status"
                                name="status"
                                value={formData.status}
                                onChange={handleChange}
                            >
                                <option value="inscricoes_abertas">Inscrições Abertas</option>
                                <option value="em_andamento">Em Andamento</option>
                                <option value="encerrado">Encerrado</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="dataProximoJogo">Próximo Jogo</label>
                            <input
                                type="date"
                                id="dataProximoJogo"
                                name="dataProximoJogo"
                                value={formData.dataProximoJogo}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="form-group full">
                        <label htmlFor="premiacao">Premiação</label>
                        <input
                            type="text"
                            id="premiacao"
                            name="premiacao"
                            placeholder="Ex: R$ 5.000 + troféu"
                            value={formData.premiacao}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group full">
                        <label htmlFor="regras">Regras</label>
                        <textarea
                            id="regras"
                            name="regras"
                            placeholder="Insira as regras do campeonato..."
                            value={formData.regras}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group checkbox-group">
                        <input
                            type="checkbox"
                            id="disponivelParaInscricao"
                            name="disponivelParaInscricao"
                            checked={formData.disponivelParaInscricao}
                            onChange={handleChange}
                        />
                        <label htmlFor="disponivelParaInscricao">
                            Disponível para Inscrição
                        </label>
                    </div>

                    <div className="form-actions">
                        <button type="submit" className="btn-submit">
                            Cadastrar
                        </button>
                        <button
                            type="button"
                            className="btn-cancel"
                            onClick={onClose}
                        >
                            Cancelar
                        </button>
                    </div>
                </form>
            </div>
        </Modal>
    );
}

export default NewChampionship;