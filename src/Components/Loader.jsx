import React from 'react'
import './loader.css'
const Loader = () => {
  return (
    <>
    <div className='loader bg-black bg-opacity-70 flex items-center justify-center absolute top-0 w-screen h-screen'>
        <div className="loader-div bg-transparent h-10 w-10">

        </div>
    </div>
    </>
  )
}

export default Loader