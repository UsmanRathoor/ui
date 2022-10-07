import React, { useState, useEffect } from 'react'
 



function CartList({ cart, removeFromCart, ClearCart}) {
    const [newCart, setnewCart] = useState([])

    useEffect(() => {
        setnewCart(cart)
    }, [cart])



    return (
        <div className='w-[95%] mx-auto mt-3'>
            {
                newCart?.map((cartItem, cartIndex) => {
                    return (
                        <div key={cartItem.id}>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center'>
                                    <img src={cartItem.Image} className=' h-[70px]'></img>
                                    <span>{cartItem.title}</span>
                                </div>
                                <div>
                                    <button onClick={() => {
                                        const _newCart = newCart.map((item, index) => {
                                            return cartIndex === index ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 } : item;
                                        })
                                        setnewCart(_newCart)

                                    }} className='px-4 text-[15px]  rounded-sm shadow '>-</button>
                                    <span className='px-4  mx-4 rounded-sm py shadow'>{cartItem.quantity}</span>
                                    <button onClick={() => {
                                        const _newCart = newCart.map((item, index) => {
                                            return cartIndex === index ? { ...item, quantity: item.quantity + 1 } : item
                                        })
                                        setnewCart(_newCart)
                                    }} className='px-4 text-[15px]  rounded-sm shadow'>+</button>
                                </div>
                                <span>Price : ${cartItem.price}</span>
                                <span>Sub Total : $ {cartItem.quantity > 6 ? (cartItem.price * cartItem.quantity / 100 * 70) : cartItem.price * cartItem.quantity}</span>
                                <button type="button" className='bg-[#e3e2e2] rounded-md py-1 px-3 hover:bg-[#d2d0d0]' onClick={() => removeFromCart(cartItem.id)}>Remove </button>
                            </div> <hr className='mt-1' />
                        </div>
                    )
                })
            }
            <div className='flex text-[18px] font-medium  mt-3 justify-between'><p className='underline'>Total Price : $
                {
                    newCart.map(item => item.quantity > 6 ? (item.price * item.quantity / 100 * 70) : item.price * item.quantity).reduce((total, value) => total + value, 0)
                }
            </p>
            {/* {
                newCart?.map((CartItem) => {
                    return (
              <p key={CartItem.id}> <button className='px-5 py-1 rounded-[5px] bg-[#d9d9d9] hover:bg-[#cacaca]'  onClick={() => ClearCart(CartItem.id)}>Clear Cart</button></p>
                    )
            })
            } */}
            </div>
        </div>
    )
}
export default CartList;


