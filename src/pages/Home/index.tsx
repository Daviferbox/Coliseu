import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "../../style/home.css"

function Home() {
    
     const navigate = useNavigate();

     const handleNavigateToRegister = () => {
        navigate('/register');
     }
     

    return(
        <>
        <Header /><br /><br />
       
        <main>

           <section className="section-1">
             <h2 className="titulo-1">COLISEU</h2>
             
                <div className="container-informacoes">
                    <p className="texto-1">Venha conhecer o melhor lugar para competir e gerenciar campeonatos de jogos onde se pode ganhar dinheiro</p><br /><br />
                    <p className="texto-2">Conheça os jogos que você pode competir valendo prêmios, ou gerenciar um grande campeonato!</p>

                    <br /><br /><br />
                    
                    <div className="container-imagens">

                        <img src="https://cdn2.steamgriddb.com/file/sgdb-cdn/icon/e1bd06c3f8089e7552aa0552cb387c92/32/512x512.png"   alt="Icone Counter Strike 2" />
                        <img src="https://i.pinimg.com/736x/a4/00/33/a400333f7c9137ad1ebb9ded69755c48.jpg" alt="Icone do valorant" />
                        <img src="https://th.bing.com/th/id/R.090d79cc5c15db0880f8d930fb279b5a?rik=C4xj7AASl7SJsg&riu=http%3a%2f%2ftsukiyashop.com%2fcdn%2fshop%2fcollections%2flol-564233.png%3fv%3d1748087810&ehk=kM1YxaFJXNtnRFoVh8f1Y2f28ctjxPcQiXAy4VPq7No%3d&risl=&pid=ImgRaw&r=0" alt="icone lol" />
                        <img src="https://tl.vhv.rs/dpng/s/582-5820129_rocket-league-icon-png-transparent-png.png" alt="icone rocket league" />
                        <img src="https://www.citypng.com/public/uploads/preview/hd-dota-2-official-logo-png-701751694788589vbfyq561nz.png" alt="Icone dota 2" />
                        <img src="https://cdn2.steamgriddb.com/icon_thumb/1bda4c789c38754f639a376716c5859f.png" alt="" />

                    </div>


              </div>
             
           </section>

           <section className="section-2">
                <div className="container-informacoes2">
                    <h2>Crie sua conta e faça parte da competição</h2>
                    <p className="informaçoes-section-2">Seja você um organizador em busca de uma forma mais prática de gerenciar campeonatos ou um jogador procurando novas competições para participar, o Coliseu foi desenvolvido para oferecer uma experiência simples, rápida e intuitiva.</p>
                    <p className="informaçoes-section-2">Junte-se ao Coliseu e viva a experiência completa do mundo competitivo em uma única plataforma.</p>
                    <button type="button" className="btn-primary" onClick={handleNavigateToRegister} aria-label="Criar conta gratuitamente"> 
                      Criar conta gratuitamente
                    </button>
                </div>
           </section>

           <section className="section-3">
                <div className="container-informacoes3">
                    <h2 className="titulo-1">Como surgiu o COLISEU?</h2>
                    <p>O Coliseu nasceu com o propósito de tornar o universo competitivo mais acessível, organizado e profissional. A plataforma foi desenvolvida para reunir em um único ambiente tudo o que é necessário para criar campeonatos, gerenciar partidas e permitir que jogadores encontrem novas competições para participar.</p>
                    <p>Muitas vezes, a organização de torneios depende de planilhas, mensagens espalhadas e processos manuais que dificultam a experiência tanto para organizadores quanto para participantes. O Coliseu surgiu para resolver esse problema, oferecendo uma solução moderna, intuitiva e centralizada.</p>
                    <p>Nossa missão é simplificar a gestão de campeonatos e aproximar pessoas apaixonadas por competição, proporcionando uma experiência prática, transparente e eficiente.</p>
                </div>
           </section>

           </main>

        <Footer />

      
       
        </>
    )
    
}

export default Home;