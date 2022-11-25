import { createBrowserRouter,  } from 'react-router-dom'
import {Error} from './Components/index'
import Layout from './Layout'

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
        path: '',
        element: ''
      }
    ]
  }
])

export {router}
