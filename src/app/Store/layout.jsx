import Container from '@/Component/Container'
import { getCategories } from '@/library'
import React from 'react'

const StoreLayout = ({children}) => {
  return (
    <Container className={`grid grid-cols-5 gap-4`}>
    <CategoryListing/> 
    {children}
  </Container>
  )
}

export default StoreLayout

const CategoryListing = async() => {
    const data = await getCategories()
      return <div className=''>
        <h1 className='text-2xl my-3 text-center font-medium'>Categories</h1>
        <ul>
          {data.map((v,i)=>{
            return <li className='p-2 border my-2 text-center' key={i}>{v.toUpperCase()}</li>
          })}
        </ul>
      </div>
  }