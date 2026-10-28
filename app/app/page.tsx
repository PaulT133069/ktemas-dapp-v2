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
  const [timeLeft, setTimeLeft] = useState<string>("");

  useEffect(() => { setMounted(true) }, []);

  const { isConnected } = useAccount();
  const { balance, isLoading: isLoadingBalance } = useKtemasBalance();
  const { deposit, isLoading: isLoadingVault, withdrawalAmount, isWithdrawalActive, requestTimestamp } = useKtemasVault();

  useEffect(() => {
    if (!isWithdrawalActive || !requestTimestamp) {
      setTimeLeft("");
      return;
    }

    const interval = setInterval(() => {
      const now = Math.floor(Date.now() / 1000);
      const unlockTime = requestTimestamp + 48 * 60 * 60;
      const diff = unlockTime - now;

      if (diff <= 0) {
        setTimeLeft("Prêt à exécuter !");
        clearInterval(interval);
      } else {
        const hours = Math.floor(diff / 3600);
        const minutes = Math.floor((diff % 3600) / 60);
        setTimeLeft(`${hours}h ${minutes}m restantes`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isWithdrawalActive, requestTimestamp]);

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
        <h1 className="text-4xl font-bold tracking-tighter mb-8 text-[#0f1c32]">
          Mon Dashboard
        </h1>

        {/* Carte Mon Wallet */}
        <div className="bg-gradient-to-br from-[#0f1c32] via-[#132a4a] to-[#1a3a5c] text-white p-8 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h2 className="text-xl font-semibold mb-2 text-white">Mon Wallet</h2>
            <p className="text-white text-sm">Gérez vos KTMS et interagissez avec le Vault.</p>
          </div>
          <ConnectWallet />
        </div>

        {isConnected && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Solde Wallet */}
            <div className="bg-gradient-to-br from-[#0f1c32] via-[#132a4a] to-[#1a3a5c] text-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-sm font-medium text-white mb-2">Solde Wallet</h3>
              {isLoadingBalance ? (
                <p className="text-2xl font-bold text-white/50">Chargement...</p>
              ) : (
                <p className="text-4xl font-bold tracking-tight text-white">
                  {balance.toLocaleString('fr-FR')} <span className="text-2xl text-white/70">KTMS</span>
                </p>
              )}
            </div>

            {/* Dépôt dans le Vault */}
            <div className="bg-gradient-to-br from-[#0f1c32] via-[#132a4a] to-[#1a3a5c] text-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-sm font-medium text-white mb-2">Dépôt dans le Vault</h3>
              {isLoadingVault ? (
                <p className="text-2xl font-bold text-white/50">Chargement...</p>
              ) : (
                <p className="text-4xl font-bold tracking-tight text-white">
                  {deposit.toLocaleString('fr-FR')} <span className="text-2xl text-white/70">KTMS</span>
                </p>
              )}
            </div>
          </div>
        )}

        {/* Carte de retrait (on garde le bleu clair pour la différencier) */}
        {isConnected && isWithdrawalActive && (
          <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h3 className="text-lg font-semibold text-blue-900 mb-1">Retrait en attente</h3>
              <p className="text-blue-800 text-sm">
                Vous avez demandé un retrait de <strong>{withdrawalAmount.toLocaleString('fr-FR')} KTMS</strong>.
              </p>
              {timeLeft && <p className="text-blue-600 text-xs font-medium mt-1">{timeLeft}</p>}
            </div>
            
            <button 
              disabled={timeLeft !== "Prêt à exécuter !"}
              className={`font-medium px-6 py-2 rounded-full transition-colors text-sm ${
                timeLeft === "Prêt à exécuter !" 
                  ? "bg-blue-600 hover:bg-blue-700 text-white" 
                  : "bg-zinc-200 text-zinc-500 cursor-not-allowed"
              }`}
            >
              {timeLeft === "Prêt à exécuter !" ? "Exécuter le retrait" : "En attente..."}
            </button>
          </div>
        )}

        {/* Zone Vault */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-[#0f1c32] via-[#132a4a] to-[#1a3a5c] text-white p-8 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-lg font-semibold mb-4 text-white">Déposer</h3>
            <p className="text-white text-sm mb-4">Déposez vos KTMS pour gagner des récompenses.</p>
            <DepositForm />
          </div>

          <div className="bg-gradient-to-br from-[#0f1c32] via-[#132a4a] to-[#1a3a5c] text-white p-8 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-lg font-semibold mb-4 text-white">Retirer</h3>
            <p className="text-white text-sm mb-4">Retirez vos KTMS (délai de 48h).</p>
            <WithdrawForm />
          </div>
        </div>
      </div>
    </main>
  );
}