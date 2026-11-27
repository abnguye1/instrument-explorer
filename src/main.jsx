import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router'
import AuthProvider from './auth/AuthProvider.jsx'
import App from './App.jsx'
import './index.css'

// HashRouter so GitHub pages can serve from subdirectory
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </HashRouter>
  </StrictMode>,
)
