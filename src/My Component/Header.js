import React from 'react'

const Header = (props) => {
  return (
    <div className='flex justify-between px-20 py-2 mx-auto text-white bg-blue-400'>  
    <button className='font-semibold text-[24px]'  onClick={() => props.handleShow(false)}>Online Shopping</button>
    <button className='text-[18px] font-medium' onClick={() => props.handleShow(true)}>Cart 
    <sup className='px-[5px] py-[1px] text-[11px] text-center bg-red-500 rounded-[50px]'> {props.count} </sup>
    </button>
    </div>
  )
}
export default Header;