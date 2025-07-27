import React from 'react'
import NotFoundImage from "../../assets/images/3cfb2b6683049d12f83dc68471ac7967 not f.webp"
export default function NotFound() {
   
  return (
   <div className="flex justify-center items-center container mx-auto flex-grow px-8 py-26 md:py-24 ">
      <img className=' w-full md:w-[70%] py-10' src={NotFoundImage} alt="NotFoundImage" />
    </div>
  )
}
