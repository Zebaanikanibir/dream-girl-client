import React from 'react'
import Contact from '../../Contact/Contact'
import Header from './Header/Header'
import Product from './Product/Product'
import Footer from './Footer/Footer'
import Image from '../../Image/Image';
import About from '../../About/About'
import NavHead from './NavHead/NavHead'
const Home = () => {
    

  return (
    <div >
      <Header></Header>
     <Product></Product>
     <Image></Image>
     <About></About>
     <Footer></Footer>
     <NavHead></NavHead>
    </div>
  )
}

export default Home
