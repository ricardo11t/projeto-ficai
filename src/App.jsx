import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landingpage from './pages/Landingpage'
import Login from './pages/Login'
import Fortaleza from './pages/Fortaleza'
import Ubajara from './pages/Ubajara'
import Cadastro from './pages/Cadastro'
import Aracati from './pages/Aracati'
import Aquiraz from "./pages/Aquiraz"
import Cidades from './pages/Cidades'
import Jericoacoara from './pages/Jericoacoara'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landingpage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/fortaleza" element={<Fortaleza />} />
      <Route path="/aracati" element={<Aracati />}/>
      <Route path="/aquiraz" element={<Aquiraz />} />
      <Route path='/cidades' element={<Cidades />} />
      <Route path="/ubajara" element={<Ubajara/>} />
      <Route path='/jericoacoara' element={<Jericoacoara />} />
    </Routes>
  )
}

export default App