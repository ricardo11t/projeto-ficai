import './App.css'
import { Route, Routes } from 'react-router-dom'
import Landingpage from './pages/landingpage'
import Login from './pages/Login'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Landingpage />} />
      <Route path='/Login' element={<Login />} />
    </Routes>
  ) 
}

export default App
