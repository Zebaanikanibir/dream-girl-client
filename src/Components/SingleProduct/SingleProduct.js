import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { detailsProduct } from '../Actions/ProductAction';
import './SingleProduct.css';
const SingleProduct = (props) => {
    console.log('sprops',props)
    const dispatch = useDispatch()
    const id = props.match.params.id;
    const [qty, setQty] = useState(1)
    
    const productDetails = useSelector((state) => state.productDetails);
    const { loading, error, product } = productDetails;


    useEffect(() => {

        dispatch(detailsProduct(id))

    }, [dispatch, id])

    const addToCartHandler = () => {
        props.history.push(`/cart/${id}?qty=${qty}`)
    }
  return (
    <div className="cBack">

            {loading ? (
                // <LoadingBox></LoadingBox>
                <h5>load</h5>
            ) : error ? (

                <h5>load</h5>
                // <MessageBox variant="danger">{error}</MessageBox>
            ) : (
                <div className="cart1">
                   
                        <img className="medium" src={product.image} alt={product.name} />
                   
                    <div className="mt-5">
                        <div className="card1">
                            
                                <h2>{product.name}</h2>
                                
                                    
                                       
                                        <p className="price">Price: ${product.price}</p>
                                 
                               
                                   
                                       
                                        <p>{product.count > 0 ?
                                            (
                                                <span className="success">In Stock</span>
                                            ) :
                                            (
                                                <span className="error">Unavailable</span>
                                            )
                                        }</p>
                                   
                            
                                {product.count > 0 && (
                                    <>
                                      
                                           
                                                <h6>Qty</h6>
                                                <div>
                                                    <select
                                                        value={qty}
                                                        onChange={(e) => setQty(e.target.value)}
                                                    >
                                                        {[...Array(product.count).keys()].map(
                                                            (x) => (
                                                                <option key={x + 1} value={x + 1}>
                                                                    {x + 1}
                                                                </option>
                                                            )
                                                        )}
                                                    </select>
                                                </div>
                                           
                                        
                                            <button
                                                onClick={addToCartHandler}
                                               className="bbbb"
                                            >
                                                Add to Cart
                                            </button>
                                       
                                    </>
                                )}
                           
                        </div>
                    </div>
                </div>
            )
            }

        </div>


  )
}

export default SingleProduct
