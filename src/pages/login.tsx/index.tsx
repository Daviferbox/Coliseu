import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Modal from "../../components/Modal/Modal";
import "../../style/login.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { authenticateUser } from "../../data/mockData";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isModalOpen, setIsModalOpen] = useState<boolean>(true); // open by route

    useEffect(() => {
        // when page mounted via /login, keep modal open; no-op otherwise
        setIsModalOpen(true);
    }, []);

    function handleLogin() {
        const user = authenticateUser(email, password);

        if (user) {
            alert("Login bem-sucedido!");
            setIsModalOpen(false);
        } else {
            alert("Email ou senha incorretos. Tente novamente.");
        }
    }

    return (
        <>
            <Header onOpenLogin={() => setIsModalOpen(true)} />

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} labelledBy="login-title">
                <div className="login-modal" id="login-modal">
                    <h2 id="login-title">Entrar</h2>
                    <div className="container_input">
                        <input type="email" placeholder="Email" value={email} className="input_login" onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" placeholder="Senha" value={password} className="input_login" onChange={(e) => setPassword(e.target.value)} />
                        <div style={{ marginTop: 12 }}>
                            <button type="button" className="button_login" onClick={handleLogin}>Login</button>
                        </div>
                        <div style={{ marginTop: 12 }}>
                            <Link to="/register">Não tem uma conta? Cadastre-se aqui.</Link>
                        </div>
                    </div>
                </div>
            </Modal>

            <Footer />
        </>
    )
}

export default Login;
