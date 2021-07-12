import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useParams } from 'react-router-dom';
import { addToCart, removeFRomeCart } from '../Actions/CartAction';

const Cart = (props) => {
const history =useHistory()

console.log('ddd',props)
    const  id  = props.match.params.id;

    const cart = useSelector((state) => state.cart)
    const qty = props.location.search
        ? Number(props.location.search.split('=')[1])
        : 1;
    console.log("qty", qty)
    const { cartItems } = cart
    
    console.log("cart", cart)
    const dispatch = useDispatch()

    useEffect(() => {

        if (id) {
            dispatch(addToCart(id,qty))

        }


    }, [dispatch, id,qty])
    const removeFromCartHandler = (id) => {


        dispatch(removeFRomeCart(id))
            }
            const checkoutHandler = () => {

                history.push('/signin?redirect=shipping')
            }
  return (
    <div>
      <div className="row container-fluid">

<div className="col-md-2">
    
    {
        cartItems.length === 0 ? <p>cart is empty</p>
        //  <MessageBox>
        //     Cart is empty. <Link to="/">Go Shopping</Link>
        // </MessageBox>
            :
            (

                <ul>
                    {

                        cartItems.map((item) => (
                            <li key={item.product}>
                                <div className="row">
                                    <div>
                                        <img src={item.image} alt={item.name} className="small" />
                                    </div>
                                    <div className="min-30">
                                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                                    </div>
                                    <div>
                                        <select
                                            value={item.qty}
                                            onChange={e =>
                                                dispatch(
                                                    addToCart(item.product,Number(e.target.value))
                                                    
                                                )
                                            }
                                        >
                                            {[...Array(item.count).keys()].map((x) => (
                                                <option key={x + 1} value={x + 1}>
                                                    {x + 1}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        ${item.price}
                                    </div>
                                    <div>
                                        <button type="button" onClick={() => removeFromCartHandler(item.product)}>Delete</button>
                                    </div>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            )
    }
</div>

<div className="col-md-1">
    <div className="card card-body">
        <ul>
            <li>
                {/* <h2>Subtotal  ({cartItems.reduce((a, c) => a + c.qty, 0)} items): $ {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
              </h2> */}
                <h2>
                                Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)} items) : $
                                {cartItems.reduce((a, c) => a + c.price
                                    * c.qty
                                    ,
                                    0)}
                            </h2>

            </li>
            <li>
                <button type="button" onClick={checkoutHandler} className="primary block" disabled={cartItems.length === 0}>Proceed to Checkout</button>
            </li>
        </ul>
    </div>
</div>
</div>
    </div>
  )
}

export default Cart