import React from 'react'

const Header = () => {
  return (
    <header className='py-5 bg-[#6050DC] h-[500px] flex justify-center items-center flex-col'>
        <div className='px-4 lg:px-5 my-5 '>
            <div className='text-center text-white flex justify-center items-center flex-col'>
                <h1 className='sm:text-6xl text-4xl font-bold'>Welcome To Your Favourite Store</h1>
                <p className='mt-5 font-semibold'>Discover the latest trends with our modern collection</p>
                <p className='mt-5 font-bold'>Shop Now</p>
            </div>
        </div>
    </header>
  )
}

export default Header