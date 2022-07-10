import React from 'react'
import '../components/component_css/Cart.css'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';

const Cart = () => {
  return (
    <div className='Cart-container'>
      <Navbar/>
      <div className='cart-wrapper'>
          <h1 className='cart-title'>WISHLIST</h1>
          <div className='top'>
              <button className='top-button'>ADD MORE</button>
              <button className='top-button'>PAY NOW</button>
          </div>
          <div className='bottom'>
            <div className='Cart-info'>
              <div className='Cart-product'>
                <div className='Cart-productDetail'>
                  <img src="https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVkcm9vbXxlbnwwfHwwfHw%3D&w=1000&q=80" alt="product" />
                  <div className='details'>
                    <span className='product-name'>Title Here</span>
                    <span className='product-owner'>Owner Name</span>
                    <span className='product-rooms'><b>Rooms:</b> Double</span>
                    <span className='product-location'>KotiyalSen</span>
                  </div>
                </div>
                <div className='Cart-productPrice'>
                  <div className='cart-contact'>
                    <WhatsAppIcon/>
                    <PhoneIcon/>
                  </div>
                  <div className='product-price'>RS.5000</div>
                </div>
              </div>
              <hr />
              <div className='Cart-product'>
                <div className='Cart-productDetail'>
                  <img src="https://www.collinsdictionary.com/images/full/singleroom_713511961_1000.jpg" alt="product" />
                  <div className='details'>
                    <span className='product-name'>Title Here</span>
                    <span className='product-owner'>Owner Name</span>
                    <span className='product-rooms'><b>Rooms:</b> Single</span>
                    <span className='product-location'>Gopeshwar</span>
                  </div>
                </div>
                <div className='Cart-productPrice'>
                  <div className='cart-contact'>
                    <WhatsAppIcon/>
                    <PhoneIcon/>
                  </div>
                  <div className='product-price'>RS.3000</div>
                </div>
              </div>
            </div>
          </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Cart
