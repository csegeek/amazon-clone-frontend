import React, { useEffect,useState,useContext } from 'react';
import './PlaceOrder.css';
import Rating from '@mui/material/Rating';
import Paper from '@mui/material/Paper';
import {Link, useParams} from 'react-router-dom';
import { CartContext } from '../CartContext';
import axios from "axios";
import {useNavigate} from 'react-router-dom'

function PlaceOrder(props) {
 const [productDetails,setproductDetails]=useState([]);

 const {item,size,increment}=useContext(CartContext);
  let {id}=useParams();
     var navigate=useNavigate();
  useEffect(
  ()=>{
     
    axios.get(`https://amazon-clone-product-mservice.herokuapp.com/amazon/products/getById/${id}`).then((res)=>{
      setproductDetails(res.data);
    })
    
      //api calls
      // let list =[
      //     { id: 123456543, name : "Iphone10", rating: "34565", price: "4534", image:"https://ik.imagekit.io/amazonclone01/amazon-image/mobiles/71i2XhHU3pL._AC_UL640_FMwebp_QL65__TQbgIknT0.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1654715777048"},
      //     { id: 54342265, name : "Iphone11", rating: "656", price:"76543456", image:"https://ik.imagekit.io/amazonclone01/amazon-image/mobiles/71ZOtNdaZCL._AC_UL640_FMwebp_QL65__Ceqp0YP0S.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1654715779341"},
      //     { id: 123453456543, name : "Iphone12", rating: "8754", price:"76543", image:"https://ik.imagekit.io/amazonclone01/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65__BTH0lSkTG.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1654715777973"},
      //     { id: 12344545456543, name : "Iphone13", rating: "344574367565", price:"637357", image:"https://ik.imagekit.io/amazonclone01/amazon-image/mobiles/51PuFBgBK4L._AC_UL640_FMwebp_QL65___1__3fNmsC-qk.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1654715776069"},
      //     { id: 123465656543, name : "OnePlus", rating: "8754", price:"76543", image:"https://ik.imagekit.io/amazonclone01/amazon-image/mobiles/71LRBr1aLNS._AC_UL640_FMwebp_QL65__ULycRDE23.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1654715778265"},
      //     { id: 2356346363, name : "Iphone13", rating: "344574367565", price:"637357", image:"https://ik.imagekit.io/amazonclone01/amazon-image/mobiles/51PuFBgBK4L._AC_UL640_FMwebp_QL65___1__3fNmsC-qk.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1654715776069"}
      // ]
      //faek api filter
      // console.log(id);
      //   let item=list.filter(item=>{
      //     if(item.id==id) return item;
      //   })  

        
  },[]);
  

  const addToCart=()=>{

    if(localStorage.getItem("userId")===null){
      alert("Please Login")
      navigate("/login");

    }
    else{
    increment();

    var cart={
      userId:localStorage.getItem("userId"),
      productId:id

    }

 console.log(cart)

    axios.post("https://amazon-clone-cart-mservice.herokuapp.com/amazon/addToCart/add",cart)
    .then(  
     alert("Addproduct to Cart"),
     window.location.reload()
       )
    .catch((error)=>{
      console.log(error.message);
    } )

  }

  }




  return (
       <div className='placeorder__main'>
        <div className='placeorder__image'> 
          <img src={productDetails.imageURL} alt="" />
        </div>
        <div className='placeorder__description '> 
        <div className='desription__name'  style={{fontSize:"2.4rem", lineHeight:"3.2rem", fontWeight: 500}} >{productDetails.name} </div>
        <div className='description__rating'>  <Rating name="read-only" value={3} readOnly style={{ fontSize: "2rem"}}/>
         {productDetails.rating} Ratings|1500+ questions answered.
        </div>
        <hr></hr>
        <div className='description__Price textgap'>  <span className='deal'>Deal Price:</span><span className='price'>{productDetails.price}</span>	
            <br/>Inclusive of all taxes <br></br>  Free Delivery till <strong>18 June 2022</strong></div>
            <div className='description__emi textgap'>EMI starts at ₹1,177. No Cost EMI available</div>
            <div className="textgap">Sold by ABCD seller and fulfilled by Amazon India </div>
         </div>
         <Paper variant="outlined" className="placeorder__order">
         <button className='placeorder__button addtocart' onClick={addToCart}> Add to cart</button>  
         <Link to='/checkout'> <button className="placeorder__button buynow">Buy Now</button>  </Link>
         </Paper>
      
        </div>
  )
}

export default PlaceOrder