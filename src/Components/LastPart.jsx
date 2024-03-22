import React from 'react'
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const LastPart = () => {
  return (
    <>
     <div className='offerlink w-full h-28 flex items-center justify-center bg-white'>
            <h1 className='font-semibold hover:text-blue-500 cursor-pointer text-3xl max-sm:text-xl'>SALE UP TO 70% OFF FOR ALL CLOTHES & FASHION ITEMS, ON ALL BRANDS.</h1>
          </div>
          <hr />
          <div className="last w-full py-5 px-5 min-h-96 bg-white flex max-sm:flex-col justify-between gap-5">
            <div className="part1  max-sm:w-full max-sm:items-center max-sm:h-60  w-3/6 h-96 flex flex-col py-10 px-8 gap-5">
              <div className='py-5'><h1 className='text-4xl font-bold'>DNK</h1></div>
              <div className='max-sm:flex max-sm:text-center'><h1 className='text-2xl font-semibold'>The best look anytime, anywhere</h1></div>
            </div>
            <div className="part2  w-full  max-sm:h-full  h-96 max-sm:flex-col flex gap-5 justify-center items-center">
              <div className="her  max-sm:items-center w-52 h-64 flex flex-col gap-5">
                <div>
                  <h1 className="forher  text-2xl font-semibold">For Her</h1>
                </div>
                <div className="list flex text-lg text-gray-400 flex-col  gap-2">
                  <h1 className='cursor-pointer hover:text-blue-400'>Women Jeans</h1>
                  <h1 className='cursor-pointer hover:text-blue-400'>Tops and Shirts</h1>
                  <h1 className='cursor-pointer hover:text-blue-400'>Women Jackets</h1>
                  <h1 className='cursor-pointer hover:text-blue-400'>Heels and Flats</h1>
                  <h1 className='cursor-pointer hover:text-blue-400'>Women Accessories</h1>
                </div>
              </div>
              <div className="her  w-52 h-64 flex max-sm:items-center flex-col gap-5">
                <div>
                  <h1 className="forhim  text-2xl font-semibold">For Him</h1>
                </div>
                <div className="list flex text-lg text-gray-400 flex-col  gap-2">
                  <h1 className='cursor-pointer hover:text-blue-400'>Men Jeans</h1>
                  <h1 className='cursor-pointer hover:text-blue-400'>Men Shirts</h1>
                  <h1 className='cursor-pointer hover:text-blue-400'>Men Jackets</h1>
                  <h1 className='cursor-pointer hover:text-blue-400'>Men Shoes</h1>
                  <h1 className='cursor-pointer hover:text-blue-400'>Men Accessories</h1>
                </div>
              </div>
              <div className="her   w-64 h-64 flex flex-col gap-5  ">
                <div>
                  <h1 className='text-2xl font-semibold max-sm:text-center'>Subscribe</h1>
                </div>
                <div className='flex flex-col gap-3'>
                  <input className='w-full h-10 text-xl px-1' type="text" placeholder='Your email address..' />
                  <h1 className='w-36 bg-blue-500 text-white max-sm:mx-auto hover:bg-blue-700 cursor-pointer h-10 flex items-center justify-center text-lg font-medium'>SUBSCRIBE</h1>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="copyright h-24 max-sm:gap-2 max-sm:py-2 bg-gray-300 flex max-sm:flex-col justify-between items-center px-10 ">
            <div><h1 className='text-xl max-sm:text-center'>Copyright © 2024 Brandstore. Powered by Brandstore.</h1></div>
            <div className="socials flex gap-4 cursor-pointer">
              <span className='text-2xl'><FaFacebookF className='hover:text-blue-500' /></span>
              <span className='text-2xl'><FaYoutube className='hover:text-blue-500' /></span>
              <span className='text-2xl'><FaTwitter className='hover:text-blue-500' /></span>
              <span className='text-2xl'><FaInstagram className='hover:text-blue-500' /></span>
              <span className='text-2xl'><FaGoogle className='hover:text-blue-500' /></span>
            </div>
          </div>
    </>
  )
}

export default LastPart