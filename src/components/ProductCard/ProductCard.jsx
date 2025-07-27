import React, { useContext } from "react";
import { CiStar } from "react-icons/ci";
import { FaRegStar, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Cartcontext } from "../../context/Cartcontext";

export default function ProductCard({ item }) {
   const {addTocart} = useContext(Cartcontext)

function add(item){
  addTocart(item)
  console.log(item.id)
}


  return (
    <div className="card w-full  sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5  p-4 relative pb-12 ">
      
      
   <Link to={`/ProductDetails/${item.id}`}>
     <div className="">
        <img className="w-full h-[200px]  " src={item.image} alt="image" />
      </div>

      <p className="text-text-dark-color mb-2 text-lg my-2">{item.category}</p>
      <h2 className="text-xl font-extrabold">
        {item.title.split(" ").splice(0, 1).join(" ")}
      </h2>

      <div className="flex justify-between items-center w-full my-2">
        <span>{item.price} EGP</span>

        <div className="flex items-center gap-1  ">
          <FaStar className="text-star" />
          <span>{item.rating.rate}</span>
        </div>
       
      </div>
      <span class=" bg-text-dark-color dark:text-black text-white dark:bg-text-dark-color  absolute top-0 end-0  mt-2 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm ">
        {item.rating.count}
      </span>
   </Link>
   <button onClick={()=>add(item)} className="bg-text-dark-color text-white button-card dark:text-black  dark:bg-text-color w-full p-3">add to card</button>
    </div>
  );
}
