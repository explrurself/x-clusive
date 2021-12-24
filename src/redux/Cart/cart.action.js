export const toggleHidden = () =>({
    type: "SHOW_TOGGLE_CART",
    
})

export const addItems = item =>({
    type: "ADD_ITEMS",
    payload: item
})

export const reduceItems = item =>({
    type: "REDUCE_ITEMS",
    payload: item
})

export const removeItems = item =>({
    type: "REMOVE_ITEMS",
    payload: item
})