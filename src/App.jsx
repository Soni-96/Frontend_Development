import React from 'react'
import Home from './components/Home'
import SingleMovie from './components/SingleMovie'
import { BrowserRouter, Routes, Route } from "react-router-dom" 
import Error from "./components/Error"
import Registration from './components/Registration'
import "./App.css"
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movie/:id" element={<SingleMovie/>}/>
        <Route path="*" element={<Error/>}/>    
      </Routes>
      </BrowserRouter>
     
    </div>
  )
}

export default App