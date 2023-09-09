import React from "react";
import "../scss/checkoutlist.scss";
import { connect } from "react-redux";
import { addItems, removeItems, reduceItems } from "../redux/Cart/cart.action";




const CheckoutList = ({ cartItem, clearItem, addItems, reduceItems })=>{

    const {imageUrl, name, quantity, price} = cartItem
    return (
    <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt="item" />
        </div>
        <span className="name">{name}</span>
        <span className="quantity"> 
         <div className="arrow" onClick={()=> reduceItems(cartItem)}> &#10094; </div>
            <span className="value"> {quantity} </span>
         <div className="arrow" onClick={()=> addItems(cartItem)}> &#10095; </div>
          </span>
        <span className="price">{price}</span>
        <div className="remove-button"
            style={{color: "red", fontweight: "bold"}}  
            onClick={()=> clearItem(cartItem)}
            > 
             &#10005; 
        </div>
    </div>
)}

const mapDispatchToProps = (dispatch) =>({
    clearItem: item=> dispatch(removeItems(item)),
    addItems: item=> dispatch( addItems(item)),
    reduceItems: item=> dispatch(reduceItems(item)),
})

export default connect(null, mapDispatchToProps) (CheckoutList);