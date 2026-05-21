import { useState, useRef, useEffect } from "react";
import type { ChangeEvent, FormEvent } from "react";
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

interface RegisterProps {
    onRegisterSuccess?: () => void;
    onOpenLogin?: () => void;
}

function Register({ onRegisterSuccess, onOpenLogin }: RegisterProps) {
    const [formData, setFormData] = useState<UserFormData>({
        nome: "",
        apelido: "",
        email: "",
        senha: "",
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [success, setSuccess] = useState<boolean>(false);
    const firstInputRef = useRef<HTMLInputElement | null>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (success) setSuccess(false);
    };

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
            setTimeout(() => {
                onRegisterSuccess?.();
            }, 1500);
        }
    };

    useEffect(() => {
        firstInputRef.current?.focus();
    }, []);

    return (
        <div className="register-modal">
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
                <button
                    type="button"
                    className="btn-link"
                    onClick={onOpenLogin}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#0b4eff', textDecoration: 'underline' }}
                >
                    Já tem uma conta? Faça login aqui.
                </button>
            </div>
        </div>
    );
}

export default Register;