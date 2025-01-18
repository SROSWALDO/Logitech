const initialState = {
    products: [],
    product: {}
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
        default:
            return state
    }
}