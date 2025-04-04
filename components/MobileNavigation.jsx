

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"
import Link from "next/link"
import { FaCartShopping } from "react-icons/fa6"

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image src="hamburger.svg" alt="menu" width={24} height={24} className="invert size-10 sm:hidden"/>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle className="hidden">Edit profile</SheetTitle>
        </SheetHeader>
        
        <div className="grid gap-4 py-4">
        <SheetClose className="text-2xl font-bold">Shoppitilify</SheetClose>
          <SheetClose className="text-lg font-semibold">Home</SheetClose>
          <SheetClose className="text-lg font-semibold">Shop</SheetClose>
          <SheetClose className="text-lg font-semibold">About</SheetClose>
          <SheetClose className="text-lg font-semibold">Contact</SheetClose>
          <SheetClose>
            <div className="flex justify-center">
                <div className='bg-black rounded-full text-white size-10 flex justify-center items-center'>
          <FaCartShopping className='w-5 h-5 '/>
        </div>
            </div>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  )
}
