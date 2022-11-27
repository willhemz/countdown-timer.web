import { createBrowserRouter,  } from 'react-router-dom'
import {Error} from './Components/index'
import Layout from './Layout'
import { Countdown, Home, CreateCountdown } from './Pages'

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
        path: '/:title',
        element: <Countdown/>
      },
      {
        path: '/getstarted',
        element: <CreateCountdown />
      },
      {
        path: '/countdown',
        element: <Countdown />
      }
    ]
  }
])

export {router}
