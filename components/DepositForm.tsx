'use client'

import { useState, useEffect } from 'react'
import { useAccount, useConfig, useReadContract, useConnect, useWaitForTransactionReceipt } from 'wagmi'
import { writeContract } from 'wagmi/actions'
import { parseUnits } from 'viem'
import { KTEMAS_TOKEN_ADDRESS, KTEMAS_TOKEN_ABI, KTEMAS_VAULT_ADDRESS, KTEMAS_VAULT_ABI } from '@/lib/contracts'

export function DepositForm() {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  const { address, isConnected } = useAccount()
  const config = useConfig()
  const { connectors, connectAsync } = useConnect()
  const [amount, setAmount] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  
  const [approveHash, setApproveHash] = useState<`0x${string}` | undefined>()
  const [depositHash, setDepositHash] = useState<`0x${string}` | undefined>()

  const { data: allowance, refetch: refetchAllowance } = useReadContract({
    address: KTEMAS_TOKEN_ADDRESS,
    abi: KTEMAS_TOKEN_ABI,
    functionName: 'allowance',
    args: address ? [address, KTEMAS_VAULT_ADDRESS] : undefined,
    query: { enabled: !!address },
  })

  const { isSuccess: isApproveSuccess } = useWaitForTransactionReceipt({
    hash: approveHash,
  })

  const { isSuccess: isDepositSuccess } = useWaitForTransactionReceipt({
    hash: depositHash,
  })

  useEffect(() => {
    if (isApproveSuccess) {
      refetchAllowance()
      setApproveHash(undefined)
    }
  }, [isApproveSuccess, refetchAllowance])

  useEffect(() => {
    if (isDepositSuccess) {
      window.location.reload()
    }
  }, [isDepositSuccess])

  const amountWei = amount ? parseUnits(amount, 18) : 0n
  const needsApproval = !allowance || allowance < amountWei

  const handleApprove = async () => {
    if (!amount || !address) return

    setIsLoading(true)
    try {
      if (!isConnected) {
        const injectedConnector = connectors.find(c => c.id === 'injected' || c.name === 'MetaMask')
        if (injectedConnector) {
          await connectAsync({ connector: injectedConnector })
        } else {
          throw new Error("Aucun wallet détecté")
        }
      }

      const hash = await writeContract(config, {
        address: KTEMAS_TOKEN_ADDRESS,
        abi: KTEMAS_TOKEN_ABI,
        functionName: 'approve',
        args: [KTEMAS_VAULT_ADDRESS, amountWei],
      })
      setApproveHash(hash)
    } catch (e) {
      console.error("Erreur d'approbation:", e)
    } finally {
      setIsLoading(false)
    }
  }

  const handleDeposit = async () => {
    if (!amount || !address) return

    setIsLoading(true)
    try {
      if (!isConnected) {
        const injectedConnector = connectors.find(c => c.id === 'injected' || c.name === 'MetaMask')
        if (injectedConnector) {
          await connectAsync({ connector: injectedConnector })
        } else {
          throw new Error("Aucun wallet détecté")
        }
      }

      const hash = await writeContract(config, {
        address: KTEMAS_VAULT_ADDRESS,
        abi: KTEMAS_VAULT_ABI,
        functionName: 'deposit',
        args: [amountWei],
      })
      setDepositHash(hash)
    } catch (e) {
      console.error("Erreur de dépôt:", e)
    } finally {
      setIsLoading(false)
    }
  }

  if (!mounted) {
    return (
      <div className="h-32 w-full bg-zinc-50 animate-pulse rounded-xl"></div>
    )
  }

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-zinc-500 mb-2">Montant à déposer (KTMS)</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="0"
          className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:border-[#0f1c32] transition-colors"
        />
      </div>

      {needsApproval ? (
        <button
          onClick={handleApprove}
          disabled={isLoading || !amount}
          className="w-full bg-[#0f1c32] hover:bg-[#1a2d4a] text-white font-medium px-6 py-3 rounded-xl transition-colors disabled:opacity-50">
          {isLoading ? 'Approbation...' : '1. Approuver le Vault'}
        </button>
      ) : (
        <button
          onClick={handleDeposit}
          disabled={isLoading || !amount}
          className="w-full bg-[#0f1c32] hover:bg-[#1a2d4a] text-white font-medium px-6 py-3 rounded-xl transition-colors disabled:opacity-50"
        >
          {isLoading ? 'Dépôt en cours...' : '2. Déposer'}
        </button>
      )}
    </div>
  )
}