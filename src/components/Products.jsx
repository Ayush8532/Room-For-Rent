import React from 'react'
import {popularproducts} from "../data"
import Product from "./Product"
import './component_css/product.css'

const Products = () => {
  return (
    <div className='products-box'>
        {popularproducts.map((item)=>(
            <Product item={item} key={item.id}/>
        ))}
      
    </div>
  )
}

export default Products
