'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { SpinnButton } from '../SpinButton'
export const Subscriptions = () => {
    const { getValues, reset, register, formState: { errors } } = useForm()
    const [sending, setSending] = useState(false)
    const onSubmit = (e: any) => {
        e.preventDefault()
        setSending(true)
        try {
            reset()
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <section>
            <div className=' min-h-1/2 space-y-6 py-16 flex justify-center items-center max-h-3/4'>
                <div className="f max-w-3xl justify-center items-center flex flex-col">
                    <h1 className='text-center'>Subscribe to get updates</h1>
                    <p className=''>Would you like us to send you regular updates about product features, promotions, and security updates? input your email address below, and we’ll make sure that we keep you informed</p>
                    <pre>
                        {JSON.stringify({errors}, null, 2)}
                    </pre>
                    <form onSubmit={onSubmit} className='flex space-y-6 w-full'>
                        <div className="space-y-6 flex-1"><label htmlFor="email"></label>
                            <input {...register('email', { required: "please enter your email" })} type="text" id='email' name='email' className='border-l focus:outline-none outline-none ring-0 focus:ring-0 border-t border-b rounded-tl rounded-bl  w-full border-[#163a59] p-3' placeholder='Enter email address' />
                        </div>
                        <SpinnButton loading={sending} text={{ loading: 'processing...', done: 'Subscribe' }} />
                    </form>
                </div>
            </div>
        </section>
    )
}
