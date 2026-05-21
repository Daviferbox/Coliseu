import "../../style/login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useRef, useContext, useCallback } from "react";
import { authenticateUser } from "../../data/mockData";
import { UsuarioLogadoContext } from "../../context/AuthContext";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const authContext = useContext(UsuarioLogadoContext);

    // refs para acessibilidade / foco
    const firstInputRef = useRef<HTMLInputElement | null>(null);

    const handleLogin = useCallback(() => {
        const user = authenticateUser(email, password);

        if (user && authContext) {
            authContext.setId(user.id);
            authContext.setNome(user.nome);
            authContext.setApelido(user.apelido);
            authContext.setEmail(user.email);
            authContext.setSenha(user.senha);
            authContext.setAvatar(user.avatar);
            authContext.setLogado(true);

            alert("Login bem-sucedido!");
            navigate('/');
        } else {
            alert("Email ou senha incorretos. Tente novamente.");
        }
    }, [email, password, authContext, navigate]);

    return (
        <>
            <div className="login-modal" id="login-modal">
                <h2 id="login-title">Entrar</h2>
                <div className="container_input">
                    <input ref={firstInputRef} type="email" placeholder="Email" value={email} className="input_login" onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Senha" value={password} className="input_login" onChange={(e) => setPassword(e.target.value)} />
                    <div style={{ marginTop: 12 }}>
                        <button type="button" className="button_login" onClick={handleLogin}>Login</button>
                    </div>
                    <div style={{ marginTop: 12 }}>
                        <Link to="/register">Não tem uma conta? Cadastre-se aqui.</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;
