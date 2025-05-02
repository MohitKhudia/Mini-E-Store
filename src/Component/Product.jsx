import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import style from '@/styles/Product.module.css'

const Product = ({product}) => {
  return (
    <div className={`${style.card} bg-white p-4 rounded-lg shadow flex h-full flex-col`}>
      <Link href={"/store/product-details/" + product.id}>
      <Image width={300} height={150} src={product.image} alt={product.title} className={`${style.productImage} object-cover rounded-md`}/>
      </Link>
      <div className='mt-4'>
        <h3 className='text-sm font-semibold text-gray-800'>{product.title.slice(0,20) + ' ...'}</h3>
        <p className='text-gray-900 font-semibold mt-2'>${product.price}</p>
        <button className='mt-4 bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition-all duration-300'>
          Buy Now
        </button>
      </div>
    </div>
  )
}

export default Product