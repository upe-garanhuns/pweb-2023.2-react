import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider} from "react-router-dom"

import Home from './routes/Home.jsx'
import Cadastro from './routes/Cadastro.jsx'
import Perfil from './routes/Perfil.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "cadastro",
        element: <Cadastro />
      },
      {
        path: "perfil/:id",
        element: <Perfil />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
