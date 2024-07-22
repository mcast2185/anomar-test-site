"use client";

import { gsap } from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";


export const ParallaxScrollPage = ({children, className}) => {
  const container = useRef(null);


  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      const tl =gsap.timeline({
        scrollTrigger: {
          target: container.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
      tl.to( container.current, {y: -50}, 0);
    });
    

    return () => context.revert();

  }, []);

  return (
    <div ref={container} className="h-[100vh] w-[100vw] bg-none">
      {children}
    </div>
  );
};