import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import { useEffect } from 'react'
import Footer from '../Footer/Footer'

export default function Layout() {
  const[darkmode , setdarkmode]=useState(()=>{
    return localStorage.getItem("theme")=="dark";
  })

  useEffect(()=>{
if(darkmode){
document.documentElement.classList.add("dark");
localStorage.setItem("theme","dark")
}else{
 document.documentElement.classList.remove("dark");
localStorage.setItem("theme","light") 
}

  },[darkmode])
   
  return (
    <div className='bg-white text-black dark:bg-black dark:text-white min-h-screen flex flex-col'>
    <Navbar darkmode={darkmode} toggleDark={()=>setdarkmode(!darkmode)} />
    <div className='flex-grow'>
      <Outlet/>
    </div>
    <Footer/>
    </div>
  )
}
