export const addToCart = (book) =>{
    return { type: "Add_To_Cart" , payload: book}
}

export const increase = (id) =>{
    return { type: "Increase" , payload: id}
}

export const decrease = (id) =>{
    return { type: "Decrease" , payload: id}
}

export const removeFromCart = (id) =>{
    return { type: "Remove_From_Cart" , payload: id}
}