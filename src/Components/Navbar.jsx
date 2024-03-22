import React from 'react'
import { IoCartSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import Context from '../Context/Context'
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
const Navbar = () => {
const context=useContext(Context)
let {setAboutUs,setProfile,setCart}=context;

  
  return (
    <div className='navbar sm:w-full max-sm:h-20 h-28 flex gap-2 justify-between py-2 max-sm:px-3  px-10 bg-black bg-opacity-10 max-sm:bg-white'>
        <div className='part1  flex gap-10 h-full w-full'>
            <div className='img  w-40 h-full flex items-center'><h1 className='text-5xl max-sm:text-3xl  font-extrabold text-white cursor-pointer max-sm:text-black'onClick={()=>{setAboutUs(false)}}><Link to={"/"}>PAIN</Link></h1></div>
            <div className='others max-sm:hidden lg:flex text-gray-300  cursor-pointer  gap-5 flex items-center justify-center  w-96'>
                <h1 className='text-xl hover:text-gray-500 font-semibold'>Everything</h1>
                <h1 className='text-xl hover:text-gray-500 font-semibold'>Women</h1>
                <h1 className='text-xl hover:text-gray-500 font-semibold'>Man</h1>
                <h1 className='text-xl hover:text-gray-500 font-semibold'>Accesserios</h1>
            </div>
        </div>
        <div className="part2 max-sm:hidden lg:flex flex gap-5 text-gray-300  items-center justify-center  h-full w-2/5">
            <h1 className='text-xl  cursor-pointer hover:text-gray-500 font-semibold'onClick={()=>{setAboutUs(true)}}><Link to="/about">About</Link></h1>
            <h1 className='text-xl cursor-pointer hover:text-gray-500 font-semibold'>Contact Us</h1>
            <h1 className='text-xl cursor-pointer hover:text-gray-500 font-semibold'>$00</h1>
            <span className='text-xl cursor-pointer hover:text-gray-500'><IoCartSharp onClick={()=>{setCart(true)}} /></span>
            <span className='text-xl cursor-pointer hover:text-gray-500'onClick={()=>{setProfile(true)}}><FaUser /></span>
        </div>
    </div>
  )
}

export default Navbar