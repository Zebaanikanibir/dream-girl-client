import Axios from "axios";
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../Contants/Contants";


export const addToCart =(id, qty)=> async(dispatch, getState)=>{


const {data} = await Axios.get(`http://localhost:5011/product/${id}`);
dispatch({

    type: CART_ADD_ITEM,
    payload:
    {

        name:data.name,
        image:data.image,
        price:data.price,
        count:data.count,
        product: data._id,
        qty,

    },
})


localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};
export const removeFRomeCart = (id) => (dispatch, getState)=>{

    dispatch({
        type: CART_REMOVE_ITEM, 
        payload: id})
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
    }