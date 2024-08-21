import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { AlbumsProvider } from './context/AlbumsProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AlbumsProvider>
      <App />
    </AlbumsProvider>
  </StrictMode>,
)
