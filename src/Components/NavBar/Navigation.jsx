import React, { Component } from 'react'
import './Navigation.css';
import { CartContext } from '../CartContext';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';

export default class Navigation extends Component {
     static contextType=CartContext;
      constructor(props){
        super(props)
        this.state={
          user:""
        }
       
      }

    

logout=()=>{
  signOut(auth).then(
    () => {
      // Sign-out successful.
       localStorage.removeItem("user");
       localStorage.removeItem("userId");
          window.location.reload();
    }).catch((error) => {
      alert(error.message)
    });
 
}
      

     


  render() {
    let {item,size,increment}=this.context;
    return (
      <div>
      <div className='navbar__component'> 
      <div className='navbar__logo'> 
       <img src="https://ik.imagekit.io/amazonclone01/amazon-image/amazon_PNG25_OEOA6zXIP.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656997712342" alt='' /> 
       </div>
       <div className='navbar__locator'>
         <div className='navbar__locatorImage'>
          <img src='https://ik.imagekit.io/amazonclone01/amazon-image/PinClipart.com_llanta-clipart_1973478_D8KTdDte5.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656998837120' />
         </div>
         <div className='navbar__location' style={{fontWeight:"700", fontSize:"1.5rem" }} > Banglore </div>
       </div>
       <div className='navbar__searchcomponent'>
         <div className='navbar__dropdown '>
           <select>
            <option value='All'>All</option>
            <option value='Alexa-skilla'>Alexa-skills</option>
            <option value='Amazon-Devices'>Amazon Devices</option>
            <option value='Books'>Books</option>
            <option value='Baby'>Baby</option>
            <option value='Beauty'>Beauty</option>
           </select>
         </div>
          <div>
            <input className='navbar__searchbox'type="text"></input>
          </div>
          <div className='navbar__searchicondiv'>
            <div className='navbar__searchicon'>
              <img src='https://ik.imagekit.io/amazonclone01/amazon-image/search-icons-283914_Q_sJEY3-G.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656998498720' alt=''/>
            </div>
          </div>
           <div className='navbar__region'>  
           <img src="https://ik.imagekit.io/amazonclone01/amazon-image/indiaicon_xCbAf0bG_.png?ik-sdk-version=javascript-1.4.3&updatedAt=1654855891809" alt="indiaicon" />
           </div>

           <div className='navbar__signin navbar__text'>
     {
     (localStorage.getItem("user")===null)?     
          <Link to={"/login"}>
         <div >Hello,Signin</div>
          <div style={{fontWeight:"700"}}  >Account & List</div>
          </Link>:
          <div className='logout__handler'>
          <div  >Hello,{localStorage.getItem("user")}</div>
          <div style={{fontWeight:"700"}}  >Account & List</div>
           </div>

  }
          </div>

          <div className='logout__btn'> 
          {
            (localStorage.getItem("user") !=null)?
            <button id="logout" onClick={this.logout}> Logout</button>:<div></div>
          }
           </div>
         
          <div className='navbar__returns navbar__text'>
            <div style={{fontsize:"1.4rem"}}  >Returns</div> 
            <div style={{fontWeight:"700"}}  >& Order</div></div>

           <Link to={"/checkout"}>
          <div className='navbar__cart navbar__text'>
            <div className='navbar__carticon'> 
            <div className='navbar__cart_item_count'>{size}</div>
            <img src='https://ik.imagekit.io/amazonclone01/amazon-image/pngaaa.com-3531901_8BRFPeimf.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656998498065' alt=''/>
            </div>
            <div className='navbar__cart 'style={{fontWeight:"700",marginTop:'1.7rem'}} > Cart</div>
          </div>
          </Link>
       </div>
       </div>
       <div className="navbar__footer">
                    <div className="navbar__footer_text" style={{marginLeft:"4rem"}}>Best Seller</div>
                    <div className="navbar__footer_text">Mobile</div>
                    <div className="navbar__footer_text">Amazon Pay</div>
                    <div className="navbar__footer_text">Fashion</div>
                    <div className="navbar__footer_text">Electronics</div>
                    <div className="navbar__footer_text">Prime</div>
                    <div className="navbar__footer_text">New Release</div>
                    <div className="navbar__footer_text">Customer Service</div>
                    <div className="navbar__footer_text">Computers</div>
                    <div className="navbar__footer_text">Home & Kitchen</div>
        </div>
     
      </div>
    )
  }
}
