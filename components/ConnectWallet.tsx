'use client'

import { useState, useEffect } from 'react'
import { useAccount, useConnect, useDisconnect } from 'wagmi'

export function ConnectWallet() {
  const [mounted, setMounted] = useState(false)
  
  // ✅ On attend que le composant soit monté côté client
  useEffect(() => {
    setMounted(true)
  }, [])

  const { address, isConnected } = useAccount()
  const { connect, connectors, error } = useConnect()
  const { disconnect } = useDisconnect()
  
  const [showMenu, setShowMenu] = useState(false)
  const [connectingId, setConnectingId] = useState<string | null>(null)

  // ✅ Si pas monté, on affiche un placeholder
  if (!mounted) {
    return (
      <div className="h-10 w-32 bg-zinc-100 animate-pulse rounded-full"></div>
    )
  }

  if (isConnected) {
    return (
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium bg-zinc-100 px-4 py-2 rounded-full text-zinc-600">
          {address?.slice(0, 6)}...{address?.slice(-4)}
        </span>
        <button 
          onClick={() => disconnect()}
          className="border border-zinc-200 text-[#0f1c32] font-medium px-6 py-2 rounded-full hover:border-[#0f1c32] transition-colors text-sm"
        >
          Déconnexion
        </button>
      </div>
    )
  }

  return (
    <div className="relative">
      <button 
        onClick={() => setShowMenu(!showMenu)}
        className="bg-[#0f1c32] hover:bg-[#1a2d4a] text-white font-medium px-6 py-2 rounded-full transition-colors text-sm"
      >
        Connect Wallet
      </button>

      {showMenu && (
        <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-zinc-100 py-2 z-50">
            {connectors
            .filter((connector) => connector.name !== 'Injected') // On retire juste "Injected"
            .map((connector) => {
            // On détermine le nom à afficher
            let displayName = connector.name;
            if (connector.name === 'Injected') displayName = 'MetaMask (Navigateur)';

            // On détermine l'icône
            let icon = null;
            if (connector.name.toLowerCase().includes('metamask') || connector.name === 'Injected') {
              icon = <img src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg" alt="MetaMask" className="w-5 h-5" />;
            } else if (connector.name.toLowerCase().includes('coinbase')) {
              icon = <img src="https://avatars.githubusercontent.com/u/1885080?s=200&v=4" alt="Coinbase" className="w-5 h-5 rounded-full" />;
            } else if (connector.name.toLowerCase().includes('walletconnect')) {
              icon = <img src="https://raw.githubusercontent.com/WalletConnect/walletconnect-assets/master/Logo/Blue%20(Default)/Logo.svg" alt="WalletConnect" className="w-5 h-5" />;
            }

            return (
              <button
                key={connector.uid}
                onClick={() => {
                  setConnectingId(connector.uid)
                  connect({ connector })
                }}
                className="w-full text-left px-4 py-2 hover:bg-zinc-50 transition-colors text-sm text-[#0f1c32] flex items-center gap-3"
              >
                {icon}
                {displayName}
                {connectingId === connector.uid && (
                  <span className="text-xs text-zinc-400 animate-pulse ml-auto">...</span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  )
}