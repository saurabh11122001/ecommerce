import React from 'react'
import { IoStarSharp } from "react-icons/io5";
import item1 from '../Assests/product-accessory1-300x300.jpg'
import item2 from '../Assests/product-accessory2-300x300.jpg'
import item3 from '../Assests/product-bag1-300x300.jpg'
import item4 from '../Assests/product-bag3-300x300.jpg'
import item5 from '../Assests/product-m-jeans1-300x300.jpg'
import item6 from '../Assests/product-w-jeans1-300x300.jpg'
import item7 from '../Assests/product-w-jeans2-300x300.jpg'
import item8 from '../Assests/product-w-jeans4-300x300.jpg'
import item9 from '../Assests/sports-shoe1-300x300.jpg'
import item10 from '../Assests/sports-shoe3-300x300.jpg'
const allitems=[item1,item2,item3,item4,item5,item6,item7,item8,item9,item10];
const Featured = () => {
  return (
    <>
     <div className="featuredProduct relative bg-white max-sm:w-full max-sm:px-2 w-full min-h-screen py-3 px-2">
        <div className="title h-44 max-sm:w-full w-full flex items-center justify-center">
          <h1 className='font-medium  text-5xl w-3/6 py-2 text-center'>Featured Products</h1>
        </div>
        <div className="otheritems max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center grid grid-cols-5 gap-10 max-sm:px-8 py-5 px-10 w-full h-5/6">
          {allitems.map((item,index)=>{
            return(
              <div key={index} className=' h-96 max-sm:w-56 w-60 flex flex-col gap-1'>
            <div className='img bg-white h-60 w-full'>
              <img className='w-full h-full' src={item} alt="" />
            </div>
            <div className=' h-full px-3 cursor-pointer'>
              <h1 className='text-xl font-semibold'>DNK Yellow Shoes</h1>
              <h1 className='text-sm text-gray-400'>Men</h1>
              <h1 className='text-lg font-semibold'>$120.00</h1>
              <div className='stars flex  text-xl '>
                <span><IoStarSharp className='text-yellow-400 ' /></span>
                <span><IoStarSharp className='text-gray-300' /></span>
                <span><IoStarSharp className='text-gray-300' /></span>
                <span><IoStarSharp className='text-gray-300' /></span>
                <span><IoStarSharp className='text-gray-300' /></span>
              </div>
              </div>
          </div>
            )
          })}
        </div>
        </div>
    </>
  )
}

export default Featured