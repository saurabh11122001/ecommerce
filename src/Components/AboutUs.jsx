import React from 'react'
import Items from './Items'
import Featured from './Featured'
import Special from './Special'
import image from '../Assests/slide-image-free-img.jpg'

export const AboutUs = () => {
  return (
    <>
     <div className='relative max-sm:h-5/6   h-96 max-sm:my-5  mx-8 max-sm:mx-0 my-1'>
        <div className='relative flex flex-col gap-5  items-center justify-center max-sm:gap-1 px-4 py-2 h-5/6 max-sm:items-center  '>
          <h1 className='text-7xl font-bold text-white'>About Us</h1>
          <h1 className='text-xs py-3 px-1 font-medium animate-bounce cursor-pointer rounded-full bg-white relative top-36 text-black w-10 h-10'>Scroll</h1>
        </div>
    </div>
    <div className='bg-gray-100 w-full min-h-96 flex  px-10 py-10'>
      <div className="bg-white w-full h-96">
        <div className="heading bg-white h-36 flex gap-2 text-5xl font-semibold  items-center px-16">
        <h1 className=' border-t-4 border-solid border-blue-700'>Who</h1>
          <h1>We</h1>
          <h1>Are</h1>
        </div>
        <div className=' bg-white h-52 flex gap-2  font-normal   px-16'>
          <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit.</h1>
        </div>
      </div>
      <div className=" w-full h-96">
        <img className='h-full w-full' src={image} alt="" />
      </div>
    </div>
    <div className='min-h-screen w-full bg-green-500'>

    </div>
    </>
  )
}
