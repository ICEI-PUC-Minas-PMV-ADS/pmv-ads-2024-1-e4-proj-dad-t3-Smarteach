'use client'
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"

const queryClient = new QueryClient();

export const ReactQueryProvider = ({ children }) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}