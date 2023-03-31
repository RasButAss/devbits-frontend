import React,{useEffect, useRef} from 'react'
import axios from 'axios'
import Navbar from './Componenets/Navbar/Navbar'
import Homepage from './Componenets/Homepage/Homepage'
import About from './Componenets/AboutUs/About'
import Features from './Componenets/Features/Features'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Homepage />
      <Features />
      <About />
    </div>
  )
}

export default Home