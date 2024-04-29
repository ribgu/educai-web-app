import React from 'react'
import ReactDOM from 'react-dom/client'
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import theme from './lib/theme.ts'
import './index.css'
import LandingPage from './pages/LandingPage'
import Turmas from './pages/Turmas'
import Login from './pages/Login'

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import Post from './components/Post/Post'

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
    element: <Post dtPublicacao={new Date} title='ABRACADABRA' description='SAFJIBSAFJBKFASJKBSFAJBKASFJKOLÇ' fileName='IYHUGUGFY'/>,
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
