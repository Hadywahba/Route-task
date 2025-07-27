/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    
      ],
      darkMode:"class",
  theme: {
    extend: {
       container:{
        center:true
      },
       colors:{
        "text-color":"#ADFF2F",
        "text-dark-color":"#32CD32",
       "star":"#FFD700"
        
      }
      
    },
  },
   plugins: [],
  
}

