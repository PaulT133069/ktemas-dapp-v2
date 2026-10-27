'use client'

import { useReadContract, useAccount } from 'wagmi'
import { KTEMAS_TOKEN_ADDRESS, KTEMAS_TOKEN_ABI } from './contracts'

export function useKtemasBalance() {
  const { address } = useAccount()

  const { data: balance, isLoading, isError } = useReadContract({
    address: KTEMAS_TOKEN_ADDRESS,
    abi: KTEMAS_TOKEN_ABI,
    functionName: 'balanceOf',
    args: address ? [address] : undefined,
    query: {
      enabled: !!address, // Ne lance la requête que si on a une adresse
    },
  })

  // Formater le solde (diviser par 10^18 pour les décimales)
  const formattedBalance = balance
    ? Number(balance) / 10 ** 18
    : 0

  return {
    balance: formattedBalance,
    rawBalance: balance,
    isLoading,
    isError,
  }
}