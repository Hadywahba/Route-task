import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import { FaStar } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import { Cartcontext } from '../../context/Cartcontext'

export default function ProductDetails() {
const[details , setdetails]=useState([])
  const {id} =useParams()
  console.log(id)
 const {addTocart} = useContext(Cartcontext)
function add(item){
  addTocart(item)
  console.log(item.id)
}

 
  const getSpecificItems=async()=>{
    try {
      const{data}=await axios.get(`https://fakestoreapi.com/products/${id}`)
      console.log(data)
      setdetails(data)
      
    } catch (error) {
       console.log(error)
    }
  }

  useEffect(() => {
   getSpecificItems()
  }, [])
  
   
  return (
    <div className='container grid grid-cols-12 items-center my-10 gap-6 px-6 min-h-screen'>
<div className='col-span-12 md:col-span-4'>
  <img className='w-full' src={details.image} alt="" />

</div>


<div className='col-span-12 md:col-span-8'>
<h2 className='text-3xl my-3 font-bold'>{details.title}</h2>
<p className='dark:text-gray-400 text-gray-600  text-lg my-3 font-medium'>{details.description}</p>
<p className='dark:text-text-color text-text-dark-color my-3'>{details.category}</p>
{/* <span className='text-lg'>{details.price} <span>EGP</span></span> */}

<div className="flex justify-between items-center w-full my-2">
        <span className='text-xl'>{details.price} EGP</span>

        <div className="flex items-center gap-2 text-xl  ">
          <FaStar className="text-star" />
          <span>{details?.rating?.rate}</span>
        </div>
       
      </div>
       <button onClick={()=>add(details)} className="bg-text-dark-color text-white mt-3 dark:text-black  dark:bg-text-color w-full p-3">add to card</button>
</div>

    </div>
  )
}
