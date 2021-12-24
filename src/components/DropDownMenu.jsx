import React from 'react';
import '../scss/dropdownmenu.scss'


const DropDownMenu = ({ item: {imageUrl, price, name, quantity}})=>(


    <div className="dropdown">
        <img src={imageUrl} alt="item" />
        <div className="item-details">
            <span className='name'>{name}</span>
            <span className='price'>{quantity} x ₹{price}</span>
        </div>
    </div>
)

export default DropDownMenu;