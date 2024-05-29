import React from 'react';
import Image from 'next/image';
export const HeroComponent = () => {
  return (
    <div className=" max-w-7xl mx-auto 2xl:max-w-screen-2xl min-h-screen flex flex-col sm:flex-row items-center justify-center py-12">
      <div className=" max-w-3xl flex flex-col items-center text-center mb-12 px-3">
        <Image data-aos="fade-up" width={1200} height={1200} src="/logo.svg" alt="noo.cash" className=' hidden sm:block animate-pulse w-1/2'></Image>
        <h1 data-aos="fade-up" className="">
          {"Let's"} make your payment experience easier.
        </h1>
        <p data-aos="fade-up" className="text-lg md:text-xl text-gray-700">
          Send and receive money easily, pay bills, create QR Codes to receive payments, and also reward other users.
        </p>
        <div className="sm:flex hidden sm:p-8 justify-center items-center ">
          <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="">
            <Image  width={1200} height={1200} src="/hero/google.png" alt="Get it on Google Play" className="w-3/4" />
          </a>
          <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
            <Image  width={1200} height={1200} src="/hero/apple.png" alt="Download on the App Store" className="w-3/4" />
          </a>
        </div>
      </div>
      <div className=" order-first sm:order-last flex px-4 flex-col md:flex-row items-center justify-center">
      <Image data-aos="fade-up"  width={1200} height={1200} src="/logo.svg" alt="noo.cash" className='sm:hidden animate-pulse w-1/2'></Image>
        
        <Image data-aos="fade-left" data-aos-delay="500"  width={1200} height={1200} src="/hero/hero.png" alt="noocash" className="mb-6 md:mb-0" />
       
      </div>
    </div>
  );
};

