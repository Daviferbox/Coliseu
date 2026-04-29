import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "../../style/login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { authenticateUser } from "../../data/mockData";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin() {
        const user = authenticateUser(email, password);

        if (user) {
            alert("Login bem-sucedido!");
        } else {
            alert("Email ou senha incorretos. Tente novamente.");
        }
    }

    return (
        <>
            <Header />

            <h1>Login</h1>
            <div className="container_input">
                <input type="email" placeholder="Email" value={email} className="input_login" onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Senha" value={password} className="input_login" onChange={(e) => setPassword(e.target.value)} /><br /><br />
                <button type="submit" className="button_login" onClick={handleLogin}>Login</button><br />
                <Link to="/register">Não tem uma conta? Cadastre-se aqui.</Link>
            </div>
            
            <Footer />

        </>
    )
}

export default Login;
