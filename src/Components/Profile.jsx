import React, { useEffect, useState } from 'react'
import { IoCloseSharp } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import MyContext from '../Context/Context';
import { useContext } from 'react';
import './profile.css'
const Profile = () => {
    const context=useContext(MyContext)
    const {setProfile,setLogin,user,setUser}=context;
   
  return (
    <>
    {<div className='profile-div bg-gray-100  rounded-md my-2 flex flex-col gap-12 w-96 h-full absolute top-0 right-0'>
            <div className=' h-10 flex justify-end items-center px-3'>
              <span className='text-2xl cursor-pointer'onClick={()=>{setProfile(false)}} ><IoCloseSharp/></span>
            </div>
            <div className="info  h-96 flex flex-col gap-5 justify-center items-center">
              <div className="profile-pic bg-gray-300 w-20 h-20 rounded-full"></div>
              <div className="other-info flex flex-col items-center justify-center gap-2">
                <h1 className='text-2xl font-medium'>{user}</h1>
                <h1></h1>
                <h1></h1>
              </div>
              <div className='update flex gap-2 justify-center items-center   flex-col'>
                <div className='flex items-center'><h1 className='font-sm    gap-2 text-lg '>Update Profile</h1><span className='cursor-pointer'><FiEdit/></span></div>
                {localStorage.getItem("loggedIn")?<h1 className='bg-red-500 text-center h-8 w-20 py-1 rounded-lg font-medium cursor-pointer'onClick={()=>{localStorage.removeItem("loggedIn");setUser("")}}>Logout</h1>:<h1 className='bg-red-500 text-center h-8 w-20 py-1 rounded-lg font-medium cursor-pointer'onClick={()=>{setLogin(true);setProfile(false)}}>Login</h1>}
              </div>
            </div>
        </div>}
    </>
  )
}

export default Profile