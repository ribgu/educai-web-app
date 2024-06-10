import ThemeProvider from '@mui/material/styles/ThemeProvider'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import theme from './lib/theme.ts'
import Home from './pages/Home.tsx'
import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
import Turma from './pages/Turma'

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from 'react-router-dom'
import TalkWithEdu from './pages/TalkWithEdu.tsx'
import AuthProvider from './providers/AuthProvider.tsx'
import Material from './pages/Material.tsx'
import AnswerQuestionPage from './components/AnswerQuestionPage/AnswerQuestionPage.tsx'
import ClassworkList from './components/ClassworksList/ClassworksList.tsx'
import CriarAtividade from './pages/Atividades/CriarAtividade.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/home',
    element: <AuthProvider>
      <Home />
    </AuthProvider>,
  },
  {
    path: '/turma/:id',
    element: <AuthProvider>
      <Turma />
    </AuthProvider>,
  },
  {
    path: '/edu',
    element: <AuthProvider>
      <TalkWithEdu />
    </AuthProvider>,
  },
  {
    path: '/turma/criar-atividade',
    element: <AuthProvider>
      <CriarAtividade />
    </AuthProvider>,
  },
  {
    path: '/turma/responder-atividade',
    element: <AuthProvider>
      <AnswerQuestionPage />
    </AuthProvider>,
  },
  {
    path: '/material',
    element: <AuthProvider>
    <Material />
  </AuthProvider>,
  },
  {
    path: '/turma/visualizar-atividade',
    element: <AuthProvider>
      <ClassworkList></ClassworkList>
    </AuthProvider>,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Outlet />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)