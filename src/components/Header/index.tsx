import { Link, useNavigate } from "react-router-dom";


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
                        <image width='50px' height='50px' href='' />

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