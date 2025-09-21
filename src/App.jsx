
import React from 'react'
import About from './Pages/about/About'
import Contact from './Pages/Contact/Contact'
import Home from './Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}  />
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}   />
      <Route path="*" element={<h1>404 ! Page not found</h1>}/>
    </Routes>

    </BrowserRouter>
  )
}

export default App