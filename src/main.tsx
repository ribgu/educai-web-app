import ThemeProvider from '@mui/material/styles/ThemeProvider'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import theme from './lib/theme.ts'
import Home from './pages/Home.tsx'
import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
import Teste from './pages/Teste'
import Turma from './pages/Turma'

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import TalkWithEdu from './pages/TalkWithEdu.tsx'
import AuthProvider from './providers/AuthProvider.tsx'
import CriarAtividade from './pages/Atividades/CriarAtividade.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/turma/:id',
    element: <Turma />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/teste',
    element: <Teste />
  },
  {
    path: '/edu',
    element: <TalkWithEdu />
  },
  {
    path: '/turma/:id/atividades/criar',
    element: <CriarAtividade />
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
