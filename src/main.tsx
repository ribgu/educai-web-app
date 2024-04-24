import React from 'react'
import ReactDOM from 'react-dom/client'
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import theme from './lib/theme.ts'
import './index.css'
import LandingPage from './pages/LandingPage.tsx'
import PlatformLayout from './components/PlatformLayout/PlatformLayout.tsx'
import Turmas from './pages/Turmas.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/teste',
    element: <PlatformLayout />,
  },
  {
    path: '/turmas',
    element: <Turmas />,
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
