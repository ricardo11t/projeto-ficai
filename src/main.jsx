import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import CidadesProvider from './context/CidadesProvider.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <CidadesProvider>
        <App />
      </CidadesProvider>
    </StrictMode>
  </BrowserRouter>
)
