import React from 'react';
import Logo from './12.jpg'

const ProductList = ({ Data, addToCart}) => {
    return (
        <div>
        <div className='text-center text-[22px] font-medium'>Shopping Cart</div>
        <img className='w-[100px] ml-4' src={Logo}></img>
        <div className='flex w-[96%] mx-auto justify-between flex-wrap'>
     
            {
                Data.map((DataItem, DataIndex) => {
                    return (
                        <div key={DataItem.id} className='w-[200px] mx-2 my-2'>
                            <div className="pt-3 ">
                                <div className="card1 w-full rounded-[5px] shadow bg-white py-[14px] ">
                                    <div className="text-[18px] font-semibold text-center text-black">{DataItem.title}</div>
<hr></hr>
                                    <img src={DataItem.Image} className='h-[150px] hover:h-[160px] my-2 mx-auto'/>
                                    <hr></hr>
                                    <div className="text-[14px] flex justify-between w-[93%] mt-3 mx-auto">
                                        <p className="text-[#4f4e4e] ">{DataItem.description}</p>
                                        <h1 className="font-semibold text-black">${DataItem.price}</h1>
                                    </div>
                                    <div className='mx-auto w-[90%]'>
                                     <button className=" text-[14px] w-full font-semibold text-white  py-[4px] mt-5 rounded-[5px] hover:bg-blue-600 bg-blue-500"

                                        // onClick={() => addToCart(DataItem)}
                                        onClick={() => addToCart(DataItem)}
                                    >
                                        Add items
                                    </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
   </div> )
}   
export default ProductList