import React, { useContext } from 'react'
import gif1 from "../../assets/images/shopping-cart (1).gif"
import { MdDelete } from 'react-icons/md'
import { IoAddOutline } from 'react-icons/io5'
import { Cartcontext } from '../../context/Cartcontext'
import { FiMinus } from 'react-icons/fi'
export default function Cart() {
    const {cartitem,removecart ,deleteItem , addItem } = useContext(Cartcontext) ;

   
  return (

    <>
    {cartitem.length==0? <>
     
      <div className='flex flex-col gap-5 items-center min-h-screen justify-center mb-10 text-center px-4'>
    <img className='w-[400px] ' src={gif1} alt="" />
    <h1 className=' text-xl sm:text-4xl text-center font-serif font-bold '>Your cart is Empty </h1>
 
  </div>
     
     
     </>
     :
      <div className='px-6 container my-10  '>
 
  {cartitem.map((product)=><div className=' grid grid-cols-12 items-stretch sm:items-center  gap-6  '>

    
<div className='col-span-6 sm:col-span-3 '>
  <img className='w-full mb-14' src={product.image} alt="" />

</div>


<div className='col-span-6 sm:col-span-9'>
<div className=' flex flex-col sm:flex sm:flex-row sm:justify-between sm:items-center '>
<div>
  <h2 className='text-3xl my-3 font-bold'>{}</h2>
<p className='dark:text-text-color text-text-dark-color my-3 text-xl'>{product.title.split(" ").splice(0, 1).join(" ")}</p>
{/* <span className='text-lg'>{details.price} <span>EGP</span></span> */}
<p className='dark:text-text-color text-text-dark-color my-3 sm:text-sm md:text-2xl'>quantity: {product.quantity}</p>

        <span className='sm:text-sm md:text-xl my-2'>{Math.round(product.price * product.quantity)} EGP</span>
</div>
{/* ${product.price} × {product.quantity} */}

        <div className="flex items-center gap-2 sm:text-xs md:text-xl  ">
                   <button onClick={()=>addItem(product.id)} className='p-4 dark:bg-text-dark-color bg-text-color dark:text-white text-black sm:text-xs md:text-2xl'><IoAddOutline /></button>
           <button onClick={()=>deleteItem(product.id)} className='p-4 dark:bg-text-dark-color bg-text-color dark:text-white text-black sm:text-xs md:text-2xl'><FiMinus /></button>

        </div>
               <button onClick={()=>removecart(product.id)} className='p-3  rounded-md my-6 dark:bg-text-dark-color bg-text-color dark:text-white text-black '>Delete all items</button>
</div>


     
      
</div>

    </div>)}

</div>}

</>
  )
}
