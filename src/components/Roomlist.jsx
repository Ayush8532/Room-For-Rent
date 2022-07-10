import React from 'react'
import {categories} from  '../data';
import './component_css/category.css'
import CategoryItem from './CategoryItem';

function Roomlist() {
  return (
    <div className='category-item'>
        {categories.map(item=>(
            <CategoryItem item={item} key={item.id}/>
        ))}  
    </div>
  )
};

export default Roomlist


