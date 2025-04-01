import {FaCartShopping} from 'react-icons/fa6'

const NavbarDemo = () => {
  return (
    <nav className='sticky top-0 z-50'>
     <div className='flex justify-between mx-52 mt-3'>
      <div className='text-2xl font-bold'>Shoppitilify</div>
      <div className='flex gap-3 items-center'>
        <p className='text-lg font-semibold'>Login</p>
        <p className='text-lg font-semibold'>Register</p>
        <FaCartShopping className='w-5 h-5'/>
      </div>
    </div> 
    <hr className='mt-2'/>
    </nav>
    
  )
}

export default NavbarDemo