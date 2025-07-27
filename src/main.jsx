import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'flowbite';
import ProductcontextProvider from './context/Productcontext.jsx';
import CartcontextProvider from './context/Cartcontext.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductcontextProvider>
    <CartcontextProvider>
 <App />
   </CartcontextProvider>
   </ProductcontextProvider>
  </StrictMode>,
)
