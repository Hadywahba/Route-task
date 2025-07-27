
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { lazy, useEffect } from 'react'
import {  PulseLoader } from 'react-spinners'
import { useState } from 'react'
import { Suspense } from 'react'
import Cart from './components/Cart/Cart'
function App() {
  const[isloading , setisloading]=useState(true)

 //handle Loading
useEffect(()=>{
 const time = setTimeout(()=>setisloading(false),2000)
  return()=>clearTimeout(time)
})
 //handle Loading



const Home = lazy(()=>import(`./components/Home/Home`))
const ProductDetails = lazy(()=>import(`./components/ProductDetails/ProductDetails`))
const Layout = lazy(()=>import(`./components/Layout/Layout`))
const NotFound =lazy(()=>import(`./components/NotFound/NotFound`))

  //handle Routing
 const router =createBrowserRouter([
  {path:"" , element:<Suspense>
    <Layout/>
  </Suspense>,children:[
    {index:"true" , element:<Suspense>
      <Home/>
    </Suspense>},
    {path:"ProductDetails/:id",element:
    <Suspense>
      <ProductDetails/>
    </Suspense>},
    {path:"cart" , element:<Cart/>},
    {path:"*" , element:<Suspense><NotFound/></Suspense>},
  ]}

])
 //handle Routing
  return (
   <>
    {isloading ? <div className="flex items-center justify-center h-screen bg-black">
      <PulseLoader color="#ADFF2F"  size={40} />
      </div>
      
      : <>
       <RouterProvider router={router}>
   
    </RouterProvider>
      
      </>
      }
   
   
   
   </>
   
  )
}

export default App
