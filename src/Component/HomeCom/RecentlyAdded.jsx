'use client'
import React, { useEffect, useState } from 'react'
import Container from '../Container'
import Image from 'next/image'
import Product from '../Product'
import { useAppContext } from '@/app/AppProvider'

const RecentlyAdded = () => {
    const {products} = useAppContext()
  return (
    <div className='bg-gray-100 py-3'>
        <Container>
            <h1 className='text-center text-4xl font-bold'>Recently Added Products</h1>
            <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mt-10">
            {products.map((value,index)=>{
                return(
                    <div key={index} className='h-full'>
                       <Product product={value}/>
                    </div>
                )
            })}
            </div>
        </Container>      
    </div>
  )
}

export default RecentlyAdded
