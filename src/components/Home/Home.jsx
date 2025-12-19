import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Product from '../Products/Product'



const Home = () => {

  const [searchTerm, setSearchTerm] = useState('');
   const [isScrolled, setIsScrolled] = useState (false)

useEffect(()=>{

    const changeNavbar =() =>{
      setIsScrolled(window.scrollY > 10)

    }

    window.addEventListener('scroll', changeNavbar);

}, [])

  const handleScroll = () =>{
    const section = document.getElementById('product-section');

    if(section){
      section.scrollIntoView({behavior:  'smooth'});
    }
  }

  return (
   <div className="bg-white min-h-screen">
  <Navbar 
  handleScroll={handleScroll} 
  setSearchTerm={setSearchTerm}
  isScrolled={isScrolled} />
  <Hero />
  <Product searchTerm={searchTerm} />
</div>

  )
}

export default Home