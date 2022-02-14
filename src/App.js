import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";

class App extends React.Component {

  constructor(){
    super();
    this.state = {
       products: [
           {
        price: 999,
        title: 'phone1',
        qty: 1,
        img: '',
        id:1
       },
       {
        price: 999,
        title: 'phone2',
        qty: 1,
        img: '',
        id: 2
       },
       {
        price: 999,
        title: 'phone3',
        qty: 1,
        img: '',
        id: 3
       }
    ]
    }
}
handleIncreaseQuantity = (product)=>{
    const {products} = this.state;
    const index = products.indexOf(product);
    products[index].qty +=1;
    this.setState({
        products: products
    })
}
handleDecreaseQuantity = (product)=>{
    const {products} = this.state;
    const index = products.indexOf(product);
    if(products[index].qty>=1){
        products[index].qty -=1;
    }
    this.setState({
        products: products
    })
}
handleDeleteProduct = (id)=>{
    const {products} = this.state;
    const items = products.filter((item)=> item.id!==id);
    this.setState({
        products:items
    });
}
getCartCount = ()=>{
  const{products}= this.state;
  let count =0;
  products.forEach((product)=>{
    count +=product.qty;
  })
  return count;
}
getTotal = ()=>{
  const {products}= this.state;
  let total = 0;
  products.forEach((product)=>{
    total = total + (product.price* product.qty);
  });
  return total;
}

  render(){
    const { products } = this.state;
    
  return (
    <div className="App">
     <h1> Satyam's Shopping cart</h1>
     <Navbar
     count={this.getCartCount()} 
     />
     <Cart 
     products={products}
     increase={this.handleIncreaseQuantity}
     decrease = {this.handleDecreaseQuantity} 
     delete = {this.handleDeleteProduct}
     />
     <div>Total: {this.getTotal()}</div>
    </div>
  );
}
}

export default App;
