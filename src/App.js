import React from 'react';
import CartItem from './CartItem';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {
   //adding state 
   constructor () {  
    super();  // call constructor of component class it is imp to use it before--> this.
    this.state = {
      products: [
      {
          price:99999,
          title: 'Television',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1595935736128-db1f0a261263?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
          id:1
      },
      {
          price:15000,
          title: 'Mobile Phone',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=329&q=80',
          id:2
      },
      {
          price:30999,
          title: 'Apple Watch',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',
          id:3
      },
  
  ]  
      
    }   
  }

  handleIncreaseQuantity = (product) => {   // it's very easy just read line byline you will understand
      console.log('Heyy please inc the qty of', product);
      const {products} = this.state;
      const index = products.indexOf(product);

      products[index].qty += 1;

      this.setState({
          products: products
      })

  }
  handleDecreaseQuantity = (product)=>{  // we will get this product once user click on product
      console.log('Hey decrease the qty of',product);
      const{products} = this.state;         // destructuring
      const index = products.indexOf(product);  // get the index of that perticular product which is contained in products due to destructuring
      
      if( products[index].qty === 0){
          return;
      }
      products[index].qty -= 1;  //store the value in this products

      this.setState({
          products:products  // update
      })
  }

  handleDeleteProduct = (id) =>{
      const{products} = this.state

      const items = products.filter((item) => item.id !== id); // get all the ids which do not match with clicked id, it will return array of all those ids 

      this.setState({
          products:items // update products with items
      })
  }

  getCartCount=()=> {
    const {products} = this.state;

    let count = 0;
    
    products.forEach((product) =>{
      count += product.qty;
    })

    return count;
  }

  getCartTotal = ()=>{
    const {products} = this.state;

    let cartTotal = 0;

    products.map((product)=>{
      cartTotal = cartTotal + product.qty * product.price;
    })

    return cartTotal
  }
  render(){
    const {products} = this.state;
    return (
      <div className="App">
        <Navbar count = {this.getCartCount()}/>
        <Cart 
        products = {products}
         onIncreaseQuantity = {this.handleIncreaseQuantity} onDecreaseQuantity = {this.handleDecreaseQuantity} onDeleteProduct = {this.handleDeleteProduct}
         />
         
        
         <div style={{fontSize: 20,padding: 10}}>Total:{this.getCartTotal()}</div>

      </div>
    );
  }
}
export default App;
