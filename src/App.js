import './App.css';
import Header from './My Component/Header';
import ProductList from './My Component/ProductList';
import Data from './My Component/Data';
import { useState } from 'react';
import CartList from './My Component/CartList';
import React from 'react'




function App() {
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState([]);


  const addToCart = (data) => {
    addToCart < 2 ? setCart([...cart, { ...data, quantity : 1}]) : alert('usman')
    }

  const removeFromCart = (id) => {
    alert('Card Remove')  
    const newList = cart.filter((l) => l.id !== id);
    setCart(newList);
  }
  const handleShow = (value) => {
    setShowCart(value)
  }


// const ClearCart = (id) =>{
//   const newList = addToCart.filter((l) => l.id !== id);
//   setCart(newList);
// }





  return (
    <div className="App">
      <Header count={cart.length} handleShow={handleShow} />
      <div className='w-[94%] mx-auto shadow py-10 rounded-[4px]'>{
        showCart ?
          <CartList cart={cart} removeFromCart={removeFromCart} /> :
          <ProductList Data={Data} addToCart={addToCart} />
      }</div>
    </div>
  );
}

export default App;



