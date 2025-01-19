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
        default:
            return state
    }
}