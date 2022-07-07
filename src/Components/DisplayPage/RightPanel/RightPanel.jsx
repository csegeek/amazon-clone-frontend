import React, { useEffect, useState } from 'react'
import './RightPanel.css'
import Product from './Product'
import { Link } from 'react-router-dom';
import axios from "axios";

function RightPanel(props) {
 
    const [ListofProduct,setProducts]=useState([]);

 useEffect(
    ()=>{

     axios.get("https://amazon-clone-product-mservice.herokuapp.com/amazon/products/getAllProduct").then((res) => {
          console.log(res);
          setProducts(res.data);
      });
      
      // let list =[
      //       { id: 123456543, name : "Iphone10", rating: "34565", price: "4534", image:"https://ik.imagekit.io/amazonclone01/amazon-image/mobiles/71i2XhHU3pL._AC_UL640_FMwebp_QL65__TQbgIknT0.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1654715777048"},
      //       { id: 54342265, name : "Iphone11", rating: "656", price:"76543456", image:"https://ik.imagekit.io/amazonclone01/amazon-image/mobiles/71ZOtNdaZCL._AC_UL640_FMwebp_QL65__Ceqp0YP0S.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1654715779341"},
      //       { id: 123453456543, name : "Iphone12", rating: "8754", price:"76543", image:"https://ik.imagekit.io/amazonclone01/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65__BTH0lSkTG.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1654715777973"},
      //       { id: 12344545456543, name : "Iphone13", rating: "344574367565", price:"637357", image:"https://ik.imagekit.io/amazonclone01/amazon-image/mobiles/51PuFBgBK4L._AC_UL640_FMwebp_QL65___1__3fNmsC-qk.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1654715776069"},
      //       { id: 123465656543, name : "OnePlus", rating: "8754", price:"76543", image:"https://ik.imagekit.io/amazonclone01/amazon-image/mobiles/71LRBr1aLNS._AC_UL640_FMwebp_QL65__ULycRDE23.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1654715778265"},
      //       { id: 2356346363, name : "Iphone13", rating: "344574367565", price:"637357", image:"https://ik.imagekit.io/amazonclone01/amazon-image/mobiles/51PuFBgBK4L._AC_UL640_FMwebp_QL65___1__3fNmsC-qk.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1654715776069"}
      //   ]
      //      setProducts(list);   

    },[]);


  return (
    <div className='Rightpanel__main'>
        {/* <Product name="i Phone 11 (64 GB)" rating="4*" price="59999" image="https://ik.imagekit.io/amazonclone01/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65__BTH0lSkTG.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1654715777973"/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/> */}
        
        {   
                ListofProduct.map ( (item) =>(
                
                <Link to= {"/order/"+ item.productID} >
                 <Product mobile={item}/>
                  </Link> 
                   
                ))
            }
    </div>
  )
}

export default RightPanel