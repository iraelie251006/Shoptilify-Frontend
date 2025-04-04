import React from 'react'
import Card from './Card'

const CardContainer = ({products, show}) => {
  return (
    <div className='py-5 ' id='shop'>
        <h2 className='text-center text-4xl font-semibold'>Our Products</h2>
        <div className='px-4 lg:px-5 mt-10 mx-auto max-w-screen-lg py-5'>
            <div className='flex gap-8 flex-wrap justify-center'>
              {products.map((product) => (
               <Card key={product.id} product={product} show={show}/> 
              ))}
              
            </div>
        </div>
    </div>
  )
}

export default CardContainer