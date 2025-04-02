import { BASE_URL } from "@/api/api"
import Image from "next/image"

const Card = ({product}) => {
  return (
    <div className="max-w-sm rounded-lg shadow-2xl w-[300px] ">
        <Image src={`${BASE_URL}${product.image}`} className=" rounded-t-lg" alt="Card image" width={300} height={300}/>
        <div className="p-4">
            <h5 className="text-xl font-semibold">{`${product.name}`}</h5>
            <p className="text-gray-700">{`$${product.price}`}</p>
        </div>
    </div>
  )
}

export default Card