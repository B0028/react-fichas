import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './styles/index.css'
import AppRoutes from './routes/AppRoutes.jsx'
import AppThemeProvider from './theme/AppThemeProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppThemeProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AppThemeProvider>
  </StrictMode>,
)
