import { useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import { UsuarioLogadoContext } from '../../context/AuthContext'
import '../../style/header.css'

interface HeaderProps {
  onOpenRegister?: () => void
  onOpenLogin?: () => void
}

function Header({ onOpenRegister, onOpenLogin }: HeaderProps) {
  const navigate = useNavigate();
  const authContext = useContext(UsuarioLogadoContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navegarHome = () => {
    navigate('/')
  };

  const navegarCampeonatos = () => {
    navigate('/campeonatos')
  };

  const navegarRegistro = () => {
    if (onOpenRegister) onOpenRegister()
    else navigate('/register')
  };

  const navegarLogin = () => {
    if (onOpenLogin) onOpenLogin()
    else navigate('/login')
  }

  const handleLogout = () => {
    if (authContext) {
      authContext.setId('');
      authContext.setNome('');
      authContext.setApelido('');
      authContext.setEmail('');
      authContext.setSenha('');
      authContext.setAvatar('');
      authContext.setLogado(false);
      setIsMenuOpen(false);
    }
  };

  const verCampeonatos = () => {
    navegarCampeonatos();
    setIsMenuOpen(false);
  };

  return (
    <nav className="header-nav" role="navigation" aria-label="Main navigation">

        <div className="brand" onClick={navegarHome} >

            <img src="https://img.icons8.com/pulsar-line/48/coliseum.png" alt="Coliseu logo" />
            <span className="brand-title">Coliseu</span>

        </div>

        <div className="nav-actions" aria-hidden={false}>

            <button className="btn-link-header" onClick={navegarCampeonatos}>
              Campeonatos
            </button>

            {authContext?.logado ? (
              <div className="user-menu-container">
                <button 
                  className="avatar-button"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  title={`${authContext.apelido}`}
                >
                  <img 
                    src={authContext.avatar} 
                    alt={`Avatar de ${authContext.apelido}`}
                    className="avatar-img"
                  />
                </button>

                {isMenuOpen && (
                  <div className="user-menu-dropdown">
                    <div className="menu-header">
                      <p className="user-nickname">{authContext.apelido}</p>
                    </div>
                    <button 
                      className="menu-item"
                      onClick={verCampeonatos}
                    >
                      📋 Meus Campeonatos
                    </button>
                    <button 
                      className="menu-item logout"
                      onClick={handleLogout}
                    >
                      🚪 Deslogar
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <button className="btn-link-header" onClick={navegarRegistro}>
                  Registrar
                </button>

                <button className="btn-link-header btn-primary" onClick={navegarLogin}>
                  Entrar
                </button>
              </>
            )}

        </div>

    </nav>
  )
}

export default Header