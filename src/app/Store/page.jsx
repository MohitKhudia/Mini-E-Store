import React from 'react'
import Product from '@/Component/Product'
import { getProducts } from '@/library'

const StorePage = () => {
  return (
      <ProductListing/>
  )
}

export default StorePage



const ProductListing = async() => {
  const data = await  getProducts()
    return <div className='col-span-4 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mt-3'>
        {data.map((v,i)=> <Product product={v} key={i}/>)}
    </div>
}