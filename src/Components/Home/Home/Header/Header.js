import React from 'react'
import image1 from '../../../../images/image1.jpg';
import image2 from '../../../../images/image2.jpg';
import image3 from '../../../../images/image3.jpg';
import image4 from '../../../../images/image4.jpg';
import './Header.css';
const slides = [

    {
        id: 0,
        url: "https://i.ibb.co/dp7QvyR/Pretty-smiling-girl-keeps-both-hands-on-cheeks-smiles-broadly-being-in-good-mood-after-stroll-with-b.jpg"

    },
{
        id: 1,
        url: "https://i.ibb.co/dp7QvyR/Pretty-smiling-girl-keeps-both-hands-on-cheeks-smiles-broadly-being-in-good-mood-after-stroll-with-b.jpg"

    },{
        id: 2,
        url: "https://i.ibb.co/6JyD4Z3/young-stylish-sexy-woman-in-pink-luxury-dress-summer-fashion-trend-chic-style-sunglasses-blue-studio.jpg" 

    },{
        id: 3,
        url: "https://i.ibb.co/y8jd7Pt/Studio-portrait-of-emotive-happy-feminine-woman-with-curly-hair-wearing-casual-hoodie-and-sunglasses.jpg" 

    },{
        id: 4,
        url: "https://i.ibb.co/2sYG5YG/Young-beautiful-brunette-businesswoman-smiling-looking-at-camera-pointing-finger-in-side-over-white.jpg" 

    }

]


const Header = () => {
  return (
   <div className="body">
       <div className="slider">
        
     
      <div className="slide1">

       
      </div>
     
      
      <div className="slide2">
      <p className="text2">HAPPY SHOPPING</p>
      
      </div>
     
      
      <div className="slide3">
       
          <p className="text3"><span>20%</span> DISCOUNT</p> 
      </div>
    
      
      <div className="slide4">
       
      </div>
    
    
    
   </div>
   </div>
  )
}

export default Header
