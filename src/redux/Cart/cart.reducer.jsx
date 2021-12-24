import { addItemsToCart, removeItemsToCart } from "./cart.utils";

const INITIAL_STATE = {
    hidden: true,
    cartItems: [],
}

const cartReducer = (state = INITIAL_STATE, action)=>{
    switch( action.type ){
        case "SHOW_TOGGLE_CART":
            return{
                ...state,
                hidden: !state.hidden
            }

            case "ADD_ITEMS":
                    return{
                        ...state,
                        cartItems: addItemsToCart(state.cartItems, action.payload)
                        // cartItems: [...state.cartItems, action.payload]
                    }
            case "REMOVE_ITEMS":
                return{
                    ...state,
                    cartItems: state.cartItems.filter(
                        cartItem=> cartItem.id !== action.payload.id
                    )
                }
            case "REDUCE_ITEMS":
                return{
                    ...state,
                    cartItems: removeItemsToCart(state.cartItems, action.payload)
                }
            default: 
            return state;
    }
}

export default cartReducer;