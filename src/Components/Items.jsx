import React from 'react'
import image2 from '../Assests/women-fashion-free-img.jpg';
import image3 from '../Assests/men-fashion-free-img.jpg';
import image4 from '../Assests/footwear-free-img.jpg';
const Items = () => {
  return (
    <>
    <div className='item-child  relative flex max-sm:flex-col  max-sm:items-center gap-5 justify-between max-sm:h-5/6 h-screen w-full'>
          <div className='img relative max-sm:w-96  h-5/6 w-5/6'>
            <img className='h-full w-full  'src={image2} alt="" />
            <div className='h-full w-full bg-black bg-opacity-60 absolute top-0'>
              <div className="text-white flex flex-col gap-5 relative h-60 w-80 max-sm:my-36 my-60 mx-8 ">
                <h1 className='text-3xl font-semibold'>20% Off On Tank Tops</h1>
                <div className='flex flex-col font-semibold '>
                <h1 className='text-xl'>Lorem ipsum dolor sit amet,</h1>
                  <h1 className='text-xl'> consectetur adipiscing elit. Proin ac dictum.</h1>
                </div>
                  <h1 className='text-lg text-black bg-white w-44 max-sm:w-full text-center py-3 px-2 hover:bg-black hover:text-white hover:cursor-pointer'>SHOP NOW</h1>
              </div>
            </div>
          </div>
          <div className='img relative max-sm:w-96  h-5/6 w-5/6'>
            <img className='h-full w-full  'src={image3} alt="" />
            <div className='h-full w-full bg-black bg-opacity-60 absolute top-0'>
            <div className="text-white flex flex-col gap-5 relative max-sm:my-36 h-60 w-80 my-60 mx-8 ">
                <h1 className='text-3xl font-semibold'>Latest Eyewear For You</h1>
                <div className='flex flex-col font-semibold '>
                <h1 className='text-xl'>Lorem ipsum dolor sit amet,</h1>
                  <h1 className='text-xl'> consectetur adipiscing elit. Proin ac dictum.</h1>
                </div>
                  <h1 className='text-lg text-black text-center max-sm:w-full bg-white w-44 py-3 px-2 hover:bg-black hover:text-white hover:cursor-pointer'>SHOP NOW</h1>
              </div>
            </div>
          </div>
          <div className='img relative max-sm:w-96  h-5/6 w-5/6'>
            <img className='h-full w-full  'src={image4} alt="" />
            <div className='h-full w-full bg-black bg-opacity-60 absolute top-0'>
            <div className="text-white flex flex-col gap-5 relative h-60 w-80 max-sm:my-36 my-60 mx-8 ">
                <h1 className='text-3xl font-semibold'>Let's Lorem Suit Up!</h1>
                <div className='flex flex-col font-semibold '>
                <h1 className='text-xl'>Lorem ipsum dolor sit amet,</h1>
                  <h1 className='text-xl'> consectetur adipiscing elit. Proin ac dictum.</h1>
                </div>
                  <h1 className='text-lg text-black bg-white w-44 max-sm:w-full text-center py-3 px-2 hover:bg-black hover:text-white hover:cursor-pointer'>CHECK OUT</h1>
              </div>
            </div>
          </div>
          
          </div>
    </>
  )
}

export default Items