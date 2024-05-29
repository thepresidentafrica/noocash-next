import React from 'react'
import { HOW_IT_WORKS_DATA } from './HowItWorks.data'
import Image from 'next/image'
export const HowItWorks = () => {
    return (
        <div className={' bg-purple-800 min-h-1/2 space-y-6 py-16  flex justify-center  max-h-3/4'}>
            <div className="f  text-center text-white mx-auto max-w-7xl 2xl:max-w-screen-2xl">
                <h1 className='text-white'>
                    Get Started in 3 Easy Steps
                </h1>
                <p className='sm:text-xl px-4 max-w-3xl mx-auto'>Start  using noocash today and get the benefits of a cashless experience. Our process is easy. Just follow these simple steps </p>
                <div className="w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-3">
                        {
                            HOW_IT_WORKS_DATA.map((item, index) => (
                                <div key={index} className="flex items-center justify-center px-16 space-x-6">
                                    <div className="e flex justify-center flex-col items-center">
                                        <Image width={1200} height={1200} src={item.icon} className='h-16 w-16 mb-4' alt="noocash"></Image>
                                        <h2 className='text-white text-3xl font-bols'>{item.title}</h2>
                                        <p>{item.description}</p>
                                    </div>
                                    {item.arrowIcon && <Image width={1200} height={1200} src={item.arrowIcon} className='h-8 w-8' alt="noocash"></Image>}

                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
