'use client'

import { useReadContract, useAccount, useWriteContract } from 'wagmi'
import { formatUnits } from 'viem' // <-- Import ajouté
import { KTEMAS_YIELD_ADDRESS, KTEMAS_YIELD_ABI } from './contracts'

export function useKtemasYield() {
  const { address } = useAccount()

  // Lecture des récompenses en attente
  const { data: pendingRewards, isLoading, refetch } = useReadContract({
    address: KTEMAS_YIELD_ADDRESS,
    abi: KTEMAS_YIELD_ABI,
    functionName: 'calculateRewards',
    args: address ? [address] : undefined,
    query: { enabled: !!address },
  })

  // Préparation de la fonction de claim
  const { writeContractAsync: claimRewards, isPending: isClaiming } = useWriteContract()

  // Formatage corrigé
  const formattedRewards = pendingRewards ? Number(formatUnits(pendingRewards, 18)) : 0

  return {
    pendingRewards: formattedRewards,
    isLoading,
    claimRewards: () => claimRewards({
      address: KTEMAS_YIELD_ADDRESS,
      abi: KTEMAS_YIELD_ABI,
      functionName: 'claimRewards',
    }),
    isClaiming,
    refetch,
  }
}