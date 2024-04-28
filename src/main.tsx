import React from 'react'
import ReactDOM from 'react-dom/client'
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import theme from './lib/theme.ts'
import './index.css'
import LandingPage from './pages/LandingPage.tsx'
import Turmas from './pages/Turmas.tsx'
import Turma from './components/Turma/Turma.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import Login from './pages/Login.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/turmas',
    element: <Turmas />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/teste',
    element: <Turma nome='turma' disciplina='sexo' qtdAlunos={69}/>,
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
