'use client'

import { useState, useEffect } from 'react'
import { useAccount, useConfig, useConnect, useWaitForTransactionReceipt } from 'wagmi'
import { writeContract } from 'wagmi/actions'
import { parseUnits } from 'viem'
import { KTEMAS_VAULT_ADDRESS, KTEMAS_VAULT_ABI } from '@/lib/contracts'

export function WithdrawForm() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])

  const { address, isConnected } = useAccount()
  const config = useConfig()
  const { connectors, connectAsync } = useConnect()
  const [amount, setAmount] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [withdrawHash, setWithdrawHash] = useState<`0x${string}` | undefined>()

  const { isSuccess } = useWaitForTransactionReceipt({ hash: withdrawHash })

  useEffect(() => {
    if (isSuccess) {
      alert("Demande de retrait envoyée ! Tu pourras retirer tes KTMS après 48h.")
      setWithdrawHash(undefined)
      setAmount('')
    }
  }, [isSuccess])

  const handleWithdraw = async () => {
    if (!amount || !address) return

    setIsLoading(true)
    try {
      if (!isConnected) {
        const injectedConnector = connectors.find(c => c.id === 'injected' || c.name === 'MetaMask')
        if (injectedConnector) {
          await connectAsync({ connector: injectedConnector })
        }
      }

      const amountWei = parseUnits(amount, 18)
      const hash = await writeContract(config, {
        address: KTEMAS_VAULT_ADDRESS,
        abi: KTEMAS_VAULT_ABI,
        functionName: 'requestWithdrawal',
        args: [amountWei],
      })
      setWithdrawHash(hash)
    } catch (e) {
      console.error("Erreur de retrait:", e)
    } finally {
      setIsLoading(false)
    }
  }

  if (!mounted) return <div className="h-32 w-full bg-zinc-50 animate-pulse rounded-xl"></div>

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-zinc-500 mb-2">Montant à retirer (KTMS)</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="0"
          className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:border-[#0f1c32] transition-colors"
        />
      </div>
      <button
        onClick={handleWithdraw}
        disabled={isLoading || !amount}
        className="w-full bg-[#0f1c32] hover:bg-[#1a2d4a] text-white font-medium px-6 py-3 rounded-xl transition-colors disabled:opacity-50"
      >
        {isLoading ? 'Demande en cours...' : 'Demander le retrait (48h)'}
      </button>
    </div>
  )
}