import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "../../style/notfound.css";


function NotFound() {

    const navigate = useNavigate();

    return (
        <>
            <Header />
            <main className="notfound">
                <h1>Erro 404 — Não encontrado</h1>
                <p className="notfound-desc">A página que você está procurando não existe ou foi movida.</p>
                <div className="notfound-media">
                    <img className="notfound-img" src="https://cdn.hugocalixto.com.br/wp-content/uploads/sites/20/2020/07/error-404-1.png" alt="Erro 404" />
                </div>
                <div className="notfound-actions">
                    <button onClick={() => navigate("/")} className="btn btn-primary">Voltar para a página inicial</button>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default NotFound;