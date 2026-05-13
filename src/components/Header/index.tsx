import { useNavigate } from 'react-router-dom'
import '../../style/header.css'

interface HeaderProps {
  onOpenRegister?: () => void
  onOpenLogin?: () => void
}

function Header({ onOpenRegister, onOpenLogin }: HeaderProps) {
  const navigate = useNavigate()

  const navegarHome = () => {
    navigate('/')
  };

  const navegarCampeonatos = () => {
    navigate('/campeonatos')
  };

  const navegarCampeonato = () => {
    navigate('/campeonato')
  };

  const navegarRegistro = () => {
    if (onOpenRegister) onOpenRegister()
    else navigate('/register')
  };

  const navegarLogin = () => {
    if (onOpenLogin) onOpenLogin()
    else navigate('/login')
  }

  return (
    <nav className="header-nav" role="navigation" aria-label="Main navigation">

        <div className="brand" onClick={navegarHome} >

            <img src="https://img.icons8.com/pulsar-line/48/coliseum.png" alt="Coliseu logo" />
            <span className="brand-title">Coliseu</span>

        </div>

        <div className="nav-actions" aria-hidden={false}>

            <button className="btn-link" onClick={navegarCampeonatos}>
              Campeonatos
            </button>

            <button className="btn-link" onClick={navegarCampeonato}>
              Campeonato
            </button>

            <button className="btn-link" onClick={navegarRegistro}>
              Registrar
            </button>

            <button className="btn-link btn-primary" onClick={navegarLogin}>
              Entrar
            </button>

        </div>

    </nav>
  )
}

export default Header