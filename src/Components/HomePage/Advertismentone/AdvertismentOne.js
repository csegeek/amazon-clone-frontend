import React from 'react'
import './AdvertismentOne.css'
function AdvertismentOne(props) {
  return (
    <div className='AdvertismentOne__main'>
        <div className='AdvertismentOne__header'>{props.desc}</div>
        <div className='AdvertismentOne__body'>
            <img src={props.image} style={{ width:"30rem" , height:"25rem"} } ></img>
        </div>
        <div className='AdvertismentOne__footer'>See more</div>
    </div>
  )
}

export default AdvertismentOne