import { data } from "../data";


const INITIAL_STATE = {
    booklist: data,
    cart : []
}


export const reducer = (state = INITIAL_STATE , action) =>{
    switch (action.type) {
        case "Add_To_Cart":
            return {...state, cart: state.cart.find(cartItem => cartItem.id === action.payload.id) 
                ? state.cart.map(cartItem=> cartItem.id === action.payload.id ? {...cartItem, count : cartItem.count + 1} : cartItem)
                : [...state.cart, {...action.payload, count:1}]}
        case "Increase":
            return {...state, cart: state.cart.map(cardItem => cardItem.id === action.payload
                ? {...cardItem, count: cardItem.count +1 } : cardItem)}
        case "Decrease":
            return{...state, cart: state.cart.map(cardItem=> cardItem.id === action.payload
                ? {...cardItem, count: cardItem.count !== 1 ? cardItem.count - 1 : 1}
                : cardItem)}
        case "Remove_From_Cart":
            return{...state, cart: state.cart.filter(cardItem => cardItem.id !== action.payload)}
        default:
            return state;
    }
}