import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
import {db} from './firebase';
class App extends React.Component {

  constructor(){
    super();
    this.state = {
       products: [],
       loading: true
    }
}

componentDidMount(){
   db
    .collection('products')
//   .get()
//   .then((snapshot)=>{
//       console.log(snapshot);

//       snapshot.docs.map((doc)=>{
//         return doc.data;
//     });
//     const products = snapshot.docs.map((doc)=>{
//       const data = doc.data();
//       data['id'] = doc.id;
//       return data;
//     });
//     this.setState({
//       products: products,
//       loading: false
//     })
//   })
// }
// handleIncreaseQuantity = (product)=>{
//     const {products} = this.state;
//     const index = products.indexOf(product);
//     products[index].qty +=1;
//     this.setState({
//         products: products
//     })
// }
// handleDecreaseQuantity = (product)=>{
//     const {products} = this.state;
//     const index = products.indexOf(product);
//     if(products[index].qty>=1){
//         products[index].qty -=1;
//     }
//     this.setState({
//         products: products
//     })

//onsnapshot is called every time something changes in database
.onSnapshot((snapshot)=>{
  console.log(snapshot);

  snapshot.docs.map((doc)=>{
    return doc.data;
});
const products = snapshot.docs.map((doc)=>{
  const data = doc.data();
  data['id'] = doc.id;
  return data;
});
this.setState({
  products: products,
  loading: false
})
})
}
handleIncreaseQuantity = (product)=>{
const {products} = this.state;
const index = products.indexOf(product);
products[index].qty +=1;
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
    const { products, loading } = this.state;
    
  return (
    <div className="App">
     <Navbar
     count={this.getCartCount()} 
     />
     <Cart 
     products={products}
     increase={this.handleIncreaseQuantity}
     decrease = {this.handleDecreaseQuantity} 
     delete = {this.handleDeleteProduct}
     />
     {loading && <h1> Loading products</h1>}
     <div>Total: {this.getTotal()}</div>
    </div>
  );
}
}

export default App;
