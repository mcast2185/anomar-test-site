"use client";

import { gsap } from "gsap";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";



const Preloader = () => {
  gsap.registerPlugin(useGSAP);
  const [isLoaded, setIsLoaded] = useState(false);
  const {contextSafe} = useGSAP();


  const preload = contextSafe(() => {
    const startLoader = () => {
      let currentValue = 0;
      const counterElement = document.querySelector(".counter");
      const updateCounter = () => {
        if (currentValue === 100) {
          return;
        }

        currentValue += Math.floor(Math.random() * 10) + 1;

        if (currentValue > 100) {
          currentValue = 100;
        }

        counterElement !== undefined ? 
          counterElement.textContent = currentValue + "%" : 
          document.querySelector(".counter").textContent = currentValue + "%";

        const delay = Math.floor(Math.random() * 200) + 50;

        setTimeout(updateCounter, delay);
      };

      updateCounter();
    };

    startLoader();


    gsap.to(".preload-wrapper", .1, {
      ease: "power4.inOut",
      overflowY: "hidden",
      overflow: "hidden",
      position: "absolute"
    });

    gsap.to(".background-bars", .75, {
      zIndex: 1000,
      ease: "power4.inOut",
      delay: .5,
    });

    gsap.from(".circles", 1.75, {
      top: "-50vh",
      transform: "translateY(0)",
      ease: "elastic.out",
      delay: .5,
    });

    gsap.to(".circle-inner", 1, {
      width: "75px",
      height: "75px",
      ease: "power4.inOut",
      delay: 2,
    });

    gsap.to(".circle-inner-rotator", 1, {
      scale: 1,
      ease: "power4.inOut",
      delay: 2.5,
    });

    gsap.to(".circles", 1.5, {
      rotation: 360,
      ease: "power4.inOut",
      delay: 3
    });

    gsap.to(".block", 0.75, {
      display: "block",
      height: "200px",
      ease: "power4.inOut",
      delay: 4
    });

    gsap.to(".block", 0.8, {
      ease: "power4.inOut",
      delay: 4.1
    });

    gsap.to(".loader", 2.5, {
      zIndex: 1500,
      ease: "power4.inOut",
      delay: 3.5,
    });

    gsap.fromTo(".container-background", {
      duration: 2.5,
      left: "100vw",
      color: "#878686",
      scale: .65,
      ease: "power4.inOut",
      delay: 4.25
    }, {
      duration: 1,
      left: "50vw",
      scale: .65,
      transform: "translateX(-50vw)",
      ease: "power4.inOut",
      delay: 4.25
    });

    gsap.to(".container", 2.5, {
      opacity: 1,
      color: "#505050",
      ease: "power4.inOut",
      delay: 5
    });

    gsap.to(".bar", 1.75, {
      delay: 7,
      opacity: "0",
 
      ease: "power4.inOut"
    });

    gsap.to(".container-background", 2.5, {
      left: "50vw",
      border: "4px solid #d0b20b",
      opacity: 1,
      transform: "translateX(-50vw) scaleY(0)",
      ease: "power4.inOut",
      delay: 5.5
    });

    gsap.to(".loader", 1.5, {
      opacity: 0,
      ease: "power4.inOut",
      delay: 6,
    });
    
    gsap.to(".loader", 1, {
      display: "none",
      height: "0px",
      width: "0px",
      opacity: 0,
      ease: "power4.inOut",
      delay: 7.5,
    });
        
    gsap.to(".container-background", 1.75, {
      left: "50vw",
      display: "none",
      opacity: 1,
      transform: "translateX(-50vw) scaleY(0)",
      ease: "power4.inOut",
      delay: 7.25
    });

    gsap.to(".background-bars", 1.75, {
      delay: 8.7,
      height: "0px",
      display: "none",
      width: "0px",
      zIndex: 0,
      ease: "power4.inOut"
    });
      
    gsap.to(".container", 2, {
      display: "none",
      color: "#fff",
      opacity: 1,
      scale: 0,
      ease: "power4.inOut",
      delay: 7.25
    });
    gsap.to(".preload-wrapper", .1, {
      ease: "power4.inOut",
      delay: 8,
      display: "block"
    });

    setIsLoaded(true);
    localStorage.setItem("preloaded", "once");
  });



  useGSAP(() => {

    
    if (localStorage.getItem("preloaded") == null) {
      preload();
    } 
    else if(localStorage.getItem("preloaded") ==! null) {
      window.addEventListener("loadstart", event => {
        document.querySelector('.preload-wrapper').remove();
      })

      window.removeEventListener("loadstart");
    }
    
    window.addEventListener("close", event => {
        localStorage.clear();
    })

    window.closed ? localStorage.clear() : console.log(localStorage);
  }, [preload]);
  

  
  // localStorage.getItem("preloaded") ==! null &&
  return (
    <div className="preload-wrapper">
      <div>
        <div className='background-bars absolute z-[4000] w-[100vw] h-[100vh] bg-none flex'>
          <div className='bar bg-[#181818] w-[14.29vw] h-[105vh]'/>
          <div className='bar bg-[#181818] w-[14.29vw] h-[105vh]'/>
          <div className='bar bg-[#181818] w-[14.29vw] h-[105vh]'/>
          <div className='bar bg-[#181818] w-[14.29vw] h-[105vh]'/>
          <div className='bar bg-[#181818] w-[14.29vw] h-[105vh]'/>
          <div className='bar bg-[#181818] w-[14.29vw] h-[105vh]'/>
          <div className='bar bg-[#181818] w-[14.29vw] h-[105vh]'/>
        </div>
        <div className="loader">
          <h1 className='counter'>0</h1>
          <div className='site-teaser'>
            <h1 className="text-[8rem] sm:text-2xl">
              Loading
            </h1>
          </div>
          <div className="circles">
            <div className="circle circle-outer"></div>
            <div className="circle circle-inner"></div>
            <div className="circle-inner-rotator"></div>
            <div className="block"></div>
          </div>
        </div>
      </div>
      <div className="container sm:scale-[.8]">
        <h1 className="px-auto">We<span>l</span>come</h1>
      </div>
      <div className="container-background sm:hidden sm:w-0 sm:h-0 "/>
    </div>
  );
};

export default Preloader;