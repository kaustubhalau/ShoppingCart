import React from 'react';
import CartItem from './CartItem';


class Cart extends React.Component{
    //adding state 
    constructor () {  
      super();  // call constructor of component class it is imp to use it before--> this.
      this.state = {
        products: [
        {
            price:9999,
            title: 'Watch',
            qty: 1,
            img: '',
            id:1
        },
        {
            price:15000,
            title: 'Mobile Phone',
            qty: 1,
            img: '',
            id:2
        },
        {
            price:30999,
            title: 'Apple Watch',
            qty: 1,
            img: '',
            id:3
        },
    
    ]  
        
      }   
    }
    render(){
        // const arr = [1,2,3,4,5]
        const {products} = this.state;
        return(
            <div className='cart'>
                {/* {arr.map((item) => { //Rendering a list of items
                    return item + 5
                })} */}
                {/*We are using props (similar to arguments in function we can pass anything from CartItem to child Cartitem by props) */}
                {/* <CartItem qty = {1} price = {5000} title = {"watch"} img = {''} /> */}
                {products.map((product) => {
                    return (
                     <CartItem 
                       product = {product} 
                       key = {product.id} 
                       
                     />
                    )  
                })}
                
            </div>
        );
    }
}

export default Cart