import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {UsersPage} from './pages/UsersPage'
import {DetailsPage } from './pages/DetailsPage'
import {ThirdLvl} from './pages/ThirdLvl'


export const router = () => createBrowserRouter([
  {
    path: '/',
    element: <UsersPage />
  },
  {
    path: '/user',
    children: [
      {
        path: '/user/:id',
        element: <DetailsPage />
      },
      {
        path: '/user/:id/address',
        element: <ThirdLvl />
      }
    ]
  }
])

export const Routing = () => (<RouterProvider router={router} />)