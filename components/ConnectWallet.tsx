'use client'

import { useAccount, useConnect, useDisconnect } from 'wagmi'

export function ConnectWallet() {
  const { address, isConnected } = useAccount()
  const { connect, connectors } = useConnect()
  const { disconnect } = useDisconnect()

  if (isConnected) {
    return (
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium bg-zinc-100 px-4 py-2 rounded-full text-zinc-600">
          {address?.slice(0, 6)}...{address?.slice(-4)}
        </span>
        <button 
          onClick={() => disconnect()}
          className="border border-zinc-200 text-[#0f1c32] font-medium px-4 py-2 rounded-full hover:border-[#0f1c32] transition-colors text-sm"
        >
          Déconnexion
        </button>
      </div>
    )
  }

  return (
    <button 
      onClick={() => connect({ connector: connectors[0] })}
      className="bg-[#0f1c32] hover:bg-[#1a2d4a] text-white font-medium px-4 py-2 rounded-full transition-colors text-sm"
    >
      Connect Wallet
    </button>
  )
}