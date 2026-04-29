import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { mockUsers } from "../../data/mockData";
import "../../style/register.css";

function Register() {
    const [formData, setFormData] = useState({
        nome: "",
        apelido: "",
        email: "",
        senha: ""
    });
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.nome.trim()) newErrors.nome = "Nome é obrigatório.";
        if (!formData.apelido.trim()) newErrors.apelido = "Apelido é obrigatório.";
        else if (mockUsers.some(user => user.apelido === formData.apelido)) newErrors.apelido = "Apelido já está em uso.";
        if (!formData.email.trim()) newErrors.email = "Email é obrigatório.";
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email inválido.";
        else if (mockUsers.some(user => user.email === formData.email)) newErrors.email = "Email já está em uso.";
        if (!formData.senha.trim()) newErrors.senha = "Senha é obrigatória.";
        else if (formData.senha.length < 6) newErrors.senha = "Senha deve ter pelo menos 6 caracteres.";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            // Simular cadastro
            setSuccess(true);
            // Reset form
            setFormData({ nome: "", apelido: "", email: "", senha: "" });
        }
    };

    return (
        <>
            <Header />
            <h1>Cadastro de Usuário</h1>
            <div className="container_inputs">
                <div className="container_input1">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="nome"></label>
                        <input
                            type="text"
                            name="nome"
                            placeholder="Nome"
                            value={formData.nome}
                            onChange={handleChange}
                        />
                        {errors.nome && <p className="error">{errors.nome}</p>}

                        <label htmlFor="apelido"></label>
                        <input
                            type="text"
                            name="apelido"
                            placeholder="Apelido"
                            value={formData.apelido}
                            onChange={handleChange}
                        />
                        {errors.apelido && <p className="error">{errors.apelido}</p>}

                        <div className="container_input2">
                            <label htmlFor="email"></label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && <p className="error">{errors.email}</p>}

                            <label htmlFor="senha"></label>
                            <input
                                type="password"
                                name="senha"
                                placeholder="Senha"
                                value={formData.senha}
                                onChange={handleChange}
                            />
                            {errors.senha && <p className="error">{errors.senha}</p>}
                        </div>

                        <div className="entre">
                            <button type="submit" className="cadastro">Cadastrar</button>
                        </div>
                    </form>
                    {success && <p className="success">Cadastro realizado com sucesso!</p>}
                </div>
                <Link to="/login">Já tem uma conta? Faça login aqui.</Link>
                <p></p>
            </div>
            <Footer />
        </>
    );
}

export default Register;