import { createContext, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {UsersPage} from './pages/UsersPage'
import {DetailsPage } from './pages/DetailsPage'
import {ThirdLvl} from './pages/ThirdLvl'

import './App.scss'

export const BreadcrumbsContext = createContext();

function App() {

  const [breadcrumbs, setBreadcrumbs] = useState([{url: '/', title: 'users'}])

  return (
    <BreadcrumbsContext.Provider value={{breadcrumbs, setBreadcrumbs}}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<UsersPage />} />
          <Route path='/user/:id' element={<DetailsPage />} />+
          <Route path='/user/:id/address' element={<ThirdLvl />} />
        </Routes>
      </BrowserRouter>
    </BreadcrumbsContext.Provider>
  )
}

export default App
