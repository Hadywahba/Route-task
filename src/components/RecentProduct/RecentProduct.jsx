import React, { useContext, useState } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { useEffect } from 'react'
import Loader from '../../Loader/Loader'
import { FaFilter } from 'react-icons/fa'
import { ProductsContext } from '../../context/Productcontext'
import { Cartcontext } from '../../context/Cartcontext'

export default function RecentProduct() {
  const [sort , setsort]=useState("")
  const[searchvalue , setsearchvalue]=useState("")
 const[showCompLoading , setshowCompLoading]=useState(false)
 const { product, setproduct, getData} = useContext(ProductsContext)

  //get data 
 async function showData(){
const data =await getData()
console.log(data)
 const searchRes = data.filter((item)=> item.title.toLowerCase().includes(searchvalue.toLowerCase())) ;
console.log(searchRes)
  setproduct(searchRes)
 }
   
  //get data 
   


  




    //Handle Search
const handlesearch =(e)=>{
setsearchvalue(e.target.value)
console.log(e.target.value)
}


       //Handle Search



   //Handle sort
function handlesort(e){
const type =e.target.value ;
setsort(type)
const sortItem=[...product]
if(type==="price"){
  sortItem.sort((a,b)=>a.price - b.price)         
}else if(type==="-price"){
 sortItem.sort((a,b)=>b.price - a.price)         
}else if(type==="title"){
sortItem.sort((a,b)=>a.title.localeCompare(b.title))       // A to Z
}else if(type==="-title"){
sortItem.sort((a,b)=>b.title.localeCompare(a.title))      //  Z to A
}

 setproduct(sortItem)

}

  //Handle sort


  useEffect(()=>{

    const time =setTimeout(()=> 
   { setshowCompLoading(true) }
   ,400 )
showData()
  return () => clearTimeout(time);
  },[searchvalue])
  

 
  return (
    <>




  {/* search bar && sort */}
   <div className='grid grid-cols-12 gap-6 px-4 mt-8'>
 <div className='col-span-12  '>
<form className="max-w-md mx-auto mt-24 md:mt-10">   
  <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
  <div className="relative">
    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
      <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
      </svg>
    </div>
    <input type="search"
     id="default-search"
      className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
       placeholder="Search your product ...." 
       required 
       value={searchvalue}
       onInput={handlesearch}
       
       />
       
  
  </div>
</form>
 </div>
 <div className='col-span-12  '>
  <div className="flex justify-center items-center md:flex xl:justify-end xl:items-center my-10 gap-3  ">   
<label htmlFor="check">
  <FaFilter className='text-2xl' />
</label>
<select onChange={handlesort} name="" id="check"  className='p-2 w-[50%] sm:w-[30%] md:w-[35%] xl:w-[15%] border border-gray-300 rounded-lg bg-gray-50 text-gray-900  dark:text-white focus:outline-text-dark-color dark:focus:outline-text-color   dark:bg-gray-700 dark:border-gray-600'>
<option  value="-price">  Price High to Low</option>
<option value="price">  Price Low to High</option>
<option value="title" selected> Name A to Z </option>
<option value="-title" > Name Z to A </option>
</select>
</div>
 </div>
   </div>
 {/* search bar */}


    {product.length==0 && showCompLoading ? <Loader/>:
    <div className='px-4 '>
  
 
    <div className='flex flex-wrap  gap-y-6  my-20 '>
    {product.map((item)=> <ProductCard key={item.id} item={item} />)}

   </div>
    </div>
   
   }
   
   </>
  )
}
