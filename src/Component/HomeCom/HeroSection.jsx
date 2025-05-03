import React from 'react'
import Container from '../Container'
import style from '@/styles/Hero.module.css'
import Slider from './Slider'

const HeroSection = () => {
  return (
      <Container>
        <section className='flex flex-col-reverse lg:flex-row h-screen lg:h-screen sm:h-[120vh]  items-center justify-between py-8 px-4 rounded-xl'>
          {/* Text Section  */}
          <div className={`${style.textSection}text-gray-700`}>
            <h1 className='sm:text-4xl text-2xl font-bold '>One Stop Solution <span className='text-pink-500'>E-Store</span></h1>
            <p className='mt-4 sm:text-2xl leading-relaxed'>Discover the latest headphones , earphones , mobiles , tablets etc.</p>
            <p className='mt-4 sm:text-2xl leading-relaxed'>Exclusive deals just for you!</p>
            <button className='text-[#ec4899] py-3 px-6 text-xl border-none rounded-lg cursor-pointer bg-[#f2f2f2] mt-4 font-medium'>Shop Now</button>
          </div>
          {/* slider  */}
          <Slider/>
        </section>
      </Container>   
  )
}

export default HeroSection
