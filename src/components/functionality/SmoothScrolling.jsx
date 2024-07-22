"use client";

import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import Lenis from "@studio-freight/lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis } from "@studio-freight/react-lenis";


function SmoothScrolling({ children }) {
  
  useGSAP(() => {
    const ReactLenisElement = new Lenis();
    ReactLenisElement.on("scroll", (e) => {
      console.log(e);

    });

    ReactLenisElement.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      ReactLenisElement.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

  },[]);


  return (
    <ReactLenis options={
      { lerp: 0.1, 
        duration: 1.5, 
        smoothTouch: true 
      }}
      className="pr-[8.5vw]" root >
      {children}
    </ReactLenis>
  );
};

export default SmoothScrolling;