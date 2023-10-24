'use client'
import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

interface IProps {
    children: React.ReactNode;
}
export default function Providers({ children }: IProps) {
    const [queryClient] = React.useState(() => new QueryClient())

    return (
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )
}