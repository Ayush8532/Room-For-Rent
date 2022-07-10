import React from 'react'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Search from '@mui/icons-material/Search';
import './component_css/product.css'

const Product = ({ item }) => {
    return (
        <>
            <div className='product-b'>
                <div className='product-box'>
                    <img src={item.img} alt="" className='image' />
                    <div className='box'>
                        <div className='product-icons'>
                            <FavoriteBorder />
                        </div>
                        <div className='product-icons'>
                            <Search style={{ color: 'black' }} />
                        </div>
                    </div>
                </div>
                <div className='description-area'>
                    <div className='product-detail'>
                        <div className='product-title'>
                            <h4>{item.title}</h4>
                            <h5>{item.owner}</h5>
                        </div>
                        <div className='product-desc'>
                            <p>{item.description}</p>
                        </div>
                    </div>
                    <div className='button-area'>
                        <h3>Price</h3>
                        <button className='book-button'>Rent</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product
