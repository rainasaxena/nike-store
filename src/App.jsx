import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './pages/contact/Contact';
import Explore from './pages/explore/Explore'
import About from './pages/about/About'


const App = () => {
  return (

    <div>
      {/* <Navbar/> */}
      
      <Routes>
        <Route exact path='/contact' element={<Contact />}></Route>
        <Route exact path='/explore' element={<Explore />}></Route>
        <Route exact path='/about' element={<About />}></Route>
        <Route exact path='/' element={<Hero />}></Route>
      </Routes>
      
      {/* <Hero/> */}
    </div>
  )
}

export default App