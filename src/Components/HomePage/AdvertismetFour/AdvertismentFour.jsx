import './AdvertismentFour.css';
import React from 'react'

function AdvertismentFour(props) {
  return (
         <div className='AdvertismentOne__main'>
        <div className='AdvertismentOne__header'>{props.desc}</div>
        <div className='AdvertismentOne__body'>
            <img src={props.image1}         className="ad__fourimage"></img>
            <img src={props.image2}       className="ad__fourimage"></img>
            <img src= {props.image3}      className="ad__fourimage"></img>
            <img src= {props.image4}       className="ad__fourimage"></img>
        </div>
        <div className='AdvertismentOne__footer'>See more</div>
    </div>
    )
}

export default AdvertismentFour;