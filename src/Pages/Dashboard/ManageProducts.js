import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import SingleProduct from './SingleProduct';

const ManageProducts = () => {
  const { data: products, isLoading, refetch } = useQuery('allbookings', () => fetch('https://public-rozella-fatema.koyeb.app/products').then((res) => res.json()));
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="px-4 lg:px-2 py-4">
      <h3 className="pb-4 px-4 text-lg">List of Products:</h3>
      <div className="overflow-x-auto px-4">
        <table className="table table-zebra w-full lg:w-9/12">
          <thead>
            <tr>
              <th className="text-base">No</th>
              <th className="text-base">Name</th>
              <th className="text-base">Price</th>
              <th className="text-base">Minimum Quantity</th>
              <th className="text-base">Stock</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <SingleProduct product={product} index={index} key={product._id} refetch={refetch}></SingleProduct>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProducts;
