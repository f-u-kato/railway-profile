import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

import { Home } from '../pages/Home'
import { NotFound } from '../pages/NotFound'
import { Contact } from '../pages/Contact'

export const Router = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/contact' element={<Contact/>}/>
        <Route element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
