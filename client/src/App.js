import { createBrowserRouter,  } from 'react-router-dom'
import {Error} from './Components/index'

const router = createBrowserRouter([
  {
    path: '/',
    element: '',
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
