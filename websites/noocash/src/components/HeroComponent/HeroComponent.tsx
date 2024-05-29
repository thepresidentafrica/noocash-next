import React from 'react';
import Image from 'next/image';
export const HeroComponent = () => {
  return (
    <div className="bg-purple-50 min-h-screen flex flex-col items-center justify-center py-12">
      <div className=" flex flex-col items-center text-center mb-12 px-3">
        <h1 className="text-3xl md:text-5xl font-bold text-purple-900 mb-4">
          Create QR Code to Send and Receive Money Easily
        </h1>
        <p className="text-lg md:text-xl text-gray-700">
          Send and receive money easily, pay bills, create QR Codes to receive payments, and also reward other users.
        </p>
      </div>
      <div className=" order-first sm:order-last flex px-4 flex-col md:flex-row items-center justify-center">
        <Image  width={300} height={300} src="/hero/hero.png" alt="Scandapay App" className="max-w-xs md:max-w-md mb-6 md:mb-0" />
        <div className="sm:flex hidden justify-center items-center ">
          <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="">
            <Image  width={1200} height={1200} src="/hero/google.png" alt="Get it on Google Play" className="h-12" />
          </a>
          <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
            <Image  width={1200} height={1200} src="/hero/apple.png" alt="Download on the App Store" className="h-12" />
          </a>
        </div>
      </div>
    </div>
  );
};

