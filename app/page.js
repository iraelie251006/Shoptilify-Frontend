"use client"
import api from '@/api/api';
import CardContainer from '@/components/CardContainer';
import Header from '@/components/Header';
import { useEffect, useState } from 'react';
const Home = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
  api.get("products").then(res => {
  console.log(res.data)
  setProducts(res.data)
}).catch((error) => {
  console.log(error)
})
}, [])

  return (
    <>
      <Header />
      <CardContainer products={products}/>
    </>
  )
}

export default Home