import React from 'react';

class CartItem extends React.Component{

    constructor (){
        super();
        this.state ={
            item: 'iphone' , 
            price : '2999',
            qty : '1'
        }
    }
    render(){

       const {item , price , qty}=this.state;
        return(
            <div className="cart-items">
                <div className="left-block">
                   <a href="">
                        <img style = {styles.images}></img>
                   </a>
                </div>
                <div className="right-block">
                    <div style ={{fontSize : 25}}>{item} </div>
                    <div style ={{color:'#777'}}> {price}</div>
                    <div style ={{color:'#777'}}> {qty}</div>
                    <div className="cart-item-actions">
                        
                        
                            <img alt ="increase" className =" action-icons"src="https://www.flaticon.com/svg/static/icons/svg/992/992651.svg"></img>
                            <img alt ="decrease" className =" action-icons"src="https://www.flaticon.com/svg/static/icons/svg/992/992683.svg"></img>               
                            <img alt ="delete" className =" action-icons"src="https://www.flaticon.com/svg/static/icons/svg/3096/3096673.svg"></img>
                      
                    </div>

                </div>

            </div>

        );


    }
}

const styles = {
    images :{
        height:110,
        width:110,
        borderRadius :4,
        background:"#ccc"
    }
}




export default CartItem;