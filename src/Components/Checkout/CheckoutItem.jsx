import axios from 'axios'
import React from 'react'
import './Checkout.css'
import getSymbolFromCurrency from 'currency-symbol-map'
function CheckoutItem(props) {






   const removeFromCart=()=>{
   var cart={
      userId:localStorage.getItem("userId"),
      productId:props.definition.productID
     }
     console.log(cart)
  axios.delete("http://localhost:8081/amazon/addToCart/remove",{ data: cart }).then(
    window.location.reload()
  )
  .catch(
    (e)=>{
      console.log(e.message)
    }
  )
   }
   


  return (
    <div>
          <div style={{ border: "1px solid #E7E7E7", width: "95%", display:"flex", height: "250px", margin: "25px"}}>
                
          <div style={{margin: "25px"}}>
                    <img height="200px" src={props.definition.imageURL} />
                </div>
                <div style={{ marginTop: "20px"}}>
                    <div style={{fontSize: "20px"}} className="textgap">{props.definition.name}</div>
                    <div style={{ fontWeight: "bold"}} className="textgap">  {getSymbolFromCurrency('INR')} {props.definition.price}</div>
                    <div className="textgap">In Stock </div>
                </div>

                <div className='remove__btn'>
                  <button onClick={removeFromCart}>Remove Item</button>
                </div>
            </div>
    </div>
  )
}

export default CheckoutItem