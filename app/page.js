"use client"
import api from '@/api/api';
import CardContainer from '@/components/CardContainer'
import Header from '@/components/Header'
import { useEffect, useState } from 'react';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [skeleton, setSkeleton] = useState(false);

  useEffect(() => {
    setLoading(true);
    setSkeleton(true); // Move this line here
    api.get("products")
      .then(res => {
        console.log(res.data);
        setProducts(res.data);
        setLoading(false);
        setSkeleton(false); // Set skeleton to false after loading
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setSkeleton(false); // Set skeleton to false on error
      });
  }, []);

  return (
    <>
      <Header />
      <CardContainer products={products} show={skeleton} />
    </>
  );
}

export default Home;
