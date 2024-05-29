import React from 'react'
import { HOW_IT_WORKS_DATA } from './HowItWorks.data'
import Image from 'next/image'
import { ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/react/20/solid'
import { ArrowLongDownIcon } from '@heroicons/react/24/outline'
/**
 * Renders the HowItWorks component, which displays a series of steps to get started with Noocash.
 *
 * @return {JSX.Element} The rendered HowItWorks component.
 */
export const HowItWorks = (): JSX.Element => {
    return (
        <div className={'bg-purple-800 min-h-1/2 space-y-6 py-16  flex justify-center  max-h-3/4'}>
            <div className="f  text-center text-white mx-auto max-w-7xl 2xl:max-w-screen-2xl">
                <h1 className='text-white'>
                    Get Started in 3 Easy Steps
                </h1>
                <p className='sm:text-2xl px-4 max-w-3xl mx-auto'>Start  using noocash today and get the benefits of a cashless experience. Our process is easy. Just follow these simple steps </p>
                <div className="w-full my-24">
                    <div className="grid grid-cols-1 sm:grid-cols-3">
                        {
                            HOW_IT_WORKS_DATA.map((item, index) => (
                                <div key={index} className="flex items-center flex-col sm:flex-row justify-center sm:px-16 px-8 space-x-6">
                                    <div className="e flex justify-center flex-col items-center">
                                        <Image width={1200} height={1200} src={item.icon} className='h-16 w-16 mb-8' alt="noocash"></Image>
                                        <h2 className='text-white text-2xl my-4 sm:text-3xl font-bols'>{item.title}</h2>
                                        <p>{item.description}</p>
                                    </div>
                                    {item.arrowIcon && <div className='my-6 sm:my-0'> 
                                        <ArrowLongRightIcon className='hidden h-8 sm:block text-white' />
                                        <ArrowLongDownIcon className='sm:hidden h-8 text-white' />
                                     </div>
                                    }

                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
