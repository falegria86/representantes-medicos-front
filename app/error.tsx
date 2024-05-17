'use client'
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div>
            <h2>¡Ha ocurrido un error!</h2>
            <Button
                onClick={
                    () => reset()
                }
            >
                Intentar nuevamente
            </Button>
        </div>
    )
}