import Container from '@/Component/Container'
import { getCategories } from '@/library'
import style from '@/styles/Store.module.css'
import React from 'react'

const StoreLayout = ({ children }) => {
  return (
    <Container className={`grid md:grid-cols-5 grid-cols-1 gap-4`}>
      <CategoryListing />
      {children}
    </Container>
  )
}

export default StoreLayout

const CategoryListing = async () => {
  const data = await getCategories()
  return (
    <div className='mb-4'>
      <h1 className='text-2xl my-3 text-center font-medium'>Categories</h1>
      <ul className={`flex md:flex-col flex-row overflow-x-auto ${style['scrollbar-hide']} gap-4`}>
        {data.map((v, i) => (
          <li 
            className='py-2 flex justify-center border px-4 w-full whitespace-nowrap rounded-lg cursor-pointer bg-gray-50' 
            key={i}
          >
            {v.toUpperCase()}
          </li>
        ))}
      </ul>
    </div>
  )
}