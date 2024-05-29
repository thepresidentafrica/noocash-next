import React from 'react'
import { IKeyFeaturesProps } from './KeyFeatures.dto'
import { KEY_FEATURES_DATA } from './KeyFeatures.data'

export const KeyFeatures = () => {
    const features: IKeyFeaturesProps = KEY_FEATURES_DATA
    return (
        <div className='bg-white min-h-1/2 space-y-4 flex justify-center items-center max-h-3/4'>
            <div className="e space-y-4 text-center px-4">
                <h1 data-aos="fade-left">{features.title}</h1>
                <p data-aos="fade-right ">{features.description}</p>
            </div>
        </div>
    )
}
