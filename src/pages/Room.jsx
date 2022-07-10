import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import '../components/component_css/Room.css'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const Room = () => {
  return (
    <div className='Room-container'>
        <Navbar/>
        <div className='Room-wrapper'>
            <div className='Image-container'>
                <img src="https://us.123rf.com/450wm/vanoa2/vanoa21601/vanoa2160100003/50989998-single-room-in-hotel-with-big-picture-on-the-wall.jpg?ver=6" alt="" className='Info-img'/>
            </div>
            <div className='Info-container'>
                <h1 className='Info-title'>Heading here</h1>
                <p className='Info-desc'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam ea, atque repudiandae fugit non praesentium quas minima voluptates quibusdam quia temporibus fuga voluptate deleniti sed libero dicta soluta at repellat minus commodi. Ducimus, fugit explicabo provident cum rerum natus omnis tempore ullam, perspiciatis incidunt facere eaque quos? Earum, magni quas.</p>
                <span className='price'>Rs.3000/month</span>
                <div className='Info-filter'>
                    <div className='filter'>
                        <button className='Book-button'>BOOK NOW</button>
                    </div>
                    <div className='filter'>
                        <a href="https://wa.me/8532959622"><WhatsAppIcon className='whatsapp'/></a>
                    </div>
                    <div className='filter'>
                        <FavoriteBorderOutlinedIcon/>
                    </div>
                    
                </div>
            </div>
        </div>
        <Footer/>
      
    </div>
  )
}

export default Room
