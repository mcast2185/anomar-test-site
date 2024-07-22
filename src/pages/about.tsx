'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { MenuIcon, ShoppingCart } from 'lucide-react';

import NEBULA from '../..//public/images/nebula.png';
import DISCOVER from '../../public/images/anomar/discover.svg';
import COVER from '../../public/images/anomar/Web2/tjthree.jpg';
import PRODUCT2 from '../../public/images/anomar/Logo/tjseven.jpg';
import PRODUCT4 from '../../public/images/anomar/Prints/tjnine.jpg';
import PRODUCT3 from '../../public/images/anomar/Prints/tjeight.jpg';

import styles from "../styles/homecard.module.scss";


const About = () => {
  const ref = useRef(null);



  return (
    // <div ref={ref} id="about" className="relative min-h-screen w-[100vw] h-[110vh]  sm:mb-0 sm:h-[120vh] pr-[19vw] px-[10vw]">
    <div ref={ref} id="about" className="relative min-h-screen w-[100vw] h-[150vh]  sm:mb-0 sm:px-[10vw] pr-[20vw] px-[10vw]">
      <Image id="about-background" className="absolute top-0 left-0 w-[100vw] h-[150vh] opacity-[.50] z-0" src={NEBULA} alt="" />
        {/* <div className='relative mt-[10vh] sm:mb-0 h-[110vh] w-full bg-[#FAFDFD] mx-auto flex flex-col justify-evenly sm:pt-8'> */}
        <div className='relative pt-[10vh] sm:mb-0 h-[150vh] sm:h-[75%] w-[70vw] bg-[#FAFDFD] mx-auto flex flex-col justify-evenly sm:pt-8'>
          <div className=' w-full h-full lg:mx-auto sm:px-0 sm:mb-[4vh] flex flex-col justify-center leading-[9rem] sm:scale-[.95]'>
          {/* <div className='h-[25vh] w-full px-[3.5rem] sm:px-0 mb-[8vh] sm:mb-[4vh] flex flex-col leading-[9rem] sm:scale-[.95]'> */}
            <div className='sm:h-[5vh] h-[25vh] sm:leading-[1] mt-[5vh] cursor-default flex flex-col justify-start items-center lg:w-[100%] lg:tracking-[.19rem] lg:leading-[9rem]'>
              <p className="font-PoiretOne text-[12.5px] tracking-widest font-bold">ANOMAR</p>
              <div ref={ref} style={{ position: 'relative', flexDirection: 'column' }}>

                {/* gsap wrapper */}
                  <div className=' relative flex flex-row h-full w-full tracking-[1.55] pr-[25px] sm:pr-0'>
                    <h1 className=' font-Imbue sm:text-[1.85rem] md:text-[5rem] text-[2.75rem] font-[500] italic'> 
                      AESTHETIC
                    </h1>
                    <div>
                      <span className="flex flex-row h-full items-end px-4 text-[2.2rem] decoration-slate-200 tracking-[1] hover:scale-[1.1]
                        decoration-2 underline-offset-[6px] font-PinyonScript font-thin sm:text-[1.2rem] md:text-[1.8rem] text-[--yellow]">
                        {" "}Driven{" "}
                      </span>
                    </div>
                    <h1 className=' font-Imbue text-[2.75rem] sm:text-[1.85rem] md:text-[2rem] font-[500] italic'> 
                      RESULTS 
                    </h1>
                  </div>
              {/* gsap wrapper */}

              </div>
            </div>
          </div>
        <div className='relative w-full h-[70%] py-[5vh] sm:py-0 sm:my-0 flex flex-col'>
          <div className='w-full h-[60%] flex flex-row sm:flex-col sm:mx-2 sm:px-auto sm:justify-center pt-2'>

            <div className="flex flex-col w-[49.5%] h-full sm:hidden sm:h-0 sm:w-0 justify-start">

              <div className='cursor-default pl-[10rem] sm:px-auto pr-[2rem] sm:w-full sm:py-1 flex sm:px-auto'>

                <p className="font-PoiretOne text-[12.5px] tracking-wide font-medium text-gray-500 w-full">
                  Images carefully photographed in real-time and crafted into artful depictions of light varying through <span className='font-bold text-slate-800'> thoughtful perspective.</span>
                </p>
              </div>
              <div className='h-full w-full flex sm:hidden sm:h-0 sm:w-0 mb-4 scale-[.5]'>
              <div id="image-card" className="w-[35vw] h-[63vh] sm:w-[70vw] border-sm border-[#0f0f10] 
                rounded-full flex justify-center bg-gray-100 relative overflow-auto ">
                <div className="h-[70vh] w-[23.5vw] sm:w-[70vw] bg-gray-300  relative flex flex-col justify-center">
                  <div className="h-[45vh] w-full bg-[#5d1da1] rounded-bl-[2rem] rounded-t-[2rem]  top-0 overflow-visible" />
                  <div className="h-[25vh] w-[23.5vw] sm:w-[70vw] object-contain bg-gray-300 
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
                      <div className='w-full h-[2px] bg-gray-800 opacity-30' />
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
              <div className="w-[35vw] sm:w-[85vw] h-[63vh] border-sm border-[#0f0f10] rounded-full flex justify-center absolute ">
                <div className="h-[70vh] w-[23.5vw] sm:w-[70vw] relative border-x-1  drop-shadow-md 
                  border-slate-800 border-opacity-30 border-r-none flex flex-col justify-center overflow-inherit">
                  <div className="h-[45vh] w-full bg-[#5d1da1] shadow-md shadow-[#0f0f10] object-contain 
                    rounded-bl-[2rem] rounded-t-[.5rem] absolute top-0 left-0 overflow-visible flex flex-col">
                    <div className="px-6 sm:px-1 py-4 flex flex-row w-[23.5vw] sm:w-[70vw] relative justify-between z-[20]">
                      <div className="text-slate-200 hover:text-gray-400 justify-start 
                      flex hover:scale-[1.05] transition duration-500 h-[1.7rem] w-[1.7rem]">
                        <MenuIcon className="h-full w-full" />
                      </div>
                      <div className="flex justify-end items-end text-slate-200 
                      hover:text-gray-400 hover:scale-[1.05] transition duration-500 h-[1.7rem] w-[1.7rem]">
                        <ShoppingCart className="h-full w-full" />
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
                                src={COVER}
                                alt={`Tunnel Vision product image`}
                                objectFit='cover' />
                            </div>
                            <div className='rounded px-auto mx-1 flex justify-center'>
                              <Image
                                priority
                                className='rounded shadow-sm shadow-black h-[14em] w-full'
                                src={PRODUCT2}
                                alt={`Tunnel Vision product image`}
                                objectFit='cover' />
                            </div>
                            <div className='rounded px-auto mx-1 flex justify-center'>
                              <Image
                                priority
                                className='rounded shadow-sm shadow-black h-[14em] w-full'
                                src={PRODUCT3}
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
                          </Carousel>
                        </div>
                      </div>
                      <div className='absolute bottom-0 w-[25vw] px-8 pt-5'>
                        <h3 className='my-3 text-slate-200'>Tunnel Vision</h3>
                        <p className=" line-clamp-2 text-xs my-2  text-slate-200">Trailing lights</p>
                        {/* <div className='mb-5 text-slate-200'>
                          {CurrencyFormatter(88.99, { code: 'USD' })}
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>


            <div className='bg-[#6b7280] h-full pt-[25%] w-[1px] sm:hidden sm:h-0 sm:w-0 '>
             
            </div>

            <div className=' w-[49.5%]'>
             

              <div className='cursor-default px-4 sm:px-0 sm:w-full sm:py-1 flex sm:px-auto flex-col justify-start sm:justify-center sm:items-center'>
                <p className="font-PoiretOne text-[12.5px] tracking-wide font-medium text-gray-500 w-[80%]">
                  We are a design company focused on <span className="underline decoration-[--yellow]">providing</span> your
                  business a unique, artistic allure. The art is inspired by the explored manipulation of light, 
                  capturing its fluidity on a sleek metallic canvas.  
                </p>
                <p className="font-PoiretOne text-[12.5px] tracking-wide font-medium text-gray-500 w-[80%] pt-[20px]">
                  It is through a formless display of light and color that these collective images establish a wondrous presence in the space they occupy.
                </p>
                <p className="font-PoiretOne text-[12.5px] tracking-wide font-medium text-gray-500 w-[80%] pt-[20px] h-full mt-[50%] sm:mt-5">
                  Each item is proudly created to ignite a sense of wonder, similar to our<span className='font-bold text-slate-800'> journey through imagination.</span> 
                </p>
              </div>

              {/* ul flex column */}
            </div>

            {/* <ul className='cursor-default px-[7%] flex flex-col justify-start items-start '>
              <div className="group/list1 h-[7rem] relative flex flex-row justify-evenly items-center sm:px-auto">
                <p>·</p>
                <li className='text-5xl sm:text-3xl px-6 z-10 font-PoiretOne py-5 hover:scale-[1.1] 
                  hover:underline hover:decoration-[#5d1da1] hover:decoration-1 ease-out transition duration-500'>
                  Ambiance
                </li>
                <p className='group-hover/list1:opacity-20 opacity-0 transition ease-out 
                  duration-300 z-0 text-[5.5rem] sm:text-[4rem] left-6 bottom-5 font-Oswald italic absolute'>
                  Ambiance
                </p>
              </div>
              <div className="group/list2 h-[7rem] relative flex flex-row justify-evenly items-center sm:px-auto">
                <p>·</p>
                <li className='text-5xl sm:text-3xl px-6 z-10 font-PoiretOne py-5 hover:scale-[1.1] 
                  hover:underline hover:decoration-[#5d1da1] hover:decoration-1 ease-out transition duration-500'>
                  Aesthetics
                </li>
                <p className='group-hover/list2:opacity-20 opacity-0 transition ease-out 
                  duration-300 z-0 text-[5.5rem] sm:text-[4rem] left-6 bottom-5 font-Oswald italic absolute'>
                  Aesthetics
                </p>
              </div>
              <div className="group/list3 h-[7rem] relative flex flex-row justify-evenly items-center sm:px-auto">
                <p>·</p>
                <li className='text-5xl sm:text-3xl px-6 z-10 font-PoiretOne py-5 hover:scale-[1.1] 
                  hover:underline hover:decoration-[#5d1da1] hover:decoration-1 ease-out transition duration-500'>
                  Modernizing
                </li>
                <p className='group-hover/list3:opacity-20 opacity-0 transition ease-out 
                  duration-300 z-0 text-[5.5rem] sm:text-[4rem] left-6 bottom-5 font-Oswald italic absolute'>
                  Modernizing
                </p>
              </div>
              <div className="group/list4 h-[7rem] relative flex flex-row justify-evenly items-center sm:px-auto">
                <p>·</p>
                <li className='text-5xl sm:text-3xl px-6 z-10 font-PoiretOne py-5 hover:scale-[1.1] 
                  hover:underline hover:decoration-[#5d1da1] hover:decoration-1 ease-out transition duration-500'>
                  Reinvent
                </li>
                <p className='group-hover/list4:opacity-20 opacity-0 transition ease-out 
                  duration-300 z-0 text-[5.5rem] sm:text-[4rem] left-6 bottom-5 font-Oswald italic absolute'>
                  Reinvent
                </p>
              </div>
            </ul> */}
          </div>
          <div className='w-full flex justify-center'>
            <button type="button" className='w-[210px] h-[50px] flex justify-center items-center font-PoiretOne text-[12.5px] tracking-widest font-bold bg-[#5d1da1] text-slate-200'>
              <Link href="/gallery" aria-details='gallery'>Explore</Link>
            </button>
          </div>
          <div>
            <div className='w-full font-PoiretOne text-[12.5px] tracking-widest font-bold'>
            <div className={styles.homeAboutWorkshop}>
              <Image alt="" src={DISCOVER} className="transform will-change-transform hover:scale-[.95] ease-out duration-[750ms] py-[20px]"/>
              <span className={styles.homeAboutWorkshopLeft}>Artistic</span>
              <span className={styles.homeAboutWorkshopRight}>Perspective</span>
            </div>
           
          </div>
          </div>

          
        </div>
        <div className='py-[5vh] sm:pt-0 w-full sm:pb-1 '>
          <div className='flex flex-row items-center justify-end '>
            <h1 className="text-[2.5rem] sm:text-xl cursor-default font-PoiretOne text-[--yellow] sm:px-2"> 
              Design
            </h1> 
            <div className='w-[9rem] sm:w-20 h-[3px] sm:h-[2px] bg-[--yellow] mt-[.5rem] ml-[2rem] sm:ml-0 sm:mr-0 sm:p-0'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;