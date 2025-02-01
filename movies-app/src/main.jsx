import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { ContextProvider } from './Context/ContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <ContextProvider>
        <App />
      </ContextProvider>
    </HashRouter>
  </StrictMode>,
)
