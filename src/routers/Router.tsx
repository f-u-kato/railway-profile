import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

import { Home } from '../pages/Home'
import { NotFound } from '../pages/NotFound'

export const Router = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
