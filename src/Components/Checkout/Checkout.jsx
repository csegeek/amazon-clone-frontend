import React, { useContext, useEffect } from 'react'
import './Checkout.css'
import CheckoutItem from './CheckoutItem'
import { CartContext } from '../CartContext'
import {useNavigate} from 'react-router-dom'
import getSymbolFromCurrency from 'currency-symbol-map'


function Checkout(props) {

  const {item,size,increment} = useContext(CartContext);
  //api cal for add to cart 
  var navigate=useNavigate()
  const cartValue = function(){
    let price=0;
    for(let i=0;i<item.length;i++){
        price+=parseInt(item[i].price);
    }
    return price;
}
  useEffect(
    ()=>{
    if( localStorage.getItem("userId")===null ){
      alert("please Login") 
      navigate("/login")
     }
  } )

  return (  
    <div className='checkout__body'>
         <div className="checkout__container">
          <div style={{fontSize: "3rem" , fontWeight: "500" , padding : "2rem 0rem 0rem 2rem"}}>Shopping Cart</div>
                        <div>
                            { 
                                item.length >0 ?
                                item.map( (value) => (
                                    <CheckoutItem key={value.productID} definition={value} />
                                ))
                                : <div style={{height: "100vh", margin: "3rem" ,fontSize:"2rem", fontWeight:"500"}}> Please buy something</div>
                            }
                    
                        </div>



         </div>
         <div className='checkout__buy'>
         <div style={{ width: "30rem", height:"20rem", padding: "2rem", marginTop: "2.5rem", backgroundColor: "white"}}>
                        <div style={{ fontSize: "2.5rem"}}>Subtotal({size} items):<strong>  {getSymbolFromCurrency('INR')}{ cartValue() }</strong></div>
                        <div style={{paddingTop : "2.5rem "}}>
                            <button className="placeorder__button" >Proceed to Buy</button>
                        </div>
                    </div>
         </div>
    </div>

  )
}

export default Checkout