import React from 'react'
import './component_css/category.css'

function CategoryItem({item}) {
  return (
    <div className='container'>
        <img src={item.img} alt="" className='image' />
        <div className='info'>
            <h1 className='heading'>{item.title}</h1>
            <button>Show Now</button>
        </div>
      </div> 
  )
}

export default CategoryItem

