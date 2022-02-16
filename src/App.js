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
// const {products} = this.state;
// const index = products.indexOf(product);
// products[index].qty +=1;
// this.setState({
//     products: products
// })
const docRef = db.collection('products').doc(product.id);
docRef
.update({
  qty: product.qty +1
})
.then(()=>{
  console.log('updated successfully')
})
.catch((err)=>{
  console.log('error in updating qty', err);
})
}
handleDecreaseQuantity = (product)=>{
  // const {products} = this.state;
  // const index = products.indexOf(product);
  // products[index].qty +=1;
  // this.setState({
  //     products: products
  // })
  const docRef = db.collection('products').doc(product.id);
  if(product.qty===0){
    return;
  }
  docRef
  .update({
    qty: product.qty -1
  })
  .then(()=>{
    console.log('updated successfully')
  })
  .catch((err)=>{
    console.log('error in updating qty', err);
  })
}
handleDeleteProduct = (id)=>{
    // const {products} = this.state;
    // const items = products.filter((item)=> item.id!==id);
    // this.setState({
    //     products:items
    // });
    const docRef = db.collection('products').doc(id);
    docRef
    .delete()
    .then(()=>{
      console.log('deleted successfully')
    })
    .catch((err)=>{
      console.log('error in deleting qty', err);
    })
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
// addProduct = ()=>{
//   db
//   .collection('products')
//   .add({
//     img: '',
//     price: 10000,
//     qty:1,
//     title: 'AirPods'
//   })
//   .then((docRef)=>{
//     console.log('product has been added',docRef)
//   })
//   .catch((err)=>{
//     console.log('error in adding producr', err);
//   })
// }

  render(){
    const { products, loading } = this.state;
    
  return (
    <div className="App">
     <Navbar
     count={this.getCartCount()} 
     />
     {/* <button onClick={this.addProduct}>Add a product</button> */}
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
