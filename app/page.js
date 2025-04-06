"use client"
import api from '@/api/api';
import CardContainer from '@/components/CardContainer'
import Header from '@/components/Header'
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [details, setDetails] = useState([]);

  const {slug} = useParams()

  useEffect(() => {
    const fetchData = async() => {
    try {
      const [res1, res2] = await Promise.all([
        api.get('products'),
        api.get(`product_detail/${slug}`)
      ]);
      setProducts(res1.data);
      setDetails(res2.data)
    } catch (error) {
      console.log("Error fetching data", error);
    }
    }
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <CardContainer products={products} details={details}/>
    </>
  );
}

export default Home;
