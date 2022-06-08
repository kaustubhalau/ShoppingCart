import React from 'react';
import CartItem from './CartItem';


const Cart =(props) => {
   
    
    // const arr = [1,2,3,4,5]
    const {products} = props;
    return(
        <div className='cart'>
            {/* {arr.map((item) => { //Rendering a list of items
                return item + 5
            })} */}
            {/*We are using props (similar to arguments in function we can pass anything from CartItem to child Cartitem by props) */}
            {/* <CartItem qty = {1} price = {5000} title = {"watch"} img = {''} /> */}
            {products.map((product) => {
                return (<CartItem product = {product} key = {product.id} 
                    onIncreaseQuantity = {props.onIncreaseQuantity} 
                    onDecreaseQuantity = {props.onDecreaseQuantity} 
                    onDeleteProduct = {props.onDeleteProduct}
                />)  
            })}
            
        </div>
    );
    
}

export default Cart