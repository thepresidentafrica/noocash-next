'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { SpinnButton } from '../SpinButton'
import { sendSubscriptionEmail } from '@/server/actions/mailAction'
/**
 * Renders a component for subscribing to updates.
 *
 * @return {JSX.Element} The rendered component.
 */
export const Subscriptions = () => {
    const { getValues, reset, register, formState: { errors } } = useForm()
    const [sending, setSending] = useState(false)
    const [err, setErr] = useState<string | null | any>(null)
    /**
     * Handles the form submission event.
     *
     * @param {any} e - The form submission event.
     * @return {Promise<void>} A promise that resolves when the submission is complete.
     */
    const onSubmit = async (e: any) => {
        e.preventDefault()
        setSending(true)
        try {
            const email = getValues('email')
            const sent = await sendSubscriptionEmail(email)
            sent.success && reset()
            setErr(sent?.message)
        } catch (error: any) {
            console.log(error)
            setErr(error.message)
        } finally {
            setSending(false)
        }
    }
    return (
        <section>
            <div className=' min-h-1/2 space-y-6 py-16 flex justify-center items-center max-h-3/4'>
                <div className="f max-w-3xl justify-center items-center flex flex-col">
                    <h1 className='text-center'>Subscribe to get updates</h1>
                    <p className=''>Would you like us to send you regular updates about product features, promotions, and security updates? input your email address below, and we’ll make sure that we keep you informed</p>
                    <p className='text-purple-50 text-purple-500'>{err}</p>
                    <form onSubmit={onSubmit} className='flex space-y-6 w-full'>
                        <div className="space-y-6 flex-1"><label htmlFor="email">Email</label>
                            <input {...register('email', { required: "please enter your email" })} type="text" id='email' name='email' className='border-l focus:outline-none outline-none ring-0 focus:ring-0 border-t border-b rounded-tl rounded-bl  w-full border-[#163a59] p-3' placeholder='Enter email address' />
                        </div>
                        <SpinnButton loading={sending} text={{ loading: 'processing...', done: 'Subscribe' }} />
                    </form>
                </div>
            </div>
        </section>
    )
}
