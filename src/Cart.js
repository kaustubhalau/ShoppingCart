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
                    return (<CartItem product = {product} key = {product.id} onIncreaseQuantity = {this.handleIncreaseQuantity} onDecreaseQuantity = {this.handleDecreaseQuantity} onDeleteProduct = {this.handleDeleteProduct}/>)  
                })}
                
            </div>
        );
    }
}

export default Cart