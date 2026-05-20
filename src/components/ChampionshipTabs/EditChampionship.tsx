import { useState, useContext } from "react";
import { UsuarioLogadoContext } from "../../context/AuthContext";
import "../../style/edit-championship.css";

interface EditChampionshipProps {
    nome: string;
    jogo: string;
    imagem: string;
    premiacao: string;
    dataProximoJogo: string;
    disponivelParaInscricao: boolean;
    status: string;
    rank: string;
    formato: string;
    descricao: string;
    regras: string;
    dono: any;
    rodadas: number;
    onChampionshipUpdated?: (data: any) => void;
}

export default function EditChampionship({
    nome,
    jogo,
    imagem,
    premiacao,
    dataProximoJogo,
    disponivelParaInscricao,
    status,
    rank,
    formato,
    descricao,
    regras,
    dono,
    rodadas,
    onChampionshipUpdated,
}: EditChampionshipProps) {
    const authContext = useContext(UsuarioLogadoContext);

    // Verificar se o usuário autenticado é o dono
    const isOwner =
        authContext?.nome === dono?.nome &&
        authContext?.apelido === dono?.apelido &&
        authContext?.email === dono?.email;

    const [formData, setFormData] = useState({
        nome,
        jogo,
        imagem,
        premiacao,
        dataProximoJogo,
        disponivelParaInscricao,
        status,
        rank,
        formato,
        descricao,
        regras,
        rodadas,
    });

    const [isEditing, setIsEditing] = useState(false);
    const [imagePreview, setImagePreview] = useState(imagem);

    if (!isOwner) {
        return (
            <div className="edit-championship-container">
                <div className="edit-championship-no-access">
                    <p>Você não tem permissão para editar este campeonato.</p>
                    <p>Apenas o organizador pode fazer alterações.</p>
                </div>
            </div>
        );
    }

    const handleInputChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value, type } = e.target;
        const checked = (e.target as HTMLInputElement).checked;

        setFormData((prev) => ({
            ...prev,
            [name]:
                type === "checkbox"
                    ? checked
                    : name === "rodadas"
                    ? parseInt(value) || 0
                    : value,
        }));
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const result = event.target?.result as string;
                setImagePreview(result);
                setFormData((prev) => ({
                    ...prev,
                    imagem: result,
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Validações
        if (!formData.nome.trim()) {
            alert("O nome do campeonato é obrigatório");
            return;
        }

        if (!formData.jogo.trim()) {
            alert("O jogo é obrigatório");
            return;
        }

        if (!formData.premiacao.trim()) {
            alert("A premiação é obrigatória");
            return;
        }

        if (!formData.descricao.trim()) {
            alert("A descrição é obrigatória");
            return;
        }

        if (!formData.regras.trim()) {
            alert("As regras são obrigatórias");
            return;
        }

        // Simular envio
        alert("Campeonato atualizado com sucesso!");
        if (onChampionshipUpdated) {
            onChampionshipUpdated(formData);
        }
        setIsEditing(false);
    };

    const handleCancel = () => {
        setFormData({
            nome,
            jogo,
            imagem,
            premiacao,
            dataProximoJogo,
            disponivelParaInscricao,
            status,
            rank,
            formato,
            descricao,
            regras,
            rodadas,
        });
        setImagePreview(imagem);
        setIsEditing(false);
    };

    return (
        <div className="edit-championship-container">
            <div className="edit-championship-header">
                <h1>Editar Campeonato</h1>
                {!isEditing && (
                    <button
                        className="edit-championship-edit-button"
                        onClick={() => setIsEditing(true)}
                    >
                        ✎ Editar
                    </button>
                )}
            </div>

            <form
                className={`edit-championship-form ${isEditing ? "editing" : ""}`}
                onSubmit={handleSubmit}
            >
                {/* IMAGEM */}
                <section className="edit-championship-section">
                    <h2>Banner do Campeonato</h2>
                    <div className="edit-championship-image-field">
                        <div className="edit-championship-image-preview">
                            <img src={imagePreview} alt={formData.nome} />
                        </div>
                        {isEditing && (
                            <>
                                <input
                                    type="file"
                                    id="imagem"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    className="edit-championship-file-input"
                                />
                                <label htmlFor="imagem" className="edit-championship-file-label">
                                    Clique para alterar a imagem
                                </label>
                            </>
                        )}
                    </div>
                </section>

                {/* INFORMAÇÕES BÁSICAS */}
                <section className="edit-championship-section">
                    <h2>Informações Básicas</h2>

                    <div className="edit-championship-field">
                        <label htmlFor="nome">Nome do Campeonato</label>
                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            value={formData.nome}
                            onChange={handleInputChange}
                            disabled={!isEditing}
                            className="edit-championship-input"
                        />
                    </div>

                    <div className="edit-championship-row">
                        <div className="edit-championship-field">
                            <label htmlFor="jogo">Jogo</label>
                            <input
                                type="text"
                                id="jogo"
                                name="jogo"
                                value={formData.jogo}
                                onChange={handleInputChange}
                                disabled={!isEditing}
                                className="edit-championship-input"
                            />
                        </div>

                        <div className="edit-championship-field">
                            <label htmlFor="formato">Formato</label>
                            <select
                                id="formato"
                                name="formato"
                                value={formData.formato}
                                onChange={handleInputChange}
                                disabled={!isEditing}
                                className="edit-championship-input"
                            >
                                <option value="single_elimination">Eliminatória Simples</option>
                                <option value="double_elimination">Eliminatória Dupla</option>
                                <option value="round_robin">Round Robin</option>
                            </select>
                        </div>
                    </div>

                    <div className="edit-championship-row">
                        <div className="edit-championship-field">
                            <label htmlFor="rank">Patente Mínima</label>
                            <input
                                type="text"
                                id="rank"
                                name="rank"
                                value={formData.rank}
                                onChange={handleInputChange}
                                disabled={!isEditing}
                                className="edit-championship-input"
                            />
                        </div>

                        <div className="edit-championship-field">
                            <label htmlFor="rodadas">Número de Rodadas</label>
                            <input
                                type="number"
                                id="rodadas"
                                name="rodadas"
                                value={formData.rodadas}
                                onChange={handleInputChange}
                                disabled={!isEditing}
                                className="edit-championship-input"
                                min="1"
                            />
                        </div>
                    </div>

                    <div className="edit-championship-field">
                        <label htmlFor="premiacao">Premiação</label>
                        <input
                            type="text"
                            id="premiacao"
                            name="premiacao"
                            value={formData.premiacao}
                            onChange={handleInputChange}
                            disabled={!isEditing}
                            className="edit-championship-input"
                        />
                    </div>
                </section>

                {/* STATUS E DATAS */}
                <section className="edit-championship-section">
                    <h2>Status e Datas</h2>

                    <div className="edit-championship-row">
                        <div className="edit-championship-field">
                            <label htmlFor="status">Status</label>
                            <select
                                id="status"
                                name="status"
                                value={formData.status}
                                onChange={handleInputChange}
                                disabled={!isEditing}
                                className="edit-championship-input"
                            >
                                <option value="inscricoes_abertas">Inscrições Abertas</option>
                                <option value="em_andamento">Em Andamento</option>
                                <option value="encerrado">Encerrado</option>
                            </select>
                        </div>

                        <div className="edit-championship-field">
                            <label htmlFor="dataProximoJogo">
                                Data do Próximo Jogo
                            </label>
                            <input
                                type="datetime-local"
                                id="dataProximoJogo"
                                name="dataProximoJogo"
                                value={formData.dataProximoJogo.slice(0, 16)}
                                onChange={handleInputChange}
                                disabled={!isEditing}
                                className="edit-championship-input"
                            />
                        </div>
                    </div>

                    <div className="edit-championship-checkbox-field">
                        <input
                            type="checkbox"
                            id="disponivelParaInscricao"
                            name="disponivelParaInscricao"
                            checked={formData.disponivelParaInscricao}
                            onChange={handleInputChange}
                            disabled={!isEditing}
                        />
                        <label htmlFor="disponivelParaInscricao">
                            Disponível para Inscrição
                        </label>
                    </div>
                </section>

                {/* DESCRIÇÃO E REGRAS */}
                <section className="edit-championship-section">
                    <h2>Descrição e Regras</h2>

                    <div className="edit-championship-field">
                        <label htmlFor="descricao">Descrição</label>
                        <textarea
                            id="descricao"
                            name="descricao"
                            value={formData.descricao}
                            onChange={handleInputChange}
                            disabled={!isEditing}
                            className="edit-championship-textarea"
                            rows={4}
                        />
                    </div>

                    <div className="edit-championship-field">
                        <label htmlFor="regras">Regras</label>
                        <textarea
                            id="regras"
                            name="regras"
                            value={formData.regras}
                            onChange={handleInputChange}
                            disabled={!isEditing}
                            className="edit-championship-textarea"
                            rows={4}
                        />
                    </div>
                </section>

                {/* BOTÕES DE AÇÃO */}
                {isEditing && (
                    <div className="edit-championship-actions">
                        <button type="submit" className="edit-championship-save-button">
                            Salvar Alterações
                        </button>
                        <button
                            type="button"
                            className="edit-championship-cancel-button"
                            onClick={handleCancel}
                        >
                            Cancelar
                        </button>
                    </div>
                )}
            </form>
        </div>
    );
}
