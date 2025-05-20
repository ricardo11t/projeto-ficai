import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landingpage from './pages/Landingpage'
import Login from './pages/Login'
import Fortaleza from './pages/Fortaleza'
import Cadastro from './pages/Cadastro'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landingpage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/fortaleza" element={<Fortaleza />} />
    </Routes>
  )
}

export default App