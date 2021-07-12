import { GET_USER_FAILED, GET_USER_REQUEST, GET_USER_SUCCESS, PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS } from "../Contants/Contants";
export const productListReducer = (state = {
    loading: true,
    products: []
}, action) => {
    switch (action.type) {
        case GET_USER_REQUEST:
            return {
                ...state,
                loading: true
            }

        case GET_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload
            }

        case GET_USER_FAILED:
            return {
                ...state,
                loading: false,
                products: [],
                error: action.payload
            }





        default:
            return state
    }
    
}

export const productDetailsReducer = (state = {
    product: {},
    loading: true
},
    action
) => {

    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return { loading: true }
        case PRODUCT_DETAILS_SUCCESS:
            return { loading: false, product: action.payload }
        case PRODUCT_DETAILS_FAIL:
            return { loading: false, error: action.payload }
            default:
                return state;
    }
}