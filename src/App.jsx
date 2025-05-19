import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landingpage from './pages/landingpage'
import Login from './pages/Login'
import Fortaleza from './pages/Fortaleza'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landingpage />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/fortaleza" element={<Fortaleza />} />
    </Routes>
  )
}

export default App
