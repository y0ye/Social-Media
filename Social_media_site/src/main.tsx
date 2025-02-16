import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Routes, Route, Router, BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes.tsx';
import App from './App.tsx'
import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider>
      <BrowserRouter>
          <AppRoutes />
      </BrowserRouter>
    </MantineProvider>
  </StrictMode>,
)
