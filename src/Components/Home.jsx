import React from 'react'
import Items from './Items'
import Featured from './Featured'
import Special from './Special'


const Home = () => {

  return (
    <>
    <div className='relative  max-sm:h-5/6 min-h-96 max-sm:my-5 my-16 mx-8 max-sm:mx-0 py-2'>
        <div className=' flex flex-col gap-10 max-sm:gap-1 px-4 py-2 h-full max-sm:items-center '>
            <div className='text-white '>
            <h1 className='text-7xl font-semibold max-sm:text-4xl '>Raining Offers For </h1>
            <h1 className='text-7xl font-semibold my-5 max-sm:text-4xl'> Hot Summer! </h1>
            </div>
            <h1 className='text-white  max-sm:text-xl font-semibold'>25% Off On All Products</h1>
            <div className="btn flex gap-5 max-sm:my-4 max-sm:flex-col">
            <h1 className=' flex items-center justify-center text-black bg-white hover:bg-black hover:text-white cursor-pointer text-xl max-sm:text-xs font-medium w-36 h-14 max-sm:w-96 max-sm:h-12'>Shop Now</h1>
            <h1 className='border-solid border-2 border-white flex items-center justify-center text-white text-xl max-sm:text-xs hover:bg-white hover:text-black cursor-pointer   font-medium w-36 h-14 max-sm:w-96 max-sm:h-12'>Find More</h1>
            </div>
        </div>
    </div>
    
    
    <div className='bg-white h-52 max-sm:h-20'></div>
          <div className="items relative bg-white  min-h-96 w-full py-4 px-8 ">
            <Items />
          </div>
          <Featured />
          <Special />
    </>
    
  )
}

export default Home