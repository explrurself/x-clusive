import React from 'react';
import {ReactComponent as ShoppingIcon } from '../Assets/shopping-bag.svg';
import '../scss/cart-item.scss';

import { connect } from 'react-redux';
import { toggleHidden } from '../redux/Cart/cart.action';
import { selectCartItemsCount } from '../redux/Cart/cart.selector';
 
const CartItem = ({toggleHidden, itemCount})=>  (
     <div className="cart-icon" onClick={toggleHidden}>
        <ShoppingIcon className="shopping-icon"/> 
        <span className="item-count"> {itemCount} </span>
    </div>
    
    )

    const mapStateToProps = (state)=>({
        itemCount: selectCartItemsCount(state)
    })

    const mapToDispatch =(dispatch)=>({
        toggleHidden: () => dispatch(toggleHidden())
    })
export default connect (mapStateToProps, mapToDispatch) (CartItem);