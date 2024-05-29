'use client'
import { useEffect } from 'react'
import * as AOS from 'aos'
import 'aos/dist/aos.css'
export const AOSConfig = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out-quad',
            once: false,
            mirror: true,
        })
    })
    return null
}
