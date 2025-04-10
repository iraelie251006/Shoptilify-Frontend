import {FaCartShopping} from 'react-icons/fa6'
import { SheetDemo } from './MobileNavigation'
import Link from 'next/link'

const NavbarDemo = () => {
  return (
    <nav className='sticky top-0 z-50 bg-white py-1 shadow-2xl'>
     <div className='flex justify-between mx-52 my-5 max-sm:mx-10'>
      <Link href={'/home'} className='text-2xl font-bold'>Shopitilify</Link>
      <div className='flex gap-3 items-center'>
        <Link href={'/home'} className='text-lg font-semibold max-sm:hidden'>Home</Link>
        <Link href={'/home'} className='text-lg font-semibold max-sm:hidden'>Shop</Link>
        <Link href={'/home'} className='text-lg font-semibold max-sm:hidden'>About</Link>
        <Link href={'/home'} className='text-lg font-semibold max-sm:hidden'>Contact</Link>
        <div className='bg-black rounded-full text-white size-10 flex justify-center items-center max-sm:hidden'>
          <FaCartShopping className='w-5 h-5 '/>
        </div>
      </div>
      <SheetDemo />
    </div> 
    </nav>
    
  )
}

export default NavbarDemo