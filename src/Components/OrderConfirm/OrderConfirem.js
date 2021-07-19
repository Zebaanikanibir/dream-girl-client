import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory, useParams } from 'react-router-dom'
import { UserContext } from '../../App'
import { addToCart } from '../Actions/CartAction'
import ProcessPayment from '../ProcessPayment/ProcessPayment'

const OrderConfirem = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const history = useHistory()
    const id = useParams()
    // console.log('id', id)
    const cart = useSelector((state) => state.cart)

    const { cartItems } = cart
// const item = cartItems.map(item=> item)
//     console.log("cart", cart)
    const dispatch = useDispatch()

    useEffect(() => {

        if (id) {
            dispatch(addToCart(id))

        }


    }, [dispatch, id])
    
    const handlePaymentSuccess = paymentId =>{

        console.log('Order', cartItems)
    
        const newOrder = { ...loggedInUser, paymentId, orderTime: new Date().toDateString('dd/MM/yyyy') }
    
        console.log(loggedInUser)
        fetch('http://localhost:5011/addOrder', {
            method: 'POST',
            headers: {
    
                'Content-Type': 'application/json'
    
            },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(data => {
    
                if (data) {
    
                    alert('Order Confirmed')
                }
            })
    
        
    }



  return (
    
     <section className="pay">
            <div className="container-fluid row containerStyle">
                <div className="col-md-6 mt-5 booking">
                    <div style={{ width: '30rem' }}>
                        <h5>{loggedInUser.email}</h5>
                        
                        <div>
                                {

                                    cartItems.map((item) => (
                                        <p key={item.product}>
                                            <div className="">
                                                <div className="min-30">
                                                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                                                </div>
                            
                                            
                                            </div>

                                            <div>
                                                <p>
                                                    <h6>
                                                        Total Amount ({cartItems.reduce((a, c) => a + c.qty, 0)} items) : $
                                                        {cartItems.reduce((a, c) => a + c.price
                                                            * c.qty
                                                            ,
                                                            0)}
                                                    </h6>

                                                </p>
                                                <p>
                                                    <button type="button"  className="bbbb" disabled={cartItems.length === 0}>Confirm</button>
                                                </p>
                                            </div>
                                        </p>


                                    ))
                                }
                            </div>
                    </div>
                </div>
                <div className="col-md-5 mt-5 booking ml-5">
                    <h4 className="ppp">Pay Here</h4>
                    <ProcessPayment handlePayment={handlePaymentSuccess}></ProcessPayment>
                </div>
            </div>
            
        </section> 
    
  );
};

export default OrderConfirem
