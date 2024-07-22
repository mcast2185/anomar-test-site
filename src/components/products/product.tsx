'use client';

import Image from 'next/image';
import { StarIcon } from 'lucide-react';
import { useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';

import { addToBasket } from '../../slices/basketSlice';
import { CurrencyFormatter } from '../functionality/CurrencyFormatter';


const MAX_RATING = 5;
const MIN_RATING = 1;

const Product = (({ 
  id, 
  title, 
  price, 
  description, 
  category, 
  image }: {
    id: number, 
    title: string, 
    price: number, 
    description: string, 
    category: string, 
    image: any
  }) => {
  const [rating, setRating] = useState(0);
  const dispatch = useDispatch()

  
  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      rating,
      description,
      category,
      image,
    };
    
    // sending the product as an action to the REDUX store... the basketslice
    dispatch(addToBasket(product));
  };

  useEffect(() => {
    setRating(Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING);
  });

  return (
    <div className='relative flex flex-col m-5 z-30 px-10'>
    {/* <div className='relative flex flex-col m-5 bg-white z-30 p-10'> */}
      <p className='absolute top-2 right-2 text-xs italic text-gray-100'>{category}</p>
      <Image
        className='mx-auto my-auto'
        src={image}
        alt={`${title} product image`}
        height={200}
        width={200}
        objectFit='contain'
      />
      <h4 className='my-3 text-gray-100'>{title}</h4>
      <div className='flex'>
        {Array(rating).fill(0).map((_, idx) => (
          <StarIcon key={idx} suppressHydrationWarning={true} color="gold" className='h-5' />
        ))}
        {/* {Array(rating).fill(Array(rating).map((_, idx) => (
          <StarIcon key={idx} suppressHydrationWarning={true}  className='h-5 text-orange-300' />
        )))} */}
      </div>
      <p className=" line-clamp-2 text-xs my-2  text-gray-100">{description}</p>
      <div className='mb-5 text-gray-100'>
        {CurrencyFormatter(price, { code: 'USD' })}
      </div>
      <button onClick={addItemToBasket} className='mt-auto button'>Add to Basket</button>
    </div>
  );
});

export default Product;