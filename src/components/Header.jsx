import React from 'react';

import {Link} from 'react-router-dom';
import '../scss/header.scss';
import {auth} from '../Auth/Firebase/firebase.utils';
import { connect } from 'react-redux';
import CartItem from './CartItem';
import CartDropDown from './CartDropDown';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../redux/user/user.selector';
import { selectCartHiddeen } from '../redux/Cart/cart.selector';

const Header =({ currentUser, hidden })=>(
    <div className="header">
        
            <Link className="logo-container" to="/">
                <h2 style={{color: "#9145B6", fontFamily: 'Dancing Script', fontSize: "35px"}}>e <span 
                          style={{ color: "#FF5677", fontFamily: 'Dancing Script', letterSpacing: "-5px"}}>-X</span> clusive</h2>
            </Link>
       
        
        <div className="options">
            <Link className="option" to="/shop">
                SHOP
            </Link>
            <Link className="option" to="/shop">
                CONTACT
            </Link>
           {
               currentUser ? 
                  ( <div className="option" onClick={()=> auth.signOut()}> SIGN OUT</div> )
                   :
                   ( <Link className="option" to="/signIn">
                        SIGN IN
                   </Link>)
               
           }
            <CartItem/>
        </div>
        { hidden ? null : <CartDropDown />}   
    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHiddeen
})



export default connect(mapStateToProps)(Header)