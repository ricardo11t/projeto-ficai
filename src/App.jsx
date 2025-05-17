import './App.css'
import { Route, Routes } from 'react-router-dom'
import Landingpage from './pages/landingpage'
import Fortaleza from './pages/Fortaleza'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Landingpage />} />
      <Route path='/fortaleza' element={<Fortaleza />} />
    </Routes>
  )
}

export default App
