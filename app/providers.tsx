'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import { config } from '../wagmi'
import { useState } from 'react' // <-- IMPORTANT

export function Providers({ children }: { children: React.ReactNode }) {
  // ✅ Créer le QueryClient DANS le composant avec useState
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <WagmiProvider config={config}>
        {children}
      </WagmiProvider>
    </QueryClientProvider>
  )
}