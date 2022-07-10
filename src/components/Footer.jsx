import React from 'react'
import './component_css/Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';


function Footer() {
  return (
    <div className='Footer-container'>
      <div className="Footer-left">
          <h1 className='Footer-heading'>RFR</h1>
          <p className='Footer-paragraph'>This website will be time and money saving website for the users.In future it will play an important role in finding the desire rooms for renters. </p>
          <div className='social-container'>
              <div className='social-icon'>
                  <FacebookIcon/>
              </div>
              <div className='social-icon'>
                  <InstagramIcon/>
              </div>
              <div className='social-icon'>
                  <TwitterIcon/>
              </div>
              <div className='social-icon'>
                  <YouTubeIcon />
              </div>

          </div>
      </div>
      <div className="Footer-centre">
          <h3 className='centre-title'>Useful Links</h3>
          <ul className='centre-list'>
              <li className='list-item'>Home</li>
              <li className='list-item'>Wishlist</li>
              <li className='list-item'>Single Room</li>
              <li className='list-item'>Double Room</li>
              <li className='list-item'>Room Partner</li>
              <li className='list-item'>My Account</li>
              <li className='list-item'>Terms</li>
          </ul>
      </div>
      <div className="Footer-right">
          <h3 className='centre-title'>Contact</h3>
          <div className='right-list'>
              <LocationOnIcon style={{marginRight:"10px"}}/>Chamoli,Gopeshwar,Uttarakhand,246424
          </div>
          <div className='right-list'>
              <PhoneIcon style={{marginRight:"10px"}}/>+91 8543753321
          </div>
          <div className='right-list'>
              <MailOutlineIcon style={{marginRight:"10px"}}/>contactme@gmail.com
            </div>
      </div>
    </div>
  )
}

export default Footer
