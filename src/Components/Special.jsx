import React from 'react'
import bannner from '../Assests/banner-03.jpg'
const Special = () => {
  return (
    <>
    <div className="lastimgdiv bg-gray-200 px-2 py-6 max-sm:h-4/6 h-full max-sm:w-full max-sm:flex max-sm:items-center">
        <div className="img relative max-sm:h-full w-full h-full ">
          <img className='w-full h-full' src={bannner} alt="" />
          <div className="absolute max-sm:h-full w-full h-full top-0 bg-black bg-opacity-40 max-sm:flex items-center justify-center ">
            <div className="details relative w-3/6 max-sm:h-5/6 max-sm:w-4/6  h-96 text-white max-sm:my-2 max-sm:left-0 max-sm:top-0 left-14 top-36 flex flex-col gap-5 max-sm:gap-3">
              <div className='text-2xl max-sm:text-lg font-semibold'>
                <h1>Limited Time Offer</h1>
              </div>
              <div className='text-5xl max-sm:text-3xl font-bold '>
                <h1>Special Edition</h1>
              </div>
              <div className='text-lg font-light'>
                <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus</h1>
                <h1> nec ullamcorper mattis, pulvinar dapibus leo.</h1>
              </div>
              <div className='text-2xl max-sm:text-lg font-semibold'>
                <h1>Buy This T-shirt At 20% Discount, Use Code OFF20</h1>
              </div>
              <h1 className='text-lg text-black bg-white max-sm:w-full w-44 text-center py-3 px-2 hover:bg-black hover:text-white hover:cursor-pointer'>Shop Now</h1>
            </div>
          </div>
        </div>
        </div>
    </>
  )
}

export default Special