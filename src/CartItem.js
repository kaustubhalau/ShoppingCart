import React from "react";
class CartItem extends React.Component{
    
    // function to increase
    increaseQuantity = () => {
        console.log('this', this.state); // binding is not needed in arror function
        
        // 1st way to setState
        //setState function is asynchronous so we don't know when it got finished so we can call callback function,same for //2nd way to setState.So it will print once it got finished updating
        this.setState({                // this is easy do this
            qty:this.state.qty + 1    //this is called shallow merging where only that property is changed not others
        },() =>{
            console.log("this.state",this.state);
        });

        //2nd way to setState          
        // this .setState((prevState) => {  // prevState-->previous state and then update that previous state
        //     return {
        //         qty: prevState.qty + 1
        //     }
        // });
        // this .setState((prevState) => {  
        //     return {
        //         qty: prevState.qty + 1
        //     }
        // });
        // this .setState((prevState) => {  
        //     return {
        //         qty: prevState.qty + 1
        //     }
        // });                              // Note****--> this will increase count by 4 and batching is still in the work as component is rendered only once but count increase by 4
    }
    // increaseQuantity () {
    //     console.log('this', this.state); // we have to bind-->this where function is calling or we can simply use arror function which will automatically bind--> this  like we did above 

    // }
   
    //function to decrease quantity
    decreaseQuantity = () => {
        const {qty} = this.state;       // using destructuring
        
        if(qty === 0){
            return;
        }
        console.log("decreasing",this.state);

        this.setState({                      //Note****--> even if we call this.setState thrice within function it will not decrease or increase by thrice beacause of React property called batching,it will increase or decrease by only one or by number which is called at last
            qty: this.state.qty - 5
        });

        this.setState({                     
            qty: this.state.qty - 1
        });
    }
    render (){
        console.log("this.props", this.props);
        const {price, title, qty} = this.props.product;  //we are using object destructuring and using this.props instead of this.state
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} /> {/*object applies here which is defined down there */}
                </div>
                <div className="right-block">
                    <div style={{fontSize: 25}}>{/*Phone*/ /*this.state.title*/title}</div> {/*we can also add styles like this instead of making objects */}
                    <div style={{color:'blue'}}>{/*Rs 999*/price}</div> {/*with the help of object destructuring we can directle use these properties */}
                    <div style={{fontSize: 20}}>Qty: {/*Qty: 1*/ qty}</div>

                    <div className="cart-item-actions">
                        {/*Buttons */}

                        <img 
                         alt="increase" 
                         id="plus"
                         className="action" 
                         src="https://cdn-icons.flaticon.com/png/512/4315/premium/4315609.png?token=exp=1654462181~hmac=7d9245b91a6a16fb4459ece7b119abdd"
                         onClick= {/*{this.increaseQuantity.bind(this) ->bind is needed when not using arror function}*/ this.increaseQuantity}
                         />
                        <img
                         alt="decrease"
                         id="minus" 
                         className="action" 
                         src="https://cdn-icons.flaticon.com/png/512/2569/premium/2569198.png?token=exp=1654461915~hmac=bc8cd5874713831d731aded8e6a0b261"
                         onClick={this.decreaseQuantity}
                        />
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