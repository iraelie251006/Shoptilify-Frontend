"use client"
import api, { BASE_URL } from '@/api/api';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';


export default function PostPage() {
  const {slug} = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await api.get(`product_detail/${slug}`);
        console.log(data)
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Main Product Section */}
      <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Product Image */}
        <div className="relative overflow-hidden rounded-md bg-black">
          <Image
            src={`${BASE_URL}${product.data.image}`}
            alt={`${product.data.slug}`}
            width={600}
            height={600}
            className="h-auto w-full object-cover"
            quality={100}
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-center">
          <h1 className="mb-2 text-4xl font-bold text-gray-900">{product.data.name}</h1>
          <p className="mb-6 text-2xl font-semibold text-gray-900">${product.data.price}</p>

          <div className="mb-8 space-y-4 text-gray-700">
            <p>
              {product.data.description}
            </p>
          </div>

          <Button className="w-fit bg-white text-slate-900 hover:text-white shadow-xl font-semibold">Add to cart</Button>
        </div>
      </div>

      {/* Related Products Section */}
      <div>
        <h2 className="mb-8 text-3xl font-bold text-gray-900 text-center">Related products</h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Rolex Watch */}
          {product.data.similar_products?.map((item) => (
            <Card className="overflow-hidden" key={item.id}>
            <div className="aspect-square bg-gray-100">
              <Image
                src={`${BASE_URL}${item.image}`}
                alt="Rolex Wrist Watch"
                width={300}
                height={300}
                className="h-full w-full object-cover"
              />
            </div>
            <CardContent className="p-4 text-center">
              <h3 className="font-medium">{item.name}</h3>
            </CardContent>
          </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
