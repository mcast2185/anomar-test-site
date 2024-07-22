"use client";

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { Carousel } from "react-responsive-carousel";
import { ArrowRight, MenuIcon, ShoppingCart, StarIcon } from 'lucide-react';

import PRODUCT4 from '../../public/images/productOne.jpg';
import PRODUCT from '../../public/images/jellyfishLights.jpg';
import PRODUCT2 from '../../public/images/trippyLightsTwo.jpg';
import PRODUCT3 from '../../public/images/staggeringLights.jpg';
import { CurrencyFormatter } from '@/components/functionality/CurrencyFormatter';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

const MAX_RATING = 5;
const MIN_RATING = 1;

const Services = () => {
  // const [rating, setRating] = useState(0);
  const router = useRouter();

  // useEffect(() => {
  //   setRating(Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING);
  // });

  return (
    <div id="services" className="h-[100vh] w-[100vw] relative  sm:mt-0 mr-[9vw] sm:mr-0 ">
      {/* <div className="absolute top-0 left-0  w-[100vw] h-[20vh] -mt-[10vh] sm:mt-0 
        bg-gradient-to-t from-[#0f0f10] to-[#0f0f10e1] sm:hidden sm:w-0 sm:h-0"/> */}
      <div className='relative h-[100vh] w-[100vw] bg-[#0f0f10] flex flex-col pr-[9vw] pt-[2vh] sm:pt-0 sm:pr-0'>
        <div className="flex flex-row w-full h-[5vh] mt-[5vh] items-center justify-end px-[4.5rem] sm:px-0 gap-4 sm:gap-0">
          <h1 className="text-[2.5rem] sm:text-xl cursor-default font-PoiretOne text-[--yellow] sm:px-2 relative">
            Services
          </h1>
          <div className='w-[9rem] sm:w-20 h-[3px] sm:h-[2px] bg-[--yellow] 
            hidden sm:block mt-[.5rem] ml-[2rem] sm:ml-0 sm:mr-0 sm:p-0 mr-[9vw]'/>
          <div className="scale-95 sm:hidden sm:w-0">
            <span onClick={() => router.push("/gallery")} className='group/arrows cursor-pointer h-[8rem] relative w-[8rem] border 
              border-gray-300 rounded-full flex justify-center items-center 
              transform hover:scale-90 ease-in-out duration-700 hover:border-[#5d1da1]'>
              <div className='h-[48px] w-[58px] overflow-hidden flex flex-row justify-center'>
                <span className='flex flex-row mr-[56px]'>
                <ArrowRight className="w-[58px] h-[48px] mx-1 text-gray-300 group-hover/arrows:text-[--yellow] 
                  group-hover/arrows:translate-x-[60px] transform-none ease-in-out group-hover/arrows:delay-300 duration-[850ms]"/>
                <ArrowRight className="w-[58px] h-[48px] mb-[40px] text-gray-300 
                  group-hover/arrows:opacity-0 group-hover/arrows:translate-x-[68px] transform-none ease-in-out duration-700 "/>
                </span>
              </div>
            </span>
          </div>
        </div>
        <div className="relative h-[80vh] w-[100vw] flex flex-col py-[1.5rem] pr-[9vw] sm:scale-[.5] sm:pr-0">
          <div className='absolute mb-[10%] z-10 h-[50vh] flex justify-center items-center w-[100vw] scale-[.95]'>
            <span className="px-auto pr-[9vw] leading-[0] tracking-[.5rem]" onClick={() => router.push("/gallery")} >
              <h1 className='Gallery  outline outline-1 stroke-white font-NotoSerifDisplay text-[15rem]  text-gray-200 font-extrabold'>
                Gallery
              </h1>
            </span>
          </div>
          {/* <div className='h-[80vh] w-full flex justify-center mb-[4rem] z-0 '>
            <div className="w-[35vw] h-[70vh] sm:w-[85vw] border-sm border-[#0f0f10] 
              rounded-full flex justify-center bg-gray-100 relative overflow-hidden">
              <div className="h-[70vh] w-[23.5vw] sm:w-[73.5vw] bg-gray-300  relative flex flex-col justify-center">
                <div className="h-[45vh] w-full bg-[#5d1da1] rounded-bl-[2rem] rounded-t-[2rem]  top-0 overflow-visible"/>
                <div className="h-[25vh] w-[23.5vw] sm:w-[73.5vw] object-contain bg-gray-300 
                  flex flex-col border-x-1  drop-shadow-md border-slate-800 border-opacity-30">
                  <div className="px-7 sm:px-1 pt-5 flex flex-row justify-between">
                    <p className='font-Inter font-light text-2xl sm:text-lg'>
                      Gallery
                    </p>
                    <span className='font-Inter font-light text-lg pt-1 flex items-baseline 
                      text-gray-400 ease-in hover:text-gray-600 transition duration-800 cursor-pointer mb-0 pb-0'>
                      <p>View all...</p>
                    </span>
                  </div>
                  <div className='mt-[2px] mb-5 px-12 w-full'>
                    <div className='w-full h-[2px] bg-gray-800 opacity-40  '/>
                  </div>
                  <div className='flex flex-row justify-evenly '>
                    <Image src={PRODUCT2} alt='Design Products' 
                      className="h-[8.5rem] w-[140px] px-auto rounded shadow-sm shadow-[#0f0f10]" /> 
                    <span className="text-3xl bg-gray-800 h-[7rem] opacity-40 w-[3px] mt-10"></span>
                    <Image src={PRODUCT3} alt='Design Products' 
                      className="h-[8.5rem] w-[140px] px-auto rounded shadow-sm shadow-[#0f0f10]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[35vw] sm:w-[85vw] h-[70vh] border-sm border-[#0f0f10] rounded-full flex justify-center absolute ">
              <div className="h-[70vh] w-[23.5vw] sm:w-[73.5vw] relative border-x-1  drop-shadow-md 
                border-slate-800 border-opacity-30 border-r-none flex flex-col justify-center overflow-inherit">
                <div className="h-[45vh] w-full bg-[#5d1da1] shadow-md shadow-[#0f0f10] object-contain 
                  rounded-bl-[2rem] rounded-t-[.5rem] absolute top-0 left-0 overflow-visible flex flex-col">
                  <div className="px-6 sm:px-1 py-4 flex flex-row w-[23.5vw] sm:w-[73.5vw] relative justify-between z-[20]">
                    <div className="text-gray-100 hover:text-gray-200 justify-start 
                      flex hover:scale-[1.05] transition duration-500 h-[1.7rem] w-[1.7rem]">
                      <MenuIcon className="h-full w-full"/>
                    </div>
                    <div className="flex justify-end items-end text-gray-100 
                      hover:text-gray-200 hover:scale-[1.05] transition duration-500 h-[1.7rem] w-[1.7rem]">
                      <ShoppingCart className="h-full w-full"/>
                    </div>
                  </div>
                  <div className='relative flex flex-col z-30 h-[60vh]'>
                    <div className='h-[40%] w-full flex pb-8 p-2 justify-center'>
                      <div className='relative'>
                        <Carousel 
                          className='rounded flex justify-evenly'
                          autoPlay
                          infiniteLoop
                          showArrows={false}
                          showStatus={false}
                          showIndicators={false}
                          showThumbs={false}
                          interval={5000}>
                          <div className='rounded px-auto mx-1 flex'>
                            <Image
                              priority
                              className='rounded shadow-sm shadow-black h-[14em] w-full'
                              src={PRODUCT}
                              alt={`Tunnel Vision product image`}
                              objectFit='cover' />
                          </div>
                          <div className='rounded px-auto mx-1 flex justify-center'>
                            <Image
                              priority
                              className='rounded shadow-sm shadow-black h-[14em] w-full'
                              src={PRODUCT4}
                              alt={`Tunnel Vision product image`}
                              objectFit='cover' />
                          </div>
                          <div className='rounded px-auto mx-1 flex justify-center'>
                            <Image
                              priority
                              className='rounded shadow-sm shadow-black h-[14em] w-full'
                              src={PRODUCT}
                              alt={`Tunnel Vision product image`}
                              objectFit='cover' />
                          </div>
                          <div className='rounded px-auto mx-1 flex justify-center'>
                            <Image
                              priority
                              className='rounded shadow-sm shadow-black h-[14em] w-full'
                              src={PRODUCT4}
                              alt={`Tunnel Vision product image`}
                              objectFit='cover'/>
                          </div>
                        </Carousel>
                      </div>
                    </div>
                    <div className='absolute bottom-0 w-[25vw] px-8 pt-5'>
                      <h4 className='my-3 text-gray-100'>Tunnel Vision</h4>
                      <div className='flex'>
                        {Array(rating).fill(0).map((_, idx) => (
                          <StarIcon key={idx} suppressHydrationWarning={true} color="gold" className='h-5'/>
                        ))}
                      </div>
                      <p className=" line-clamp-2 text-xs my-2  text-gray-100">Trailing lights</p>
                      <div className='mb-5 text-gray-100'>
                        {CurrencyFormatter(88.99, { code: 'USD' })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Services;