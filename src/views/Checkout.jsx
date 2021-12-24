import React from 'react';
import '../scss/checkout.scss';
import { connect } from 'react-redux';
import { selectCartItems, selectItemsTotal } from '../redux/Cart/cart.selector';
import { createStructuredSelector } from 'reselect';
import CheckoutList from '../components/checkoutList';
import StripeButton from '../components/StripeButton';


const Checkout =( {cartItems, total} )=>(
   <div className='checkout-page'>
       <div className='checkout-header'>
           <div className='header-block'>
               <span className="">Product</span>
           </div>

           <div className='header-block'>
               <span className="">Description</span>
           </div>

           <div className='header-block'>
               <span className="">Quantity</span>
           </div>

           <div className='header-block'>
               <span className="">Price</span>
           </div>

           <div className='header-block'>
               <span className="">Remove</span>
           </div>

           
       </div>
            {
                cartItems.map( cartItem=>
                    <CheckoutList key={cartItem.i} cartItem={cartItem} />
                    )
            }
            <div className='total'> ₹{total} </div>
            <div className="warning">
                *Please use this Credit Card For Test CheckOut!!
                <br/>
                Card No. 4242 4242 4242 4242, Exp: 1/20 , CVV: 123
            </div>
            
            <StripeButton price={total} />
   </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectItemsTotal,
})


export default connect(mapStateToProps) (Checkout);