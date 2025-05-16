import './App.css'
import { Route, Routes } from 'react-router-dom'
import Landingpage from './pages/landingpage'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Landingpage />} />
    </Routes>
  ) 
}

export default App
