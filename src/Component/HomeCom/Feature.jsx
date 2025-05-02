import React from 'react'
import Container from '../Container'
import Product from '../Product'


const Feature = async() => {
        const response = await fetch('https://fakestoreapi.in/api/products?limit=5')
          const data = await response.json()
  return (
    <div className='p-3'>
      <Container>
        <h1 className='text-center text-4xl font-bold'>Featured Products</h1>
        <div className='my-4 grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4'>
          {
            data.products.map((prod)=>{
              return <Product key={prod.id} product={prod}/>
            })
          }
        </div>
      </Container>
      
    </div>
  )
}

export default Feature
