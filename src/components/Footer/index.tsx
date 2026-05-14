import { useNavigate } from "react-router-dom";
import "../../style/footer.css"

function Footer() {


  const navigate = useNavigate();

  return (
    <>
      <footer className="footer">
        <div className="footer__container">

          <div className="footer__brand">
            <h3 className="footer__title">Nome da Empresa</h3>
            <p className="footer__description">Uma frase curta que defina o propósito do seu projeto ou marca.</p>
          </div>

          <div className="footer__links">
            <h3 className="footer__title">Institucional</h3>
            <ul className="footer__list">
              <li className="footer__item"><a onClick={() =>navigate("/sobre")} className="footer__link" data-desc="Saiba mais sobre nossa empresa e missão">Sobre</a></li>
              <li className="footer__item"><a onClick={() =>navigate("/trabalhe-conosco")} className="footer__link" data-desc="Veja oportunidades de carreira">Trabalhe Conosco</a></li>
              <li className="footer__item"><a onClick={() =>navigate("/suporte")} className="footer__link" data-desc="Central de ajuda e suporte ao usuário">Suporte</a></li>
            </ul>
          </div>

          <div className="footer__links">
            <h3 className="footer__title">Conteúdo</h3>
            <ul className="footer__list">
              <li className="footer__item"><a onClick={() =>navigate("/campeonatos")} className="footer__link" data-desc="Veja os campeonatos em destaque">Campeonatos</a></li>
              <li className="footer__item"><a onClick={() =>navigate("/noticias")} className="footer__link" data-desc="Últimas notícias e atualizações">Notícias</a></li>
            </ul>
          </div>

        </div>
      </footer>
    </>

  )
}

export default Footer;