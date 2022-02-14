import React from "react";
import CartItem from "./CartItem";

const Cart =(props)=> {

    const { products } = props; //why not props.products
        return(
            <div className="cart">
               { products.map((i)=>{
                   return (
                   <CartItem 
                   product= {i} 
                   key= {i.id} 
                   increase={props.increase}
                   decrease = {props.decrease} 
                   delete = {props.delete}
                   />
                   )
               })}

            </div>
        );
}
export default Cart;



