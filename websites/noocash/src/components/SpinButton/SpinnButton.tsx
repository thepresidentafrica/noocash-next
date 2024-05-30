import React from 'react'
import { LoadingSpiner } from './LoadingSpiner'
import { ISPinProps } from './SpinButton.dto'

export const SpinnButton: React.FC<ISPinProps> = ({ loading, text }) => {
  return (
    <button type='submit' className='bg-purple-800 hover:bg-purple-700 text-white font-bold py-2 px-4 flex pace-x-4 rounded'>
      {loading ? <LoadingSpiner /> : <span>{loading ? text?.loading : text?.done}</span>}
    </button>
  )
}
