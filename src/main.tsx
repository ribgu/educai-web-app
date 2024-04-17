import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import LandingPage from './pages/LandingPage.tsx'
import PlatformLayout from './components/PlatformLayout/PlatformLayout.tsx'

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import Turmas from './pages/Turmas.tsx'

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
    <RouterProvider router={router} />
  </React.StrictMode>,
)
