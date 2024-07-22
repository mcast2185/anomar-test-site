'use client';

import { Provider } from "react-redux";
import {SessionProvider}  from "next-auth/react";
import { motion, useScroll, useSpring } from "framer-motion";

import Home from "@/pages/home";
import { store } from "../store";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import Services from "@/pages/services";
import Preloader from '../../components/Preloader';
import Menu from '../../components/sectionComponents/menu';

import SmoothScrolling from '../../components/functionality/SmoothScrolling';

export default function index({ session }) {

  // const [isLoaded, setIsLoaded] = useState(false);
  // const [isFirstLoad, setIsFirstLoad] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });



  // useEffect(() => {
  //   const preloaderDisplayed = localStorage.getItem('preloaderDisplayed');
  //   if (!preloaderDisplayed) {
  //     setIsFirstLoad(true);
  //   } else {
  //     setIsLoaded(true);
  //   }
  // }, []);

  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        {(localStorage.getItem("preloaded")) && <Preloader />}
        <div className='index flex flex-col overflow-x-hidden w-[100vw] sm:w-full p-0 m-0'>
          <motion.div className="progress-bar" style={{ scaleX }} />
          <Menu/>
          <SmoothScrolling>
            <Home/>
            <About/>
            {/* <ScrollContent/> */}
            <Services/>
            <Contact/>
          </SmoothScrolling>
        </div>
       </Provider>
    </SessionProvider>
  );
};