import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function NotFound(){

    const navigate = useNavigate();
    
    return(
        <>
            <Header />
            <h1>Erro 404 Não encontrado</h1>
            <p>A página que você está procurando não existe ou foi movida.</p>
            <button onClick={() => navigate("/")} className="btn">Voltar para a página inicial</button>
            <Footer />
        </>
    )
}

export default NotFound;