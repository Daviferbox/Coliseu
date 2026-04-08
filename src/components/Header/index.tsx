import { Link, useNavigate } from "react-router-dom";
import "../../style/style.css";


function Header() {

    const navigate = useNavigate();
    const navegarHome = () => {
        navigate('/')
    }

    return (
        <>
            <nav>
                <div>
                    <button onClick={navegarHome}>
                        <img width="96" height="96" src="https://img.icons8.com/pulsar-line/48/coliseum.png" alt="coliseum"/>

                        <p>Coliseu</p>
                    </button>

                </div>
                <Link to='/campeonatos'>Campeonatos</Link>
                <Link to='/campeonato'>Campeonato</Link>
            </nav>
        </>
    )

}

export default Header;