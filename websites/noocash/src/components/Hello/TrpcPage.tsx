'use client'
import React from 'react'
import { trpClient } from '@/server/trpc/client'

export const TrpcPage = () => {
    const hello = trpClient.main.hello.useQuery({name: "Mitch"})
    return (
        <div className="text-2xl rounded-md p-8 border border-dashed mx-auto max-w-3xl bg-gray-100 my-8">{
           <pre>
               {JSON.stringify({hello}, null, 2)}
           </pre>
        }</div>
    )
}
