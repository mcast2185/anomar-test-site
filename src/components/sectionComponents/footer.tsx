import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import Logo from "../../../public/images/Logo.svg";


const Footer = () => {
  const router = useRouter();
  const newsletterWarning = {string: `*By signing up you consent to receiving marketing messages 
    from Good Juju at this email address and phone number (optional). Discount not applicable 
    on subscriptions or bundles and cannot be combined with other offers. Msg & data rates may apply.
    Msg frequency varies. You can opt out at any time. Email and us ask us about our View our Privacy 
    Policy and Terms of Service. Privacy Policy & Terms.`}

    
  const dynamicLink = (route: string, linkText: string) => {
    return (
      <div onClick={() => router.push(route)}>
        <p className='p-5 no-underline cursor-pointer text-slate-100 font'>
          {linkText}
        </p>
      </div>
    );
  };

  return (
    <div className="flex flex-col justify-center items-center w-[100vw]">
      <div className="relative h-[14rem] sm:h-[8rem] py-auto 
        w-[100vw] border-t-slate-200 border-t-2 bg-[#0f0f10]" />
        <div className='absolute flex justify-center 
          items-center flex-col mt-[1vh] mr-[9vw] sm:mr-0'>
          <div className='image-container'>
            <Image 
              className='h-[125px] w-[135px]' 
              alt="design-logo" 
              src={Logo}/>
          </div>
          <div className='flex flex-row'>
            <a aria-details='Home page link'>{dynamicLink("/", "Home")}</a>
            <a aria-details='About page link'>{dynamicLink("/about", "About")}</a>
            <a aria-details='Contact page link'>{dynamicLink("/contact", "Contact")}</a>
          </div>
          <div className="text-slate-100">
            <p className="font-extralight mt-6px p-0">
              &copy; 2024 Design &#124; all rights reserved
            </p>
          </div>
        </div>
    </div>
  );
};

export default Footer;