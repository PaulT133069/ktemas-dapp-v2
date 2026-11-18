'use client'

import { useReadContract, useAccount, useWriteContract } from 'wagmi'
import { formatUnits } from 'viem' // <-- L'import ajouté
import { KTEMAS_VAULT_ADDRESS, KTEMAS_VAULT_ABI } from './contracts'

export function useKtemasVault() {
  const { address } = useAccount()

  // Lecture du dépôt de l'utilisateur
  const { data: userDeposit, isLoading: isLoadingDeposit } = useReadContract({
    address: KTEMAS_VAULT_ADDRESS,
    abi: KTEMAS_VAULT_ABI,
    functionName: 'getDeposit',
    args: address ? [address] : undefined,
    query: { enabled: !!address },
  })

  // Lecture de la demande de retrait en cours
  const { data: withdrawalRequest, isLoading: isLoadingWithdrawal } = useReadContract({
    address: KTEMAS_VAULT_ADDRESS,
    abi: KTEMAS_VAULT_ABI,
    functionName: 'getWithdrawalRequest',
    args: address ? [address] : undefined,
    query: { enabled: !!address },
  })

  // Préparation de la fonction de dépôt (écriture)
  const { writeContractAsync: deposit, isPending: isDepositing } = useWriteContract()

  // Préparation de la fonction de retrait
  const { writeContractAsync: executeWithdrawal, isPending: isWithdrawing } = useWriteContract()

  // Formatage des données (CORRIGÉ avec formatUnits)
  const formattedDeposit = userDeposit ? Number(formatUnits(userDeposit[0], 18)) : 0
  const formattedWithdrawalAmount = withdrawalRequest ? Number(formatUnits(withdrawalRequest[0], 18)) : 0
  const isWithdrawalActive = withdrawalRequest ? withdrawalRequest[2] : false
  // ✅ On récupère le timestamp de la demande
  const requestTimestamp = withdrawalRequest ? Number(withdrawalRequest[1]) : 0

  return {
    deposit: formattedDeposit,
    withdrawalAmount: formattedWithdrawalAmount,
    isWithdrawalActive,
    requestTimestamp, // ✅ On le retourne
    isLoading: isLoadingDeposit || isLoadingWithdrawal,
    write: {
      deposit: (amount: bigint) => deposit({ address: KTEMAS_VAULT_ADDRESS, abi: KTEMAS_VAULT_ABI, functionName: 'deposit', args: [amount] }),
      executeWithdrawal: () => executeWithdrawal({ address: KTEMAS_VAULT_ADDRESS, abi: KTEMAS_VAULT_ABI, functionName: 'executeWithdrawal' }),
    },
    isDepositing,
    isWithdrawing,
  }
}