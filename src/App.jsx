import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Pages/Layout'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Login from './Pages/Login'
import Games from './Pages/Games'



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<About />} />
          <Route path="games" element={<Games />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
