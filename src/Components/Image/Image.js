import React from 'react'
import img1 from '../../images/img1.jpg'
import img4 from '../../images/img4.jpg'
import img2 from '../../images/img2.jpg'
import img5 from '../../images/img5.jpg'
import './Image.css';
const Image = () => {
  return (
    <div className="img">
     
          <img style={{height:'300px', width:'100%'}} className="mt-5" src={img5} alt="" />
     
       <img style={{height:'500px', width:'100%'}} src={img2} alt="" />
       
<img style={{height:'300px', width:'100%'}} className="mt-5" src={img4} alt="" />
      
      
    </div>
  )
}

export default Image
