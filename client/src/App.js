import { createBrowserRouter,  } from 'react-router-dom'
import {Error} from './Components/index'
import Layout from './Layout'
import { Countdown, Home } from './Pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/countdown',
        element: <Countdown />
      }
    ]
  }
])

export {router}
