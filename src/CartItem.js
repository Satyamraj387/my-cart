import React from "react";

class CartItem extends React.Component {
    constructor(){
        super();
        this.state = {
            price: 999,
            title: 'phone',
            qty: 1,
            img: ''
        }
    }
    //here arrow fn is compulsory reason you know
    increaseQuantity= ()=>{
        //  this.state.qty +=1; this doesnt render the page but actual value increase
        //1st type
    //     this.setState({
    //         qty : this.state.qty + 1
    //     });
    // }
        //2nd type- we will use this whenever the new change requires the older value
        this.setState((prevState)=>{
            return {
                qty: prevState.qty +1
            }
        });
    }

    decreaseQuantity= ()=>{
        
        const {qty} = this.state;
        if(qty===0){
            return;
        }
        this.setState((prevState)=>{
            return {
                qty: prevState.qty -1
            }
        });
    }

    render (){
        const { price, title, qty } = this.state;
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
                        <img alt="increase" className="action-icons" onClick={this.increaseQuantity} src="https://cdn-icons-png.flaticon.com/128/992/992651.png" />
                        <img alt="decrease" className="action-icons" onClick={this.decreaseQuantity} src="https://cdn-icons-png.flaticon.com/128/66/66889.png" />
                        <img alt="delete" className="action-icons" src="https://cdn-icons.flaticon.com/png/128/484/premium/484611.png?token=exp=1644745627~hmac=345d05e5cfa68a595320e83fd48630f3" />
                    </div>
                </div>
            </div>
        );
    }
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