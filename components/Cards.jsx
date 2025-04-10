import { BASE_URL } from "@/api/api"
import Image from "next/image"
import { FaHeart, FaRegHeart } from "react-icons/fa6"
import { useState } from "react"

const Cards = ({product}) => {
    const [isFilled, setIsFilled] = useState(false)

    const toggleHeart = () => {
      setIsFilled(!isFilled)
    }
  return (
    <>
     <div className="max-w-sm rounded-lg shadow-2xl w-[200px] ">
        <Image src={`${BASE_URL}${product.image}`} className="rounded-t-lg" alt="Card image" width={200} height={200}/>
        <div className="p-4">
            <h5 className="text-xl font-semibold">{`${product.name}`}</h5>
            <div className="flex justify-between items-center">
              <p className="text-gray-700">{`$${product.price}`}</p>
              <span onClick={toggleHeart}>{isFilled ? <FaHeart color="red" /> : <FaRegHeart/>}</span>
            </div>
            
        </div>
    </div>
    </>
  )
}

export default Cards