import { Route, Routes } from 'react-router-dom'
import './App.css'
import ChampionshipDetail from './pages/ChampionshipDetail'
import Championships from './pages/Championships'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

function App() {

  return (
    <>
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<Home />} />
        <Route path='/campeonatos' element={<Championships />} />
        <Route path='/campeonato' element={<ChampionshipDetail />} />
      </Routes>
    </>
  )
}

export default App
