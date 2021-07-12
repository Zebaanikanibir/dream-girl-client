import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { cartReducer } from "../Reducers/CartReducer";
import {productListReducer,productDetailsReducer} from '../Reducers/ProductReducer';
const initialState = {

    cart:{

        cartItems: localStorage.getItem('cartItems')
        ?
        JSON.parse(localStorage.getItem('cartItems'))
        :
        [],
    },
};
const reducer = combineReducers({

    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
 })
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk,logger)))
 