import React, { useState } from 'react'
import {Card } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const ProductDetails = (props) => {
  const { product } = props;
  const history = useHistory()
  const [qty, setQty] = useState(1)





  return (



    <div className="pslide mt-5">
      <Card id="box">
        <Card.Img style={{height:'250px'}} variant="top" src={product.image} />
        <Card.Body>
          <p className="pName">{product.name}</p>
        </Card.Body>
        
        <button className="bbbb"><Link to={`/product/${product._id}`}><p className="bbbbb">Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></p></Link></button>
      </Card>


    </div>


  )
}

export default ProductDetails
