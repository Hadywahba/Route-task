import axios from "axios";
import { useEffect } from "react";
import { createContext, useState } from "react";

export const ProductsContext = createContext();

export default function ProductcontextProvider(props) {
  const [product, setproduct] = useState([]);

  const getData = async () => {
    try {
      const { data } = await axios.get("https://fakestoreapi.com/products");

      setproduct(data);
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
getData()
},[])
  return (
    <ProductsContext.Provider value={{ product, setproduct, getData }}>
      {props.children}
    </ProductsContext.Provider>
  );
}
