import React from 'react'
import ReactDOM from 'react-dom/client'
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import theme from './lib/theme.ts'
import './index.css'
import LandingPage from './pages/LandingPage'
import Turmas from './pages/Turmas'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import Login from './pages/Login.tsx'
import PostCard from './components/PostCard/PostCard.tsx'

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
    element: <PostCard />,
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
