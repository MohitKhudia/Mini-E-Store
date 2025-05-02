'use client'
import { createContext, useContext, useEffect, useState } from 'react'

const AppContext = createContext()

export const useAppContext = () => useContext(AppContext)


export const AppProvider = ({ children }) => {
    const [products , setProducts] = useState([])
    const getProduct = async() =>{
       try {
        const response = await fetch('https://fakestoreapi.in/api/products?limit=5')
        const data = await response.json()
        setProducts(data.products)
       }
       catch(error) {
          console.error(error.message)
       }
    }
    useEffect(()=>{
      getProduct()
    },[])
    const supply = {products}
  return(
    <AppContext.Provider value={supply}>
      {children}
    </AppContext.Provider>
  )
}