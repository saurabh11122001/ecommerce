import MyContext from "../Context/Context";
import { useState } from "react";

const MyStates=(props)=>{
  const[AboutUs,setAboutUs]=useState(false)
  const[profile,setProfile]=useState(false)
  const[login,setLogin]=useState(false)
  const[register,setRegister]=useState(false)
  const[cart,setCart]=useState(false)
  const[loader,setLoader]=useState(false)
  const[user,setUser]=useState("")
    return (
        <MyContext.Provider value={{AboutUs,setAboutUs,profile,setProfile,login,setLogin,setRegister,register,cart,setCart,loader,setLoader,user,setUser}}>
          {props.children}
        </MyContext.Provider>
      )
    
}

export default MyStates;