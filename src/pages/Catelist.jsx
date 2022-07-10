import React from 'react'
import Navbar from "../components/Navbar"
import Products from "../components/Products"
import Footer from "../components/Footer"
import '../components/component_css/Catelist.css'

const Catelist = () => {
  return (
    <div className='Roomlist-container'>
      <Navbar />
      <h1 className='heading'>Single Room</h1>
      <div className='Filter-c'>
        <div className='filter'>
          <div className="filter-text">Filter Rooms:</div>
          <select>
            <option disabled selected>Single Room</option>
            <option>Bathroom inside</option>
            <option>Bathroom outside</option>
          </select>
          <select>
            <option disabled selected>Single Room</option>
            <option>Bathroom inside</option>
            <option>Bathroom outside</option>
          </select>
        </div>
        <div className='filter'>
          <div className="filter-text">Sort Rooms:</div>
          <select>
            <option selected>Newest</option>
            <option>Price Low-High</option>
            <option>Price High-Low</option>
          </select>
        </div>
      </div>
      <Products />
      <Footer />
    </div>
  )
};

export default Catelist
