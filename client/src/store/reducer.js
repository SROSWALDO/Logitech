const initialState = {
    products: [],
    product: {},
    cart : []
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "GET_PRODUCTS": 
        return {
            ...state,
            products: action.payload
        }
        case "GET_PRODUCT":
            return {
                ...state,
                product: action.payload
            }
        case "ADD_TO_CART":
            return {
                ...state,
                cart: action.payload
            }
        case "GET_CART":
            return {
                ...state,
                cart: action.payload
            }
        case "DELETE_PRODUCT":
            return {
                ...state,
                cart: state.cart.filter(product => !(product.productId === action.payload.productId && product.color === action.payload.color ) )
            }
        case "EDIT_PRODUCT":
            return {
                ...state,
                cart: state.cart.map(product => product.productId === action.payload.productId && product.color === action.payload.color ? action.payload : product )
            }               
        default:
            return state
    }
}