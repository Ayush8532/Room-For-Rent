import React from 'react'
import './component_css/slider.css'
import {Carousel} from 'react-bootstrap'


function Slider() {
  return (
    <div className='slide'>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 img-con"
            src='https://media.istockphoto.com/photos/armchair-and-white-wall-picture-id1221664111?b=1&k=20&m=1221664111&s=170667a&w=0&h=X_tBLbTo3-KGHwVCZTxJ8ooP1p0qyGhyTKHZC4lQ_k0='
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className='heading'>FIND BEST ROOM NOW</h3>
            <p className='desc'>Welcome to our website, here you will get cheap single room just click below </p>
            <button className='btn'>SHOW NOW</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-con"
            src="http://www.seaviewhouse.com.au/wp-content/uploads/2015/08/DSC0784-1023x682.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 className='heading'>Second slide label</h3>
            <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className='btn'>SHOW NOW</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-con"
            src="https://sites.create-cdn.net/siteimages/64/7/1/647170/18/3/6/18368029/1023x682.jpg?1590942450"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className='heading'>Third slide label</h3>
            <p className='desc'>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            <button className='btn'>SHOW NOW</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    </div>
  )
}

export default Slider
