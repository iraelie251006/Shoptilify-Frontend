"use client"
import api from '@/api/api';
import CardContainer from '@/components/CardContainer'
import Header from '@/components/Header'
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
    try {
      const res1 = await api.get('products')
      setProducts(res1.data);
    } catch (error) {
      console.log("Error fetching data", error);
    }
    }
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <CardContainer products={products}/>
    </>
  );
}

export default Home;
