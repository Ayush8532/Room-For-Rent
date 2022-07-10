import React from 'react'
import './component_css/navbar.css';
import newim from '../img/rfr.png'
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
const Navbar = () => {
  return (
    <>
        <div className='navbar-container'>
          <div className='navbar-wrapper'>
            <div id="navbar-left">
              <img src={newim} alt="logo" id='logo' />
            </div>
            <div id="navbar-centre">
              <span className='navbar-lang'>EN</span>
              <div className='navbar-search'>
                <input type="text" name="" id="navbar-input" />
                <SearchIcon style={{ fontSize: 16 }} />
              </div>
            </div>
            <div id="navbar-right">
              <div className='right-menu'>REGISTER</div>
              <div className='right-menu'> SIGN IN</div>
              <div className='right-menu'><FavoriteBorderOutlinedIcon /></div>

            </div>
          </div>
        </div>

    </>
  )
}

export default Navbar