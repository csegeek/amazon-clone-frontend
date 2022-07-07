import React from 'react'
import './RightPanel.css'
import Rating from '@mui/material/Rating';
import getSymbolFromCurrency from 'currency-symbol-map'
function Product(props) {
  return (
    <div className='product'>
        <div className='product__image'>
            <img src={props.mobile.imageURL} />
        </div>
        <div className='product__name'>
           {props.mobile.name}
        </div>
        <div className='product__rating'>
        <Rating name="read-only" value={4} readOnly />
        {props.mobile.rating}
        </div>
        <div className='product__price'>
        {getSymbolFromCurrency('INR')} {props.mobile.price}
        </div>
        
    </div>
  )
}

export default Product