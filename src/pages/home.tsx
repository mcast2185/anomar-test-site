'use client';

import gsap from "gsap";
import Image from "next/image";
import dynamic from "next/dynamic";
import React,{ useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ArrowDown } from "lucide-react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import DISCOVER from '../../public/images/anomar/discover.svg';
import GSAPMagnet from '../components/functionality/GSAPMagnet';

import styles from "../../src/styles/homecard.module.scss";

const DynamicBackGround = dynamic(() => import("../components/sectionComponents/threeScene"), {
  loading: () => <></>
});





export default function Home() {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  const titleRef = useRef(null);
  const targetRef = useRef(null);



  useGSAP(()=> {
    console.log(targetRef.current);
    const preloaderDisplayed = localStorage.getItem('preloaderDisplayed');

    if (!preloaderDisplayed) {
      gsap.to(titleRef.current, {
        duration: .85,
        x: 30,
        opacity: 0,
        ease: "power2.out",
      })

      gsap.to(titleRef.current, {
        delay: 8.25,
        duration: .85,
        x: 0,
        opacity: 1,
        ease: "power2.in",
      })

      gsap.to(targetRef.current, {
        scrollTrigger: {
          trigger: targetRef.current,
          start: "bottom 60%",
          end: "bottom 60%",
          scrub: true,
        },
        opacity: 0,
        duration: .2,
      })
    } 
    else {
      gsap.set(titleRef.current, {
        opacity: 0,
        ease: "power2.out",
      })
      gsap.to(titleRef.current, {
        duration: .95,
        x: 30,
        opacity: 0,
        ease: "power2.out",
      })

      gsap.to(titleRef.current, {
        delay: 1.25,
        duration: .95,
        x: 0,
        opacity: 1,
        ease: "power2.in",
      })

      gsap.to(targetRef.current, {
        scrollTrigger: {
          trigger: targetRef.current,
          start: "bottom 60%",
          end: "bottom 60%",
          scrub: true,
        },
        opacity: 0,
        duration: .2,
      })
    }
  })



  return (
    <main className=" flex min-h-screen h-[100vh] w-[100vw] pb-[5vh] scroll-smooth">
      <DynamicBackGround/>
      <div className='flex flex-col h-[100vh] w-[100vw] sm:pt-8'>
        <div className='h-[10%] w-full pt-[1rem]'>
          <div className='relative flex flex-row items-center justify-end'>
            <p className="text-[2.5rem] sm:text-xl cursor-default font-PoiretOne text-[--yellow] sm:px-2"> 
              Preamble
            </p> 
            <div className='w-[9rem] sm:w-20 h-[3px] sm:h-[2px] bg-[--yellow] 
              mt-[.5rem] ml-[2rem] sm:ml-0 sm:mr-0 sm:p-0 mr-[9vw]'/>
          </div>
        </div>
        <div className='h-[50%] space-x-[1rem] px-[4.5rem] sm:px-0 sm:ml-0 sm:h-[50%] sm:mb-5 flex leading-[.85]
          sm:flex sm:flex-col md:px-[3rem] mt-[6rem] sm:mt-[1rem] sm:w-full sm:scale-1 scale-[.75]'>
          <div className='cursor-default flex flex-row justify-start items-center sm:pb-10 sm:leading-[1] leading-[.75] tracking-[1rem]
             h-full sm:flex sm:flex-col sm:px-4 sm:justify-center md:tracking-[.19rem] sm:tracking-[.19rem] transform scale-x-[1.1] scale-y-[.8]'>
            <div ref={titleRef} style={{ position: 'relative' }}>

                <h1 className='transform scale-y-[1] text-gray-200 font-Imbue transition z-0 tracking-[1.55rem] scale-x-[1.1]
                  sm:text-[3.5rem] md:text-[4.5rem] text-[11rem] font-bold duration-300 italic'>
                  DESIGNING <br />
                </h1>

              <div className="transform scale-x-[1] scale-y-[1]">
                <h1 className='mt-[1.55rem] text-gray-200 font-Imbue transition z-0 tracking-[1.55rem] decoration-[2px] border border-b-[3px_solid_rgb(229,231,235)] w-fit border-x-transparent
                  sm:text-[3.5rem] md:text-[4.5rem] text-[6.5rem] font-[400] ml-[2rem] duration-300 leading-[.75] py-1 '>
                  MODERN <br />
                </h1>

                <div className='flex flex-row h-full gap-2 items-start'>
                  <span className=" text-6xl sm:text-[1.8rem] md:text-[4.5rem] decoration-slate-200 transition
                    underline decoration-2 underline-offset-[6px] font-PinyonScript font-thin text-gray-200 duration-300 ">
                    art
                  </span>
                  <h1 className=' border-none text-[--yellow] z-0 tracking-[-.05rem] scale-y-[1.08] scale-x-[1.05] 
                    font-Imbue text-[7.5rem] sm:text-[3.3rem] md:text-[4.5rem] font-[900] italic'>
                    EXPERIENCE'S
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-row sm:flex sm:flex-col-reverse h-full w-[75%] sm:w-full 
          sm:h-[25vh] px-[4.5rem] sm:px-6 pt-[3rem] sm:pt-[0px] sm:mt-2 items-center gap-48 sm:gap-10'>
          <div className='flex-1 sm:mt-16 sm:mb-0 sm:pb-0'>
          {/* <GSAPMagnet> */}
            <div ref={targetRef} onClick={()=>{}} className='group/arrows h-[8rem] relative w-[8rem] cursor-pointer
              border border-gray-300 rounded-full flex justify-center items-center 
              transform hover:scale-90 ease-in-out duration-[2500ms] hover:border-[#5d1da1]'>
              <div className=' h-[48px] w-[40px] sm:h-[41px] sm:w-[33px] overflow-hidden flex justify-center flex-col '>
                <span>
                  <ArrowDown className="w-[40px] h-[64px] text-gray-300 ease-in-out 
                    group-hover/arrows:text-[--yellow] group-hover/arrows:translate-y-16 transform-none duration-[850ms]"/>
                  <ArrowDown className="w-[40px] h-[64px] mb-[55px] text-gray-300 
                    ease-in-out group-hover/arrows:translate-y-11 transform-none duration-700"/>
                </span>
              </div>
            </div>
          {/* </GSAPMagnet> */}
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
        
      </div>
    </main>
  );
};