'use client';

import Image from 'next/image';
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import React, { useRef, useState } from 'react';
import { ShoppingCart, ArrowUpRight, Home } from 'lucide-react';
import { signIn, signOut, useSession, getSession } from 'next-auth/react';

import { selectItems } from '../../slices/basketSlice';
import useIsomorphicLayoutEffect from '../hooks/morphicLayout';

import LOGO from "../../../public/images/anomar/anomar-logo2.svg";


const Menu = () => {
  const tl = useRef(null);
  const ref = useRef(null);
  const router = useRouter();
  const items = useSelector(selectItems);
  const { data: session, status } = useSession();
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  

  const dynamicLinks = (path, pageName) => {
    return (
      <div className='menuLinkItem'>
        <div className='menuLinkContainer font-inter'>
          <h1 onClick={() => router.push(path)} 
            aria-details={`Link to page ${pageName}`}
            className='menuLink cursor-pointer'>
            {pageName}
          </h1>
        </div>
      </div>
    );
  };


  useGSAP(() => {
    gsap.set(".menuLinkContainer", {y: 75});
    tl.current = gsap.timeline({paused: true})
    .to(".menuOverlay", {
      duration: 1.25,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "power4.inOut",
    })
    .to(".menuLinkContainer", {
      y: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power4.inOut",
      delay: -0.75,
    });
  }, {scope: ref});


  useIsomorphicLayoutEffect(() => {
    if (menuIsOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [menuIsOpen]);

  
  return (
    <div ref={ref} className='z-20 sm:hidden sm:invisible sm:w-0 md:hidden md:invisible md:w-0'>
      <div className="menuBar">
        <div className="relative">
          <div className="menuOpen" >
            <div className='menuOpenLogo'>
              <Image src={LOGO} alt='logo' className='w-full h-[] p-[.25rem]'/>
            </div>
          </div>
          <div className='absolute top-0 flex justify-center h-[100vh] items-center'>
            <div onClick={toggleMenu} className='menuBurger group/burgerLines cursor-pointer 
              w-[9vw] h-[50px] overflow-hidden relative flex flex-row justify-center transform ease-in'>
              <div className='w-[190px] flex flex-row relative justify-around '>          
                <div className='menuBurgerDefault h-[50px] w-[65px] absolute flex justify-evenly flex-col'>
                  <div className='menuBurgerLine num1 delay-1000 transform-none w-[65px] 
                    ease-in-out duration-[850ms] group-hover/burgerLines:border-b-[#5d1da1]'/>
                  <div className='menuBurgerLine num2 delay-1000 transform-none w-[65px] 
                    ease-in-out duration-[950ms] group-hover/burgerLines:border-b-[#5d1da1]'/>
                  <div className='menuBurgerLine num3 delay-1000 transform-none w-[31px] 
                    ease-in-out duration-[1050ms] group-hover/burgerLines:border-b-[#5d1da1]'/>
                </div>
                <div className='menuBurgerActive h-[50px] w-[65px] 
                  absolute overflow-hidden flex justify-evenly flex-col'>
                  <div className='menuBurgerLine num4 group-hover/burgerLines:translate-x-[65px] 
                    group-hover/burgerLines:border-b-[#5d1da1] transform-none ease-in-out duration-[850ms] w-[65px]'/>
                  <div className='menuBurgerLine num5 group-hover/burgerLines:translate-x-[65px] 
                    group-hover/burgerLines:border-b-[#5d1da1] transform-none ease-in-out duration-[950ms] w-[65px]'/>
                  <div className='menuBurgerLine num6 group-hover/burgerLines:translate-x-[65px] 
                    group-hover/burgerLines:border-b-[#5d1da1] transform-none ease-in-out duration-[1050ms] w-[31px]'/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="menuOverlay">
        <div className="menuOverlayBar">
          <div className="menuLogo">
            <span onClick={toggleMenu} className="flex flex-col">
              <Home className="cursor-pointer text-[#000]"/>
              <p>Close</p>
            </span>
          </div>
        </div>
        <div className="menuCloseIcon">
          <p>&#x2715;</p>
        </div>
        <div className="menuCopy">
          <div className="menuLinks">
            {dynamicLinks("/", "Intro")}
            {dynamicLinks("/gallery", "Gallery")}
            {dynamicLinks("/checkout", "Checkout")}
            {dynamicLinks("/contact", "Contact Us")}
          </div>
          <div className="menuInfo">
            <div className="menuInfoCol">
              <span className='flex flex-row items-start font-inter'>
                <a href="#" aria-details={`social media link to `}>
                  X </a><a href='/'><ArrowUpRight className='h-[1rem]'/>
                </a>
              </span>
              <span className='flex flex-row items-start font-inter'>
                <a href="#" aria-details=''>
                  Instagram </a><a href='/'><ArrowUpRight className='h-[1rem]'/>
                </a>
              </span>
              <span className='flex flex-row items-start font-inter'>
                <a href="#" aria-details=''>
                  LinkedIn </a><a href='/'><ArrowUpRight className='h-[1rem]'/>
                </a>
              </span>
            </div>
            <div className="menuInfoCol">
              <p className='font-inter'>
                myemail@gmail.com
              </p>
              <p className='font-inter'>
               555-555-5555
              </p>
            </div>
          </div>
        </div>
        <div className="menuPreview">
          <div className='text-[#000] font-inter flex items-center text-xs space-x-6 mx-[9vw] whitespace-nowrap'>
            <div onClick={status === "unauthenticated" ? signIn : signOut} className='link'>
              <p>
                {status === "authenticated" ? `Hello, ${session.user.name}` : "Sign in"}
              </p>
              <p className='font-extrabold md:text-sm'>Account & List</p>
            </div>
            <div onClick={() => session && router.push('/orders')} className='cursor-pointer link'>
              <p>Items</p>
              <p className='font-extrabold md:text-sm'>& Orders</p>
            </div>
            <div onClick={() => router.push('/checkout')}
              className='link relative flex items-center'>
              <span
                className='absolute top-0 right-0 md:right-10 h-4 w-4 
                bg-gray-900 text-center rounded-full text-[#fff] font-bold'>
                {items.length}
              </span>
              <ShoppingCart className='h-10 w-9'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Menu;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  return {
    props: {
      session
    }
  };
};