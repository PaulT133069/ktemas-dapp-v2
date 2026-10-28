'use client'

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import { ConnectWallet } from "@/components/ConnectWallet";
import { useKtemasBalance } from "@/lib/useKtemasBalance";
import { useKtemasVault } from "@/lib/UseKtemasVault";
import { DepositForm } from "@/components/DepositForm";
import { useAccount } from "wagmi";
import { WithdrawForm } from "@/components/WithdrawForm";

export default function AppPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true) }, []);

  const { isConnected } = useAccount();
  const { balance, isLoading: isLoadingBalance } = useKtemasBalance();
  const { deposit, isLoading: isLoadingVault } = useKtemasVault();

  // ✅ Si pas monté, on affiche un placeholder pour toute la page
  if (!mounted) {
    return (
      <main className="min-h-screen bg-zinc-50">
        <Navbar />
        <div className="pt-32 px-6 max-w-6xl mx-auto">
          <div className="h-8 w-48 bg-zinc-200 animate-pulse rounded mb-8"></div>
          <div className="h-32 w-full bg-zinc-100 animate-pulse rounded-2xl"></div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-zinc-50 text-[#0f1c32]">
      <Navbar />
      
      <div className="pt-32 px-6 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tighter mb-8">
          Mon Dashboard
        </h1>

        <div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h2 className="text-xl font-semibold mb-2">Mon Wallet</h2>
            <p className="text-zinc-500 text-sm">Gérez vos KTMS et interagissez avec le Vault.</p>
          </div>
          <ConnectWallet />
        </div>

        {isConnected && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Solde Wallet */}
            <div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm">
              <h3 className="text-sm font-medium text-zinc-500 mb-2">Solde Wallet</h3>
              {isLoadingBalance ? (
                <p className="text-2xl font-bold text-zinc-400">Chargement...</p>
              ) : (
                <p className="text-4xl font-bold tracking-tight">
                  {balance.toLocaleString('fr-FR')} <span className="text-2xl text-zinc-400">KTMS</span>
                </p>
              )}
            </div>

            {/* Dépôt dans le Vault */}
            <div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm">
              <h3 className="text-sm font-medium text-zinc-500 mb-2">Dépôt dans le Vault</h3>
              {isLoadingVault ? (
                <p className="text-2xl font-bold text-zinc-400">Chargement...</p>
              ) : (
                <p className="text-4xl font-bold tracking-tight">
                  {deposit.toLocaleString('fr-FR')} <span className="text-2xl text-zinc-400">KTMS</span>
                </p>
              )}
            </div>
          </div>
        )}

        {/* Zone Vault (placeholder) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-lg font-semibold mb-4">Déposer</h3>
            <p className="text-zinc-500 text-sm mb-4">Déposez vos KTMS pour gagner des récompenses.</p>
            <DepositForm />
          </div>

          <div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-lg font-semibold mb-4">Retirer</h3>
            <p className="text-zinc-500 text-sm mb-4">Retirez vos KTMS (délai de 48h).</p>
            <WithdrawForm />
          </div>
        </div>
      </div>
    </main>
  );
}