import { useState, useRef, useEffect } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { mockUsers } from "../../data/mockData";
import "../../style/register.css";
 
interface UserFormData {
    nome: string;
    apelido: string;
    email: string;
    senha: string;
}
interface FormErrors {
    nome?: string;
    apelido?: string;
    email?: string;
    senha?: string;
}
 
function Register() {
    const [formData, setFormData] = useState<UserFormData>({
        nome: "",
        apelido: "",
        email: "",
        senha: "",
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [success, setSuccess] = useState<boolean>(false);
    // CONTROLE DO MODAL
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
 
    // refs para acessibilidade / foco
    const firstInputRef = useRef<HTMLInputElement | null>(null);
    const modalRef = useRef<HTMLDivElement | null>(null);
 
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (success) setSuccess(false);
    };

    
    useEffect(() => {
        // when page mounted via /login, keep modal open; no-op otherwise
        setIsModalOpen(true);
    }, []);
 
    const validate = (): boolean => {
        const newErrors: FormErrors = {};
        if (!formData.nome.trim()) newErrors.nome = "Nome é obrigatório.";
        if (!formData.apelido.trim()) {
            newErrors.apelido = "Apelido é obrigatório.";
        } else if (mockUsers.some(user => user.apelido === formData.apelido)) {
            newErrors.apelido = "Apelido já está em uso.";
        }
        if (!formData.email.trim()) {
            newErrors.email = "Email é obrigatório.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email inválido.";
        } else if (mockUsers.some(user => user.email === formData.email)) {
            newErrors.email = "Email já está em uso.";
        }
        if (!formData.senha.trim()) {
            newErrors.senha = "Senha é obrigatória.";
        } else if (formData.senha.length < 6) {
            newErrors.senha = "Senha deve ter pelo menos 6 caracteres.";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
 
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validate()) {
            setSuccess(true);
            setFormData({ nome: "", apelido: "", email: "", senha: "" });
            setErrors({});
            //  FECHA MODAL AUTOMÁTICO
            setTimeout(() => {
                setIsModalOpen(false);
                setSuccess(false);
            }, 1500);
        }
    };
 
    // foco inicial e atalhos (Esc + trap de foco simples)
    useEffect(() => {
        if (!isModalOpen) return;
 
        // foco no primeiro input ao abrir
        firstInputRef.current?.focus();
 
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setIsModalOpen(false);
            }
            if (e.key === "Tab" && modalRef.current) {
                const focusable = modalRef.current.querySelectorAll<HTMLElement>(
                    'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
                );
                if (focusable.length === 0) return;
                const first = focusable[0];
                const last = focusable[focusable.length - 1];
                if (!e.shiftKey && document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                } else if (e.shiftKey && document.activeElement === first) {
                    e.preventDefault();
                    last.focus();
                }
            }
        };
 
        document.addEventListener("keydown", onKeyDown);
        return () => document.removeEventListener("keydown", onKeyDown);
    }, [isModalOpen]);
 
    return (
        <>
            <Header onOpenRegister={() => setIsModalOpen(true)} />
            <h1>Cadastro de Usuário</h1>
 
            {/* O botão de abrir modal foi removido daqui — use "Registrar" no Header para abrir o modal */}
 
            {/* MODAL */}
            {isModalOpen && (
                <div
                    className="modal-overlay"
                    onClick={() => setIsModalOpen(false)}
                    aria-hidden={!isModalOpen}
                >
                    <div
                        id="register-modal"
                        className="modal-content"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="register-title"
                        onClick={(e) => e.stopPropagation()}
                        ref={modalRef}
                    >
                        <button
                            className="close"
                            onClick={() => setIsModalOpen(false)}
                            aria-label="Fechar cadastro"
                        >
                            X
                        </button>
                        <h2 id="register-title">Cadastro</h2>
                        <div className="container_inputs">
                            <div className="container_input1">
                                <form onSubmit={handleSubmit}>
                                    <input
                                        ref={firstInputRef}
                                        type="text"
                                        name="nome"
                                        placeholder="Nome"
                                        value={formData.nome}
                                        onChange={handleChange}
                                        aria-invalid={!!errors.nome}
                                        aria-describedby={errors.nome ? "error-nome" : undefined}
                                    />
                                    {errors.nome && <p id="error-nome" className="error">{errors.nome}</p>}
 
                                    <input
                                        type="text"
                                        name="apelido"
                                        placeholder="Apelido"
                                        value={formData.apelido}
                                        onChange={handleChange}
                                        aria-invalid={!!errors.apelido}
                                        aria-describedby={errors.apelido ? "error-apelido" : undefined}
                                    />
                                    {errors.apelido && <p id="error-apelido" className="error">{errors.apelido}</p>}
 
                                    <div className="container_input2">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            aria-invalid={!!errors.email}
                                            aria-describedby={errors.email ? "error-email" : undefined}
                                        />
                                        {errors.email && <p id="error-email" className="error">{errors.email}</p>}
 
                                        <input
                                            type="password"
                                            name="senha"
                                            placeholder="Senha"
                                            value={formData.senha}
                                            onChange={handleChange}
                                            aria-invalid={!!errors.senha}
                                            aria-describedby={errors.senha ? "error-senha" : undefined}
                                        />
                                        {errors.senha && <p id="error-senha" className="error">{errors.senha}</p>}
                                    </div>
                                    <div className="entre">
                                        <button type="submit" className="cadastro">
                                            Cadastrar
                                        </button>
                                    </div>
                                </form>
                                {success && (
                                    <p className="success">
                                        Cadastro realizado com sucesso!
                                    </p>
                                )}
                            </div>
                            <Link to="/login">
                                Já tem uma conta? Faça login aqui.
                            </Link>
                        </div>
                    </div>
                </div>
            )}
            <Footer />
        </>
    );
}
export default Register;