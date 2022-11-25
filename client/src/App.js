import { createBrowserRouter,  } from 'react-router-dom'
import {Error} from './Components/index'
import Layout from './Layout'
import { Countdown } from './Pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: ''
      },
      {
        path: '/countdown',
        element: <Countdown />
      }
    ]
  }
])

export {router}
