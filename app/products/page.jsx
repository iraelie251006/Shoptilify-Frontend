"use client"
import Image from "next/image"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useEffect } from "react"
import api from "@/api/api"
import { useParams } from "next/navigation"

export default function ProductDetailPage() {
  const {slug} = useParams()
  useEffect(() => {
    api.get(`product_detail/${slug}`).
    then(res => {
      console.log(res.data)
    }).catch(error => {
      console.log(error.message)
    })
  }, [])
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Main Product Section */}
      <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Product Image */}
        <div className="relative overflow-hidden rounded-md bg-black">
          <Image
            src="hamburger.svg"
            alt="Gucci Brown Shoe"
            width={600}
            height={600}
            className="h-auto w-full object-contain"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-center">
          <h1 className="mb-2 text-4xl font-bold text-gray-900">Gucci Brown</h1>
          <p className="mb-6 text-2xl font-semibold text-gray-900">$200.00</p>

          <div className="mb-8 space-y-4 text-gray-700">
            <p>
              Complete your outfit with this elegant Gucci Shoe in rich brown leather. Featuring the brand&apos;s signature
              GG buckle, this shoe combines luxury with practicality, making it a versatile accessory for any occasion.
            </p>
            <p>
              Whether you&apos;re dressing up for a formal event or adding a designer touch to casual wear, this shoe is a
              standout.
            </p>
          </div>

          <Button className="w-fit">Add to cart</Button>
        </div>
      </div>

      {/* Related Products Section */}
      <div>
        <h2 className="mb-6 text-3xl font-bold text-gray-900">Related products</h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Rolex Watch */}
          <Card className="overflow-hidden">
            <div className="aspect-square bg-gray-100">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Rolex Wrist Watch"
                width={300}
                height={300}
                className="h-full w-full object-cover"
              />
            </div>
            <CardContent className="p-4 text-center">
              <h3 className="font-medium">Rolex Wrist</h3>
            </CardContent>
          </Card>

          {/* Gucci Bag */}
          <Card className="overflow-hidden">
            <div className="aspect-square bg-gray-100">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Gucci Bag"
                width={300}
                height={300}
                className="h-full w-full object-cover"
              />
            </div>
            <CardContent className="p-4 text-center">
              <h3 className="font-medium">Gucci Bag</h3>
            </CardContent>
          </Card>

          {/* AllStars Pair */}
          <Card className="overflow-hidden">
            <div className="aspect-square bg-gray-100">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="AllStars Pair"
                width={300}
                height={300}
                className="h-full w-full object-cover"
              />
            </div>
            <CardContent className="p-4 text-center">
              <h3 className="font-medium">AllStars Pair</h3>
            </CardContent>
          </Card>

          {/* Nike Pair */}
          <Card className="overflow-hidden">
            <div className="aspect-square bg-gray-100">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Nike Pair"
                width={300}
                height={300}
                className="h-full w-full object-cover"
              />
            </div>
            <CardContent className="p-4 text-center">
              <h3 className="font-medium">Nike Pair</h3>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

