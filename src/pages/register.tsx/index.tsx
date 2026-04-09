import Header from "../../components/Header";
import "../../style/register.css";

function Register() {
    return (
    <>
        <Header />
        <div className="principal">
            <h1>Cadastro de Usuário</h1><br /><br />
            <div className="container_inputs">
                <div className="container_input1">
                    <input className="Nome" placeholder="Nome" />
                    <input className="Apelido" placeholder="Apelido" />
                </div><br /><br />
                <div className="container_input2">
                    <input className="Email" placeholder="Email" />
                    <input className="Senha" placeholder="Senha" />
                </div>
            </div><br /><br />
            <button className="cadastro">Cadastrar</button><br />
            <p></p>
        </div>
    </>   
    );
}

export default Register;