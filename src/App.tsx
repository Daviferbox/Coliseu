import { Route, Routes } from 'react-router-dom'
import './App.css'
import ChampionshipDetail from './pages/ChampionshipDetail'
import Championships from './pages/Championships'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Register from './pages/register.tsx'
import Login from './pages/login.tsx/index.tsx'
import NewChampionship from './pages/NewChampionship/index.tsx'
import { UsuarioLogadoProvider } from './context/AuthContext.tsx'

function App() {

  return (
    <>
      <UsuarioLogadoProvider>
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route path='/' element={<Home />} />
          <Route path='/campeonatos' element={<Championships />} />
          <Route path='/campeonato' element={<ChampionshipDetail />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/cadastrarNovoCampeonato' element={<NewChampionship />} />
        </Routes>
      </UsuarioLogadoProvider>
    </>
  )
}

export default App
