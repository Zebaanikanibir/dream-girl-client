import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { detailsProduct } from '../Actions/ProductAction';

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
    <div>
        
      <div>

{loading ? (
    <h6>loading..</h6>
    // <LoadingBox></LoadingBox>
) : error ? (
    <h5>{error}</h5>

    // <MessageBox variant="danger">{error}</MessageBox>
) : (
    <div className="row">
        <div className="col-2">
            <img className="medium" src={product.image} alt={product.name} />
        </div>
        <div className="col-1">
            <ul>
                <li>
                    <h1>{product.name}</h1>
                </li>
                {/* <li>
                    <Rating rating={product.rating} numReviews={product.numReviews}></Rating>
                </li> */}
                <li>Price: ${product.price}</li>
                <li>Description: ${product.description}</li>
            </ul>
            <img style={{ width: '80px' }} src={product.image} alt="" />
        </div>
        <div className="col-1">
            <div className="card card-body">
                <ul>
                    <li>
                        <div className="row">
                            <div>Price</div>
                            <div className="price">${product.price}</div>
                        </div>
                    </li>
                    <li>
                        <div className="row">
                            <div>Status: </div><br />
                            <div>{product.count > 0 ?
                                (
                                    <span className="success">In Stock</span>
                                ) :
                                (
                                    <span className="error">Unavailable</span>
                                )
                            }</div>
                        </div>
                    </li>
                    {product.count > 0 && (
                        <>
                            <li>
                                <div className="row">
                                    <div>Qty</div>
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
                                </div>
                            </li>
                            <li>
                                <button
                                    onClick={addToCartHandler}
                                    className="primary block"
                                >
                                    Add to Cart
                                </button>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </div>
    </div>
)
}

</div>
    </div>
  )
}

export default SingleProduct
