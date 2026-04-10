import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "../../style/login.css";
import { Link } from "react-router-dom";

function Login() {
  
 
return (
    <>
        <Header />

        <h1>Login</h1>
        <div className="container_input">
            <input type="email" placeholder="Email" className="input_login" />
            <input type="password" placeholder="Senha" className="input_login" /><br /><br />
            <button type="submit" className="button_login">Login</button><br />
            <Link to="/register">Não tem uma conta? Cadastre-se aqui.</Link>
        </div>
        

        <Footer />

    </>
    )
}

export default Login;
    