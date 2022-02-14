import React from "react";

const CartItem = (props)=> {
    
    // //here arrow fn is compulsory reason you know
    // increaseQuantity= ()=>{
    //     //  this.state.qty +=1; this doesnt render the page but actual value increase
    //     //1st type
    // //     this.setState({
    // //         qty : this.state.qty + 1
    // //     });
    // // }
    //     //2nd type- we will use this whenever the new change requires the older value
    //     this.setState((prevState)=>{
    //         return {
    //             qty: prevState.qty +1
    //         }
    //     });
    // }

    // decreaseQuantity= ()=>{
        
    //     const {qty} = this.state;
    //     if(qty===0){
    //         return;
    //     }
    //     this.setState((prevState)=>{
    //         return {
    //             qty: prevState.qty -1
    //         }
    //     });
    // }

        const { price, title, qty } = props.product;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} alt="" />
                </div>
                <div className="right-block">
                    <div style= {{ fontSize: 25}}>{title}</div>
                    <div style= {{ color: '#777'}}>{price}</div>
                    <div style= {{ color: '#777'}}>{qty}</div>
                    <div className="cart-item-actions">
                        {/* buttons */}
                        <img alt="increase" className="action-icons" onClick={()=>props.increase(props.product)} src="https://cdn-icons-png.flaticon.com/128/992/992651.png" />
                        <img 
                        alt="decrease" 
                        className="action-icons" 
                        onClick={()=>props.decrease(props.product)} 
                        src="https://cdn-icons-png.flaticon.com/128/66/66889.png"
                        />
                        <img alt="delete" className="action-icons"
                        onClick={()=>props.delete(props.product.id)} 
                        src="https://cdn-icons.flaticon.com/png/512/3405/premium/3405244.png?token=exp=1644840450~hmac=2fb9ea54d69c3662b06ac9570b346a52" />
                    </div>
                </div>
            </div> 
        );
    }

const styles = {
    image: {
        height:110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;