import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/page/Home'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<Home />} path={"/glob-blog/"} />
      </Routes>
    </>
  )
}

export default App