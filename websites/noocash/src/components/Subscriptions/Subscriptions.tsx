import React from 'react'

export const Subscriptions = () => {
  return (
    <section>
        <div className=' min-h-1/2 space-y-6 py-16 flex justify-center items-center max-h-3/4'>
            <div className="f max-w-3xl justify-center items-center flex flex-col">
            <h1 className='text-center'>Subscribe to get updates</h1>
            <p className=''>Would you like us to send you regular updates about product features, promotions, and security updates? input your email address below, and we’ll make sure that we keep you informed</p>
            <form className='flex space-y-6 w-full'>
                <div className="space-y-6 flex-1"><label htmlFor=""></label>
                <input type="text" className='border-l focus:outline-none outline-none ring-0 focus:ring-0 border-t border-b rounded-tl rounded-bl  w-full border-[#163a59] p-3' placeholder='Enter email address' />
                </div>
                <button type="submit" className='bg-[#163a59] hover:bg-[#163a59] text-white border font-bold py-2 text-lg px-4 rounded-r'>Subscribe</button>
            </form>
            </div>
        </div>
    </section>
  )
}
