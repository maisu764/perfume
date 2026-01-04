import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Product from '../Products/Product'
<<<<<<< HEAD
import Cart from '../Cart/Cart'
import Wishlist from '../Wishlist/Wishlist'
import OrderSummary from '../OrderSummary/OrderSummary'
import OrderPlace from '../OrderPlace/OrderPlace'
=======
>>>>>>> a652b11fa0d6a3e443a56bd6d7d53eeb6c490a81



const Home = () => {

  const [searchTerm, setSearchTerm] = useState('');
<<<<<<< HEAD
  const [isScrolled, setIsScrolled] = useState(false);
  const [activePanel, setActivePanel] = useState(null);
  const [orderSummary, setOrderSummary] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [cart, setCart] = useState(() => {

    const storeCart = localStorage.getItem('cart');
    return storeCart ? JSON.parse(storeCart) : []
  });
  const [wishlist, setWishlist] = useState(() => {
    const storeWishlist = localStorage.getItem('wishlist');
    return storeWishlist ? JSON.parse(storeWishlist) : []
  });


  // Total Calculations
  const subTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const shippingFee = totalItems * 2;
  const orderTotal = subTotal + shippingFee;

  useEffect(() => {

    const changeNavbar = () => {
=======
   const [isScrolled, setIsScrolled] = useState (false)

useEffect(()=>{

    const changeNavbar =() =>{
>>>>>>> a652b11fa0d6a3e443a56bd6d7d53eeb6c490a81
      setIsScrolled(window.scrollY > 10)

    }

    window.addEventListener('scroll', changeNavbar);

<<<<<<< HEAD
  }, []);

  // Save Items to Local Storage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
    localStorage.setItem('wishlist', JSON.stringify(wishlist))
  }, [cart, wishlist])

  //  Handle Scroll

  const handleScroll = () => {
    const section = document.getElementById('product-section');

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Cart & Wishlist ShowTab Function
  const handlePanel = (tabName) => {
    setActivePanel(prev => (
      prev === tabName ? null : tabName
    ))

  }

  // Close Panel Function
  const handleClose = () => setActivePanel(null)

  //Remove Item
  const removeItem = (product) => {
    setCart(cart.filter(item => item.id !== product.id))


  }


  // Quantity Increment
  const quantityIncrement = (product) => {

    setCart(cart.map(item =>
      item.id === product.id ?
        { ...item, quantity: item.quantity + 1 } : item
    ))

  }
  const quantityDecrement = (product) => {

    setCart(cart.map(item =>
      item.id === product.id && item.quantity > 1 ?
        { ...item, quantity: item.quantity - 1 } : item
    ))

  }

  // Add to Cart Function
  const addToCart = (product) => {
    const alreadyAdded = cart.find(item => item.id === product.id);
    if (alreadyAdded) {
      alert('Item is already present in the Cart')
      return;
    }

    setCart([...cart, { ...product, quantity: 1 }]);

  }

  // Wishlist Function
  const addToWishlist = (product) => {
    const isInWishlist = wishlist.some(item => item.id === product.id);

    if (isInWishlist) {
      setWishlist(wishlist.filter(item => item.id !== product.id))
    }
    else {
      const addDate = new Date().toLocaleString('en-GB')
      setWishlist([...wishlist, { ...product, addDate }])
    }




  }


  // Clear Wishlist
  const clearWishlist = () => {
    setWishlist([])
  }

  return (
    <div className="bg-white min-h-screen">

      {/* Navbar */}
      <Navbar
        handleScroll={handleScroll}
        setSearchTerm={setSearchTerm}
        isScrolled={isScrolled}
        handlePanel={handlePanel}
        totalItems={totalItems}
        wishlist={wishlist}
      />

      {/* Hero Section */}
      <Hero />

      {/* Product */}
      <Product searchTerm={searchTerm}
        addToCart={addToCart}
        addToWishlist={addToWishlist}
        wishlist={wishlist}
      />

      {/* Cart */}
      <Cart
        activePanel={activePanel}
        handleClose={handleClose}
        cart={cart}
        removeItem={removeItem}
        quantityIncrement={quantityIncrement}
        quantityDecrement={quantityDecrement}
        subTotal={subTotal}
        shippingFee={shippingFee}
        orderTotal={orderTotal}
        setOrderSummary={setOrderSummary}
      />


      {/* Wishlist Tab */}
      <Wishlist
        activePanel={activePanel}
        handleClose={handleClose}
        wishlist={wishlist}
        addToCart={addToCart}
        clearWishlist={clearWishlist}
      />


      {/* Order Summary */}
      {
        orderSummary &&
        <OrderSummary
          cart={cart}
          subTotal={subTotal}
          shippingFee={shippingFee}
          orderTotal={orderTotal}
          setOrderSummary={setOrderSummary}
          setOrderPlaced={setOrderPlaced}
          setCart={setCart}
        />

      }

      {/* Order Placed */}
      {

        orderPlaced &&
        <OrderPlace
          setOrderPlaced={setOrderPlaced} />
      }


    </div>
=======
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
>>>>>>> a652b11fa0d6a3e443a56bd6d7d53eeb6c490a81

  )
}

export default Home