import { useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import { UsuarioLogadoContext } from '../../context/AuthContext'
import Modal from '../Modal/Modal'
import Login from '../../pages/Login/index.tsx'
import Register from '../../pages/Register'
import '../../style/header.css'

function Header() {
  const navigate = useNavigate();
  const authContext = useContext(UsuarioLogadoContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const navegarHome = () => {
    navigate('/')
  };

  const navegarCampeonatos = () => {
    navigate('/campeonatos')
  };

  const navegarRegistro = () => {
    setIsRegisterModalOpen(true);
  };

  const navegarLogin = () => {
    setIsLoginModalOpen(true);
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
    <>
      <nav className="header-nav" role="navigation" aria-label="Main navigation">
        <div className="brand" onClick={navegarHome}>
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

      {/* Modais */}
      <Modal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} labelledBy="login-title">
        <Login onLoginSuccess={() => setIsLoginModalOpen(false)} onOpenRegister={() => { setIsLoginModalOpen(false); setIsRegisterModalOpen(true); }} />
      </Modal>

      <Modal isOpen={isRegisterModalOpen} onClose={() => setIsRegisterModalOpen(false)} labelledBy="register-title">
        <Register onRegisterSuccess={() => setIsRegisterModalOpen(false)} onOpenLogin={() => { setIsRegisterModalOpen(false); setIsLoginModalOpen(true); }} />
      </Modal>
    </>
  )
}

export default Header