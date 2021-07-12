import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductDetails from '../ProductDetails/ProductDetails';
import { listProducts } from '../../../Actions/ProductAction';
const Product = () => {

    const productList = useSelector(state => state.productList)
    const {loading, error, products}  = productList;
console.log('product',products)
    const dispatch = useDispatch()
    useEffect(() =>{



dispatch(listProducts())
    },[])
  return (
    <div className='product'>
      {
         loading ? <h4>Loading...</h4> : error? <h3>{error}</h3>
         :
         <div className="pslider">
           <div className="pslide-track">
             {
                 products.map(product=> <ProductDetails product={product} key={product._id}></ProductDetails>)
             }
         </div>
         </div>
     }
    </div>
  )
}

export default Product
