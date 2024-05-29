import React from 'react'
import { IKeyFeaturesProps } from './KeyFeatures.dto'
import { KEY_FEATURES_DATA } from './KeyFeatures.data'
import { KeyFeaturesCard } from './KeyFeaturesCard'

export const KeyFeatures = () => {
    const features: IKeyFeaturesProps = KEY_FEATURES_DATA
    return (
        <div className='bg-white min-h-1/2 space-y-6 py-16 flex justify-center items-center max-h-3/4'>
            <div className="e space-y-4 text-center px-4">
                <div className="mx-auto max-w-3xl ">
                <h1 data-aos="fade-left  ">{features.title}</h1>
                <p data-aos="fade-right  " className='text-xl'>{features.description}</p>
                </div>
                <div className="py-6 2xl:max-w-screen-xl">
                <KeyFeaturesCard className='bg-purle-100' items={features.services} />
                </div>
            </div>
        </div>
    )
}
