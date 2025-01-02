import React, { useEffect, useState } from 'react';
import Product from '../Home/Product';
import Loading from '../Shared/Loading';

const Productspage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch('https://public-rozella-fatema.koyeb.app/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      });
  }, []);
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="px-8 lg:px-16 py-8 mb-4">
      <h2 className="text-xl md:text-2xl lg:text-3xl text-center my-8">Manufactured Automotor Parts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
        {products.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Productspage;
