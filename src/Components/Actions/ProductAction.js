import axios from "axios"
import { GET_USER_FAILED, GET_USER_REQUEST, GET_USER_SUCCESS, PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS } from "../Contants/Contants"


export const listProducts =()=>{

    return async(dispatch) =>{

        try{

dispatch({
    type: GET_USER_REQUEST
})

const {data} = await axios.get('http://localhost:5011/products')
console.log(data)
dispatch({
    type: GET_USER_SUCCESS,
    payload:data
})

        }
        catch(error){
            dispatch({
                type: GET_USER_FAILED,
                payload: error.message
            })
        }
    }
}

export const detailsProduct = (id) => async(dispatch) => {
    dispatch({
    type: PRODUCT_DETAILS_REQUEST, 
    payload: id
    });
    try{
    
    const {data} = await axios.get(`http://localhost:5011/product/${id}`)
    dispatch({
        type: PRODUCT_DETAILS_SUCCESS, 
        payload: data});
        
    }catch(error){
    
        dispatch({
    
            type: PRODUCT_DETAILS_FAIL,
            payload: error.response && 
            error.response.data.message ?
            error.response.data.message:error.message,
        })
    }
    
    
    
    }