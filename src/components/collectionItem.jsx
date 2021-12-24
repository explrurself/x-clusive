import React from 'react';
import { connect } from 'react-redux';
import { addItems } from '../redux/Cart/cart.action';
import CustomButton from '../Auth/CustomInputs/CustomButton';

import "../scss/collectionItem.scss"; 

const COLLECTION_ITEM =({item, addItems})=>{

    const {name, price, imageUrl} =  item

    return (
    <div className="collection-item">
        <div
         className="image"
         style={{
             backgroundImage: `url(${imageUrl})`
         }}
         />
             <div className="collection-footer">
                 <span className="name">{name}</span>
                 <span className="price"> ₹{price}</span>
             </div>
        <CustomButton onClick={()=> addItems(item)} inverted> 
             Add to Cart 
        </CustomButton>
    </div>
)}

const mapDispatchToProps = dispatch =>({
    addItems: item=>dispatch(addItems(item))
})

export default connect(null, mapDispatchToProps) (COLLECTION_ITEM)