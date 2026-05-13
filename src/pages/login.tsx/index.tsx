import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Modal from "../../components/Modal/Modal";
import "../../style/login.css";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { authenticateUser } from "../../data/mockData";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isModalOpen, setIsModalOpen] = useState<boolean>(true); // open by route

    // refs para acessibilidade / foco
    const firstInputRef = useRef<HTMLInputElement | null>(null);
    const modalRef = useRef<HTMLDivElement | null>(null);

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
