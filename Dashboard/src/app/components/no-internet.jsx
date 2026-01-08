'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function NoInternet() {
    const [isOnline, setIsOnline] = useState(true)

    useEffect(() => {
        const handleOnline = () => setIsOnline(true)
        const handleOffline = () => setIsOnline(false)

        window.addEventListener('online', handleOnline)
        window.addEventListener('offline', handleOffline)

        return () => {
            window.removeEventListener('online', handleOnline)
            window.removeEventListener('offline', handleOffline)
        }
    }, [])

    if (isOnline) {
        return null
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            
            <h1 className="text-xl tracking-wider font-medium text-blue-600 mt-4">No Internet Connection found !</h1>
            <p className="text- text-gray-600 mt-2">Please check your connection .</p>

            <Button className='mt-4 bg-white border border-blue-600 text-blue-600 rounded-sm flex items-center gap-x-2 hover:cursor-pointer hover:bg-white group uppercase' onClick={() => window.location.reload()}>
                Try Again
            </Button>
        </div>
    )
}

