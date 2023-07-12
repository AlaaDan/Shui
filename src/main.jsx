import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Flow from './views/Flow.jsx'
import Write from './views/Write.jsx'
import Remove from './views/Remove.jsx'
import Error from './views/Error.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error/>
  },
  {
    path: '/flow',
    element: <Flow/>,
    errorElement: <Error/>
  },
  {
    path: '/write',
    element: <Write />,
    errorElement: <Error/>
  },
  {
    path: '/remove',
    element: <Remove />,
    errorElement: <Error/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
