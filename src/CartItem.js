import React from "react";
class CartItem extends React.Component{
    //adding state to CartItem
    constructor () {  
      super();  // call constructor of component class it is imp to use it before--> this.
      this.state = {
        price:999,
        title: 'Phone',
        qty: 1,
        img: ''
      }  
    }
    render (){
        const {price, title, qty} = this.state //we are using object destructuring
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} /> {/*object applies here which is defined down there */}
                </div>
                <div className="right-block">
                    <div style={{fontSize: 25}}>{/*Phone*/ this.state.title }</div> {/*we can also add styles like this instead of making objects */}
                    <div style={{color:'blue'}}>{/*Rs 999*/price}</div> {/*with the help of object destructuring we can directle use these properties */}
                    <div style={{fontSize: 20}}>Qty: {/*Qty: 1*/ qty}</div>
                    <div className="cart-item-actions">
                        {/*Buttons */}
                        <img alt="increase" id="plus" className="action" src="https://cdn-icons.flaticon.com/png/512/4315/premium/4315609.png?token=exp=1654462181~hmac=7d9245b91a6a16fb4459ece7b119abdd"/>
                        <img alt="decrease" id="minus" className="action" src="https://cdn-icons.flaticon.com/png/512/2569/premium/2569198.png?token=exp=1654461915~hmac=bc8cd5874713831d731aded8e6a0b261"/>
                        <img alt="delete" id="dustbin" className="action" src="https://cdn-icons-png.flaticon.com/512/3221/3221897.png"/>
                    </div>

                </div>
            </div>
        )
    }
}

// Style in JSX can be done using objects
//create object for styles and pass this object in image
const styles = {
    image: {
        height: 110,  // no need to use pixels Js will automatically will do that for us
        width: 110,
        borderRadius:4,
        background: '#ccc'
    }    
}

export default CartItem;