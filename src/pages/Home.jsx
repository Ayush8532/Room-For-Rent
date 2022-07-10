import React from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Roomlist from '../components/Roomlist'
import Products from '../components/Products'
import Footer from '../components/Footer'



const Home = () => {
  return (
    <div>
      <Navbar/>
      <Slider/>
      <Roomlist/>
      <Products/>
      <Footer/>
    </div>
  )
}

export default Home