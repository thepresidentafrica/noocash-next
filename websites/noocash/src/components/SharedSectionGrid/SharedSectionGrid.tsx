import React, { FC } from 'react'
import Image from 'next/image'
import { cn } from '../utils'
export const SharedSectionGrid: FC<{title: string, descriptions: React.ReactNode, image: string, order?: string }> = ({ title, descriptions, image, order }) => {
    return (
        <div className=' min-h-1/2 space-y-6 bg-purple-100 py-8  flex justify-center  max-h-3/4'>

            <div className="text-center sm:hidden space-y-6">
                <h1 data-aos="fade-left">{title} </h1>
                <Image data-aos="fade-right" width={1200} height={1200} src={image} className='my-4' alt="noocash" />
                <div className="space-y-6" data-aos="fade-up px-4">
                    {
                        descriptions
                    }
                </div>

            </div>
            <div className=" hidden max-w-7xl 2xl:max-w-screen-2xl sm:flex jutify-between items-center space-x-3">
                <Image data-aos="fade-right" width={1200} height={1200} src="/hero/vcards.png" className='my-4' alt="noocash" />
                <div className={cn(order,"f justify-center items-center flex flex-col")}>
                    <h1 data-aos="fade-left" className='text-center'>{title} </h1>
                    <div className={cn( "max-w-3xl 2xl:text-xl space-y-6 ")} data-aos="fade-up">
                        {descriptions}
                    </div>
                </div>
            </div>
        </div>
    )
}
