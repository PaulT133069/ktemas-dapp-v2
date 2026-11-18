// app/yield/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link'; // <-- Ajout pour le bouton
import Navbar from "@/components/Navbar";

export default function YieldPage() {
  const [simulateAmount, setSimulateAmount] = useState(5000);
  
  const exampleRate = 0.12; 
  const estimatedGain = Math.round(simulateAmount * exampleRate);

  return (
    <div className="min-h-screen bg-zinc-50 text-[#0f1c32] flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-4xl w-full mx-auto px-6 py-20 flex flex-col gap-20 pt-32">
        
        {/* HERO SECTION */}
        <section className="text-center flex flex-col items-center gap-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#0f1c32] max-w-3xl leading-tight">
            Yield System de Ktemas
          </h1>
          <p className="text-zinc-500 text-lg max-w-2xl leading-relaxed">
            Le module de rendement de Ktemas est directement connecté à votre Vault. 
            Pas de frais cachés, juste des récompenses algorithmiques.
          </p>
        </section>

        {/* FONCTIONNEMENT - CARTES À LA VERTICALE AVEC SCHÉMAS */}
        <section className="flex flex-col gap-10">
          <div className="border-b border-zinc-200 pb-6 flex justify-between items-end">
            <div>
              <h2 className="text-2xl font-semibold mb-1">Comment ça marche ?</h2>
              <p className="text-zinc-500">Trois étapes simples pour générer du rendement.</p>
            </div>
            {/* Touche de transparence sur le taux */}
            <div className="hidden md:block text-right">
              <span className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Taux de base actuel</span>
              <p className="text-lg font-bold text-emerald-600">12.00%</p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            
            {/* Carte 1 : Dépôt */}
            <div className="bg-gradient-to-br from-[#0f1c32] via-[#132a4a] to-[#1a3a5c] text-white rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-10 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-full md:w-1/3 flex justify-center items-center min-h-[140px] bg-white/5 rounded-2xl border border-white/10 p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center text-emerald-400 font-bold">💼</div>
                  <div className="w-8 h-0.5 bg-white/30" />
                  <div className="w-14 h-14 rounded-xl bg-blue-500/20 border-2 border-blue-400 flex items-center justify-center text-blue-400 font-bold text-xs">Vault</div>
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <div className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-bold mb-3 text-blue-200">ÉTAPE 01</div>
                <h3 className="text-2xl font-bold text-white mb-3">Dépôt adossé</h3>
                <p className="text-white/70 leading-relaxed text-sm md:text-base">
                  Le Yield n'est pas un produit isolé. Il s'active uniquement lorsque vous transférez vos KTMS depuis votre wallet vers le contrat sécurisé <strong className="text-white">KtemasVault</strong>. C'est votre point d'entrée unique.
                </p>
              </div>
            </div>

            {/* Carte 2 : Calcul */}
            <div className="bg-gradient-to-br from-[#0f1c32] via-[#132a4a] to-[#1a3a5c] text-white rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-10 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-full md:w-1/3 flex justify-center items-center min-h-[140px] bg-white/5 rounded-2xl border border-white/10 p-6">
                <div className="flex flex-col gap-2 w-full max-w-[150px]">
                  <div className="h-2 w-full bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full w-2/3 bg-indigo-400 rounded-full" />
                  </div>
                  <div className="h-2 w-full bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full w-1/2 bg-indigo-400 rounded-full" />
                  </div>
                  <div className="h-2 w-full bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full w-4/5 bg-indigo-400 rounded-full" />
                  </div>
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <div className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-bold mb-3 text-indigo-200">ÉTAPE 02</div>
                <h3 className="text-2xl font-bold text-white mb-3">Calcul continu</h3>
                <p className="text-white/70 leading-relaxed text-sm md:text-base">
                  Le contrat <strong className="text-white">KtemasYield</strong> surveille votre dépôt. Il calcule vos intérêts à la seconde près, en se basant sur le taux de base (BPS) configuré dans la Gouvernance. Aucune action requise de votre part.
                </p>
              </div>
            </div>

            {/* Carte 3 : Réclamation */}
            <div className="bg-gradient-to-br from-[#0f1c32] via-[#132a4a] to-[#1a3a5c] text-white rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-10 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-full md:w-1/3 flex justify-center items-center min-h-[140px] bg-white/5 rounded-2xl border border-white/10 p-6">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20 text-xs">30j</div>
                  <div className="w-8 h-0.5 border-t-2 border-dashed border-emerald-400" />
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center text-emerald-400 text-xl font-bold">✨</div>
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <div className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-bold mb-3 text-emerald-200">ÉTAPE 03</div>
                <h3 className="text-2xl font-bold text-white mb-3">Réclamation</h3>
                <p className="text-white/70 leading-relaxed text-sm md:text-base">
                  Pour garantir la stabilité du protocole, une période de maturation de 30 jours est requise. Une fois cette période écoulée, vous pouvez réclamer vos gains accumulés en un clic depuis votre Dashboard.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* SIMULATEUR INTERACTIF */}
        <section className="bg-gradient-to-br from-[#0f1c32] via-[#132a4a] to-[#1a3a5c] rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
          <div className="max-w-2xl mx-auto text-center mb-10 relative z-10">
            <h2 className="text-2xl font-semibold mb-2 text-white">Simulateur interactif</h2>
            <p className="text-white/70">Déplacez le curseur pour estimer vos gains futurs. <span className="text-sm block mt-1">(Hypothèse visuelle avec un taux de base fixe de 12%).</span></p>
          </div>

          <div className="max-w-xl mx-auto flex flex-col gap-8 relative z-10">
            {/* Curseur */}
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-end">
                <span className="text-sm font-medium text-white/70">Montant déposé</span>
                <span className="text-3xl font-bold text-white tabular-nums transition-all duration-75">
                  {simulateAmount.toLocaleString('fr-FR')} <span className="text-lg text-white/50 font-normal">KTMS</span>
                </span>
              </div>
              <input 
                type="range" 
                min="500" 
                max="100000" 
                step="500" 
                value={simulateAmount}
                onChange={(e) => setSimulateAmount(Number(e.target.value))}
                className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-emerald-400"
              />
              <div className="flex justify-between text-xs text-white/50 font-medium">
                <span>500</span>
                <span>100 000</span>
              </div>
            </div>

            {/* Résultat */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-8 text-center flex flex-col gap-2">
              <span className="text-sm font-medium text-white/70">Gain annuel estimé</span>
              <span className="text-4xl font-bold text-emerald-400 tabular-nums">
                +{estimatedGain.toLocaleString('fr-FR')} <span className="text-xl text-white/50 font-normal">KTMS</span>
              </span>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="text-center pb-10">
          <Link 
            href="/app" 
            className="inline-flex items-center gap-2 bg-[#0f1c32] hover:bg-[#1a3a5c] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          >
            Déposer mes KTMS dans le Vault
            <span className="text-xl">→</span>
          </Link>
        </section>

      </main>
    </div>
  );
}