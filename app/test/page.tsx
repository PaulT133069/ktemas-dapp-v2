'use client'

import { useAccount, useConnect, useDisconnect } from 'wagmi'

export default function TestPage() {
  const { address, isConnected } = useAccount()
  const { connect, connectors } = useConnect()
  const { disconnect } = useDisconnect()

  return (
    <div className="min-h-screen bg-white text-[#0f1c32] flex flex-col items-center justify-center gap-8">
      <h1 className="text-4xl font-bold">Page de Test Wagmi</h1>
      
      {isConnected ? (
        <div className="flex flex-col items-center gap-4">
          <p className="text-lg">Connecté : {address?.slice(0, 6)}...{address?.slice(-4)}</p>
          <button 
            onClick={() => disconnect()}
            className="border border-zinc-200 text-[#0f1c32] px-6 py-3 rounded-full hover:border-[#0f1c32] transition-colors"
          >
            Déconnexion
          </button>
        </div>
      ) : (
        <button 
          onClick={() => connect({ connector: connectors[0] })}
          className="bg-[#0f1c32] hover:bg-[#1a2d4a] text-white font-medium px-6 py-3 rounded-full transition-colors"
        >
          Connect Wallet
        </button>
      )}
    </div>
  )
}