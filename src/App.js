import React from 'react';
import CartItem from './CartItem';
import Cart from './Cart';
import Navbar from './Navbar';
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';


class App extends React.Component {
   //adding state 
   constructor () {  
    super();  // call constructor of component class it is imp to use it before--> this.
    this.state = {
      products: [],
      loading: true  // this for when page loades nothing special its not compulsory  
      
    }   
  }

  componentDidMount(){  //this function will work after rendering
    firebase
      .firestore()
      .collection('products')  // get product collection
      .get()    // return us a promise with result
      .then((snapshot) =>{
        console.log(snapshot); //see in console there we will find docs in next line we will retrieve that doc

        snapshot.docs.map((doc) =>{
          console.log(doc.data());
        })

        const products = snapshot.docs.map((doc) => {
          const data = doc.data();

          data['id'] = doc.id  // add id field and use doc id in firebase because every document has id
          return data;
        })

        this.setState({
          products:products, // update products
          loading:false  // we defined it true below product array and did conditional rendering using it in render function
        })
      })
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
          products:products,  // update
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

    products.map(product=>{
      if(product.qty > 0){
        cartTotal = cartTotal + product.qty * product.price;
      }
      return ''
    })

    return cartTotal
  }
  render(){
    const {products, loading} = this.state;
    return (
      <div className="App">
        <Navbar count = {this.getCartCount()}/>
        <Cart 
        products = {products}
         onIncreaseQuantity = {this.handleIncreaseQuantity} onDecreaseQuantity = {this.handleDecreaseQuantity} onDeleteProduct = {this.handleDeleteProduct}
         />
        
         {/*we will do conditional rendering, this is for loading page we have define it on top below product array */}
         {loading && <h3>Loading Products...</h3>}
        
         <div style={{fontSize: 20,padding: 10}}>Total:{this.getCartTotal()}</div>
         
      </div>
    );
  }
}
export default App;
