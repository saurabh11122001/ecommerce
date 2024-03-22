import React from 'react'
import { IoCloseSharp } from "react-icons/io5";
import MyContext from '../Context/Context';
import { useContext } from 'react';
const Cart = () => {
    const context=useContext(MyContext)
    const {setCart}=context;
  return (
    <>
    {<div className='profile-div mx-2 py-1 px-1 bg-gray-100  rounded-md my-2 flex flex-col gap-12 w-2/6 h-full absolute top-0 right-0'>
      <div className='heading  h-10 items-center px-2 flex justify-between'>
        <h1 className='font-semibold text-xl'>Shopping Cart</h1>
        <span className='text-xl cursor-pointer'onClick={()=>{setCart(false)}}><IoCloseSharp/></span>
      </div>
      <div className='items  h-4/6 flex items-center justify-center'>
        <h1 className='text-xl'>No items for Display</h1>
      </div>
      <h1 className='w-full bg-blue-700 hover:bg-blue-900 h-10 flex items-center justify-center text-xl cursor-pointer text-white font-semibold'>Continue Shopping</h1>
            
        </div>}
    </>
  )
}

export default Cart