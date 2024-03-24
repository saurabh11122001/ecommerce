import React, { useState } from 'react'
import { IoCloseSharp } from "react-icons/io5";
import MyContext from '../Context/Context';
import { useContext } from 'react';
import './login.css'
const Login = () => {
    const context=useContext(MyContext)
    const {setLogin,register,setRegister,setLoader,setUser,user}=context;
    const host = "http://localhost:5000"
    const [credentials, setCredentials] = useState({username:"",email:"",password:""});
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const response = await fetch(`${host}/create`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
      
            },
            body:JSON.stringify({username:credentials.username,email:credentials.email,password:credentials.password})
          });
          const json = await response.json()
          if(json.success){
            setUser(json.name);
            setRegister(false);
            setLogin(false);
            setLoader(true);
            localStorage.setItem("loggedIn",true);
          }
          
        }
        const onChange=(e)=>{
          setCredentials({...credentials,[e.target.name]:e.target.value});
          
      }
  return (
    <>
    {!register?<div  className='login bg-black bg-opacity-70 flex items-center justify-center absolute top-0 w-screen h-screen'>
            <div className='bg-gray-100 login-child h-5/6 flex flex-col gap-2 justify-center items-center  w-2/6 rounded-md py-1 px-1'>
              <div className='h-10 flex items-center justify-end  w-full px-5 text-2xl cursor-pointer'><IoCloseSharp onClick={()=>{setLogin(false)}}/></div>
              <div><h1 className='font-bold text-3xl'>P A I N</h1></div>
              <div><h1 className='font-medium text-xl'>Login Here</h1></div>
              <div className=' h-full w-5/6 flex flex-col gap-2 items-center justify-center'>
                  <div className='px-2 h-20 w-full flex gap-2 items-center justify-between'><span className='font-medium text-xl'>Email</span><input className='h-10 w-5/6 rounded-lg text-xl outline-none px-2' type="text" /></div>
                  <div className='px-2 h-20 w-full flex gap-2 items-center justify-between'><span className='font-medium text-xl'>Password</span><input className='h-10 w-5/6 rounded-lg text-xl outline-none px-2' type="password" /></div>
                  <div className=' h-28 w-full flex flex-col gap-5 justify-center items-center py-2'>
                    <h1 className='bg-blue-800 h-10 w-28 py-2 rounded-lg text-white cursor-pointer text-center'onClick={()=>{setLoader(true);setLogin(false)}}>Login</h1>
                    <div className='flex gap-2'>
                      <span className='font-medium'>Not a user?</span>
                      <h1 className='hover:text-blue-500 cursor-pointer'onClick={()=>{setRegister(true)}}>Sign Up</h1>
                    </div>
                  </div>
              </div>
            </div>
        </div>:<div  className='login bg-black bg-opacity-70 flex items-center justify-center absolute top-0 w-screen h-screen'>
            <div className='bg-gray-100 login-child h-5/6 flex flex-col gap-2 justify-center items-center  w-2/6 rounded-md py-1 px-1'>
              <div className='h-10 flex items-center justify-end  w-full px-5 text-2xl cursor-pointer'><IoCloseSharp onClick={()=>{setLogin(false)}}/></div>
              <div><h1 className='font-bold text-3xl'>P A I N</h1></div>
              <div><h1 className='font-medium text-xl'>Create Account</h1></div>
              <div className=' h-full w-5/6 flex flex-col gap-2 items-center justify-center'>
                  <div className='px-2 h-20 w-full flex gap-2 items-center justify-between'><span className='font-medium text-xl'>Name</span><input className='h-10 w-5/6 rounded-lg text-xl outline-none px-2' type="text"name="username" value={credentials.username} onChange={onChange}/></div>
                  <div className='px-2 h-20 w-full flex gap-2 items-center justify-between'><span className='font-medium text-xl'>Email</span><input className='h-10 w-5/6 rounded-lg text-xl outline-none px-2' type="email"name="email"value={credentials.email} onChange={onChange} /></div>
                  <div className='px-2 h-20 w-full flex gap-2 items-center justify-between'><span className='font-medium text-xl'>Password</span><input className='h-10 w-5/6 rounded-lg text-xl outline-none px-2' type="password"name="password"value={credentials.password} onChange={onChange}/></div>
                  <div className=' h-28 w-full flex flex-col gap-5 justify-center items-center py-2'>
                    <h1 className='bg-blue-800 h-10 w-28 py-2 rounded-lg text-white cursor-pointer text-center'onClick={handleSubmit}>Register</h1>
                    <div className='flex gap-2'>
                      <span className='font-medium'>Already a user?</span>
                      <h1 className='hover:text-blue-500 cursor-pointer'onClick={()=>{setRegister(false)}}>Login</h1>
                    </div>
                  </div>
              </div>
            </div>
        </div>
        }
    </>
  )
}

export default Login