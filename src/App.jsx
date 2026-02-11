import { useState } from 'react'
import Dashboard from './Pages/Dashboard'
import Leyout from './Components/Leyout'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Reader from './Pages/Reader'
import Tasbih from './Pages/Tasbih'


function App() {
  return (
      <Leyout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/reader/:suraId" element={<Reader />} />
          <Route path="/Tasbih" element={<Tasbih />} />
        </Routes>
      </Leyout>
  )
}

export default App
