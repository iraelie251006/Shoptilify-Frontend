import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'

const Header = () => {
  return (
    <header className='py-5 bg-[#6050DC] h-[500px] flex justify-center items-center flex-col'>
        <div className='px-4 lg:px-5 my-5 '>
            <div className='text-center text-white flex justify-center items-center flex-col'>
                <h1 className='sm:text-6xl text-4xl font-bold'>Welcome To Your Favourite Store</h1>
                <p className='mt-5 font-semibold'>Discover the latest trends with our modern collection</p>
                <p className='text-slate-950 shadow hover:bg-white/95 bg-white font-bold h-10 rounded-full px-8 flex items-center mt-5'>Shop Now
                <span className='hover:transition-transform hover:translate-x-2 duration-1000 ease-in-out'><FaArrowRight className='ml-1 size-4'/></span>
                </p>
            </div>
        </div>
    </header>
  )
}

export default Header