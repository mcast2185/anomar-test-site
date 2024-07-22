import React from 'react';
import { getSession } from 'next-auth/react';

import Header from '../components/Header';
import ProductFeed from '../components/products/ProductFeed';


const Gallery = ({products}) => {
  return (
    <div className='bg-[#0f0f10]'>
    <Header />
      <div className='max-w-screen-2xl mx-auto'>
        <ProductFeed products={products} />
      </div>
    </div>
  );
};

export default Gallery;


export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  return {
    props: {
      products,
      session
    }
  };
};