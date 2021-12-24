export const addItemsToCart = (cartItems, cartItemToAdd)=>{
    const existingItems = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    )
    // The above code will match the id of the items.If it present it will create new array of same items 
    //  by adding the quantit value by 1
    if(existingItems){
        return cartItems.map( cartItem =>
            cartItem.id === cartItemToAdd.id 
           ? {...cartItem, quantity: cartItem.quantity + 1 } 
           : cartItem
        )
    }
    // Below code excutes when an new items will be added the array. and a base quantity will be given.
    return [ ...cartItems, {...cartItemToAdd, quantity: 1}]
}

export const removeItemsToCart = (cartItems, cartItemsToRemove)=> {
    const existingItems = cartItems.find(
        cartItem=> cartItem.id === cartItemsToRemove.id
    )
   
    if( existingItems.quantity === 1){
        return cartItems.filter(
            cartItem=> cartItem.id !== cartItemsToRemove.id
        )
    }

    return cartItems.map(
        cartItem=> cartItem.id === cartItemsToRemove.id 
        ?{ ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    )

}