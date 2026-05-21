import { Route, Routes } from 'react-router-dom'
import ChampionshipDetail from './pages/ChampionshipDetail'
import Championships from './pages/Championships'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

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
         
        </Routes>
      </UsuarioLogadoProvider>
    </>
  )
}

export default App
