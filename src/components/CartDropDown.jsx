import React from 'react';
import CustomButton from '../Auth/CustomInputs/CustomButton';
import DropDownMenu from './DropDownMenu';
import '../scss/cartdropdown.scss';
import { connect } from 'react-redux';
import { selectCartItems } from '../redux/Cart/cart.selector';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { toggleHidden } from '../redux/Cart/cart.action';

const CartDropDown =({ cartItems, history, dispatch })=> (
    <div className="cart-dropdown">
        <div className="cart-items">
           {
               cartItems.length ? 
               cartItems.map(cartItem =>
                (<DropDownMenu key={cartItem.id} item={cartItem} />
             ))
            : <span className="empty-message"> Let's Shop with Us!! </span>
            }
        </div>
        <CustomButton onClick={()=> {
             history.push('/checkout')
             dispatch(toggleHidden())
            }} 
              > 
               Checkout 
        </CustomButton>
    </div>
)
const mapStateToProps = (state)=>({
    cartItems: selectCartItems(state)
})
export default withRouter (connect(mapStateToProps) (CartDropDown));