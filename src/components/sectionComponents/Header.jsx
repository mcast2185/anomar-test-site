import Link from 'next/link';
import Image from 'next/image';
import {useSelector} from 'react-redux';
import { useRouter } from 'next/navigation';
import {getSession, signIn, signOut, useSession} from 'next-auth/react';

import { selectItems } from '../../slices/basketSlice';

import ANOMAR from '../../../public/images/anomar/anomar-logo1.png';



const Header = () => {
  const {data: session, status} = useSession();
  const router = useRouter();



  return (
    <header>
      <div className='fixed flex items-center h-[12.5vh] w-[100vw] flex-row gap-2 flex-grow my-2 sm:my-auto '>
        <div className='relative h-[11vh] pl-6 w-[45%] flex items-center flex-row justify-start flex-grow sm:flex-grow-0'>
          <Image
            onClick={() => router.push('/')}
            src={ANOMAR}
            width={120}
            height={40}
            objectFit='contain'
            className='cursor-pointer h-full w-[12vw]'
          />
        </div>
        <div className='text-[#292929] flex items-center space-x-6 mr-6 whitespace-nowrap justify-end w-[60%]'>

          <div className='flex flex-row justify-start items-center w-full'>
            <Link href="/" aria-details='' className='font-Inter font-[300] tracking-wider text-[17.5px] text-[#0f0f10]'>
              <p className='px-7'>Home</p>
            </Link>
            <Link href="/" aria-details='' className='font-Inter font-[300] tracking-wider text-[17.5px] text-[#0f0f10] '>
              <p className='px-7'>About</p>
            </Link>
            <Link href="/" aria-details='' className='font-Inter font-[300] tracking-wider text-[17.5px] text-[#0f0f10] '>
              <p className='px-7'>Gallery</p>
            </Link>
            <Link href="/" aria-details='' className='font-Inter font-[300] tracking-wider text-[17.5px] text-[#0f0f10] '>
              <p className='px-7'>Contact Us</p>
            </Link>
          </div>

          <div className='flex justify-end items-center flex-row w-56'>
          
            <div onClick={status === "unauthenticated" ? signIn : signOut} className='link font-Inter font-[300] tracking-wider text-[14px] text-[#0f0f10] px-3'>
              <p>
                {status === "authenticated" ? `Hello, ${session.user.name}`: "Sign in"}
              </p>
              <p className='font-medium md:text-sm'>Account & List</p>
            </div>
            <div onClick={() => session && router.push('/orders')} className='cursor-pointer link px-3 font-Inter font-[300] tracking-wider text-[14px] text-[#0f0f10]'>
              <p>Items</p>
              <p className='font-medium md:text-sm'>& Orders</p>
            </div>
          </div>

        </div>
      </div> 
    </header>
  );
};

export default Header;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  return {
    props: {
      session
    }
  };
};