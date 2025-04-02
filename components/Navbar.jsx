import {FaCartShopping} from 'react-icons/fa6'

const NavbarDemo = () => {
  return (
    <nav className='sticky top-0 z-50 bg-white py-1 shadow-2xl'>
     <div className='flex justify-between mx-52 my-5'>
      <div className='text-2xl font-bold'>Shoppitilify</div>
      <div className='flex gap-3 items-center'>
        <p className='text-lg font-semibold'>Home</p>
        <p className='text-lg font-semibold'>Shop</p>
        <p className='text-lg font-semibold'>About</p>
        <p className='text-lg font-semibold'>Contact</p>
        <div className='bg-black rounded-full text-white size-10 flex justify-center items-center'>
          <FaCartShopping className='w-5 h-5 '/>
        </div>
        
      </div>
    </div> 
    </nav>
    
  )
}

export default NavbarDemo