'use client'
import Container from '@/Component/Container'
import React from 'react'

const error = () => {
  return (
    <Container className='col-span-4 mt-4'>
        <h1 className='text-center text-4xl my-3 '>
            Something Went Wrong while faetching products
        </h1>
    </Container>
  )
}

export default error