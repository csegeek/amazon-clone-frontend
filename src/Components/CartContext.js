import React, { Component, createContext } from 'react';
import axios from "axios";

 export const CartContext = createContext();

  
 class CartContextProvider extends Component {

     constructor(props){
        super(props)
        this.state={
            item:[],
            size:0 ,  
            increment: () => {
               this.state.size=this.state.size+1
            }
        }
    }

    
  componentDidMount(){
      var userid=localStorage.getItem("userId")
        axios.get(`https://amazon-clone-cart-mservice.herokuapp.com/amazon/addToCart/show/${userid}`).then(
            (res)=>{
                //console.log(res)
                this.setState({
                    item:res.data.list, 
                    size:res.data.list.length
                })             
              localStorage.setItem("cartsize",res.data.list.length);          
            }
       
    )
    .catch((e)=>{
        console.log(e.message)
    })

  }


     


    render() { 
        return ( 
            <CartContext.Provider value={{ ...this.state,...this.increment}} >
                {this.props.children}
            </CartContext.Provider>
         );
    }
}
  export default CartContextProvider;
