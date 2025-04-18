import Cards from './Cards'

const CardContainer = ({products}) => {
  return (
    <div className='py-5 ' id='shop'>
        <h2 className='text-center text-4xl font-semibold'>Our Products</h2>
        <div className='px-4 lg:px-5 mt-10 mx-auto max-w-screen-lg py-5'>
            <div className='flex gap-8 flex-wrap justify-center'>
              {products.map((product) => (
               <Cards key={product.id} product={product} slug={product.slug}/> 
              ))}
              
            </div>
        </div>
    </div>
  )
}

export default CardContainer