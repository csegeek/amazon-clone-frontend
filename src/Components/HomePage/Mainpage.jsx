import React, { Component } from 'react'
import './Mainpage.css'
import AdvertismentOne from './Advertismentone/AdvertismentOne';
import AdvertismentFour from './AdvertismetFour/AdvertismentFour';
import { Link } from 'react-router-dom';
export default class Mainpage extends Component {
  constructor(props){
    super(props);
    this.state={

    }
  }
  render() {
    return (
      <div className='mainpage__component'>
        <div className='mainpage'>
         <div style={{ paddingTop: "30rem", display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"centre"}}>
        
         <Link to={"/display"} >
          <AdvertismentOne image="https://ik.imagekit.io/amazonclone01/amazon-image/box3_2_HUBSCLHgR.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654715766122"  desc="Up to 15% off on | Mobiles and Gadgets of Top Brands" /> 
       </Link>
         
         
         
         <AdvertismentFour
         image1="https://ik.imagekit.io/amazonclone01/amazon-image/box4_1_YFMUk3RLC.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654715767329"
         image2="https://ik.imagekit.io/amazonclone01/amazon-image/box4_2_eQqvINWhq.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654715767867"
         image3="https://ik.imagekit.io/amazonclone01/amazon-image/box4_4_q-TaIOTND.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654715768436"
         image4="https://ik.imagekit.io/amazonclone01/amazon-image/box4_3_j-3xAGmOt.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654715768157"
         desc="Up to 50% of | On Mens Fashion"
         />

         <AdvertismentOne image="https://ik.imagekit.io/amazonclone01/amazon-image/boatheadphones_CpGkMZr69.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1656094719000" desc="Up to 40% off on Boat HeadPhones and speakers" />
        
         <AdvertismentOne image="https://ik.imagekit.io/amazonclone01/amazon-image/sofa_J9BnYIc77.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1656096277783"  desc="Up to 45% off | Top offers from Amazon Brand -...."/>
        
         <AdvertismentOne image="https://ik.imagekit.io/amazonclone01/amazon-image/supemen_RjDCH7xT_?ik-sdk-version=javascript-1.4.3&updatedAt=1656097241527" desc="Min 30% off | On Health and Fitness Supplements ....." />
        
        
         <AdvertismentFour
         image1="https://ik.imagekit.io/amazonclone01/amazon-image/ac_7UCpNmmAz.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1656094718912"
         image2="https://ik.imagekit.io/amazonclone01/amazon-image/refrigrator_fDrYX-DIz.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1656094721583"
         image3="https://ik.imagekit.io/amazonclone01/amazon-image/microwave_8vfXDRrCY.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1656094721491"
         image4="https://ik.imagekit.io/amazonclone01/amazon-image/washingmachine_iNpjP1ycuQ.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1656094723409"
         desc="Get All Home Appliance | shop by Brand And Category"
         />


      <AdvertismentFour
         image1="https://ik.imagekit.io/amazonclone01/amazon-image/kellogs_olC4KDDP8.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1656094720401"
         image2="https://ik.imagekit.io/amazonclone01/amazon-image/refine_DxFmSeCGs.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1656094719585"
         image3="https://ik.imagekit.io/amazonclone01/amazon-image/snacks_1CfTilMbp.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1656094721942"
         image4="https://ik.imagekit.io/amazonclone01/amazon-image/surfexcel_AfjBO2gM57.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1656094722807"
         desc="Up to 40% off | Shop now on Amazon fresh ... "
         />

         <AdvertismentOne image="https://ik.imagekit.io/amazonclone01/amazon-image/tab5_RXFI8aNb0.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654715772921" desc="Up to 40% off | on Home Decorators" />
         
          </div>
        </div>
      </div>
    )
  }
}
