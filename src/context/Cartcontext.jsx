import { useEffect } from "react";
import { createContext, useState } from "react";
 export const Cartcontext=createContext()
  
export default function CartcontextProvider(props) {
    const [cartitem, setcartitem] = useState(() => {
  const saved = localStorage.getItem("cart");
  
    return saved ? JSON.parse(saved) : [];

  
});
  

   // add to cart 
   function addTocart(product){
 const exists = cartitem.find((item) => item.id === product.id);
 if(exists){
     setcartitem(cartitem.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1,} : item  ));
 }else{
     setcartitem([...cartitem, { ...product, quantity: 1 }]);
 }

   }
   // add to cart

   //Remove from cart
function removecart(id){
      setcartitem(cartitem.filter((item) => item.id !== id));
}
    //Remove from cart

//add item
function addItem(id){
setcartitem(cartitem.map((item) => item.id === id ? { ...item, quantity: item.quantity + 1,} : item  ));
}

//add item


//remove item
function deleteItem(id){
setcartitem(cartitem.map((item) => item.id === id && item.quantity>1 ? { ...item, quantity:  item.quantity-1 } : item  ));
}

//remove item
    
    useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartitem));
  }, [cartitem]);

   
  return (
    <Cartcontext.Provider value={{addTocart , deleteItem , addItem ,removecart , cartitem}}>
{props.children}
    </Cartcontext.Provider>
  )
}
