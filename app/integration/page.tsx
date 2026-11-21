// app/integration/page.tsx
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function IntegrationPage() {
  return (
    <main className="min-h-screen bg-zinc-50 text-[#0f1c32]">
      <Navbar />
      
      <div className="pt-32 px-6 max-w-4xl mx-auto pb-24">
        
        {/* HERO SECTION */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Construisez avec <span className="text-[#0f1c32]">Ktemas</span>
          </h1>
          <p className="text-lg text-zinc-500 max-w-2xl mx-auto leading-relaxed">
            Ktemas est un écosystème ouvert. Que vous soyez développeur, créateur de protocole ou partenaire, 
            découvrez comment connecter votre projet à notre Vault et notre Trésorerie.
          </p>
        </div>

        {/* SECTION DÉVELOPPEURS (Dégradé océan) */}
        <div className="bg-gradient-to-br from-[#0f1c32] via-[#132a4a] to-[#1a3a5c] text-white rounded-3xl p-8 md:p-12 shadow-xl mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Prêt à coder ?</h2>
              <p className="text-white/80 mb-6 leading-relaxed">
                Tous nos contrats intelligents sont open-source, audités et vérifiés. 
                Vous pouvez interagir avec eux on-chain ou utiliser nos bibliothèques TypeScript.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-sm text-white/90">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs">✓</span>
                  Contrats déployés sur Sepolia (Testnet)
                </li>
                <li className="flex items-center gap-3 text-sm text-white/90">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs">✓</span>
                  ABI compatibles Viem & Wagmi
                </li>
                <li className="flex items-center gap-3 text-sm text-white/90">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs">✓</span>
                  Code source vérifié sur Etherscan
                </li>
              </ul>

              <div className="flex gap-4">
                <Link href="https://sepolia.etherscan.io" target="_blank" className="bg-white text-[#0f1c32] hover:bg-zinc-100 font-bold px-6 py-3 rounded-xl transition-all shadow-lg active:scale-95 text-sm">
                  Voir sur Etherscan
                </Link>
              </div>
            </div>

            {/* Bloc de code visuel */}
            <div className="w-full md:w-1/2">
              <div className="bg-[#0a131f] rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
                  <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
                  <span className="ml-2 text-xs text-white/40 font-mono">KtemasVault.sol</span>
                </div>
                <div className="p-6 font-mono text-sm leading-relaxed text-blue-300 overflow-x-auto">
                  <span className="text-pink-400">function</span> <span className="text-yellow-200">deposit</span>(uint256 amount) <span className="text-pink-400">external</span> {'{'}
                  <br />
                  &nbsp;&nbsp;<span className="text-white/40">// Transfère les KTMS vers le Vault</span>
                  <br />
                  &nbsp;&nbsp;ktmsToken.transferFrom(msg.sender, address(this), amount);
                  <br />
                  &nbsp;&nbsp;deposits[msg.sender].amount += amount;
                  <br />
                  {'}'}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION INTÉGRATIONS DISPONIBLES - VERTICAL & DÉGRADÉ */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Moyens d'intégration</h2>
          
          <div className="flex flex-col gap-6">
            
            {/* Carte 1 : Smart Contracts */}
            <div className="bg-gradient-to-br from-[#0f1c32] via-[#132a4a] to-[#1a3a5c] text-white rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-full md:w-1/4 flex justify-center items-center">
                <div className="w-20 h-20 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-4xl">
                  🔌
                </div>
              </div>
              <div className="w-full md:w-3/4 text-center md:text-left">
                <h3 className="text-xl font-bold mb-2">Smart Contracts</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  Interagissez directement avec le Vault, le Token et la Trésorerie depuis votre propre dApp. Toutes les fonctions publiques sont accessibles via n'importe quelle bibliothèque Web3 (Viem, Ethers.js).
                </p>
                <span className="inline-block text-sm font-semibold text-blue-300">Adresses disponibles sur Etherscan →</span>
              </div>
            </div>

            {/* Carte 2 : Ktemas SDK */}
            <div className="bg-gradient-to-br from-[#0f1c32] via-[#132a4a] to-[#1a3a5c] text-white rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-full md:w-1/4 flex justify-center items-center">
                <div className="w-20 h-20 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-4xl">
                  ⚙️
                </div>
              </div>
              <div className="w-full md:w-3/4 text-center md:text-left">
                <h3 className="text-xl font-bold mb-2">Ktemas SDK</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  Une bibliothèque TypeScript (basée sur Viem) pour faciliter la lecture des données du protocole et l'envoi de transactions. Idéal pour les développeurs qui veulent gagner du temps.
                </p>
                <span className="inline-block text-sm font-semibold text-blue-300">Bientôt disponible</span>
              </div>
            </div>

            {/* Carte 3 : Widgets UI */}
            <div className="bg-gradient-to-br from-[#0f1c32] via-[#132a4a] to-[#1a3a5c] text-white rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-full md:w-1/4 flex justify-center items-center">
                <div className="w-20 h-20 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-4xl">
                  🧩
                </div>
              </div>
              <div className="w-full md:w-3/4 text-center md:text-left">
                <h3 className="text-xl font-bold mb-2">Widgets UI</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  Intégrez un bouton "Déposer dans le Vault" sur votre site web sans avoir à coder de la logique Web3. Un simple copier-coller de notre composant React suffira.
                </p>
                <span className="inline-block text-sm font-semibold text-blue-300">En développement</span>
              </div>
            </div>

          </div>
        </div>

        {/* CTA FINAL - DÉGRADÉ OCÉAN */}
        <div className="bg-gradient-to-br from-[#0f1c32] via-[#132a4a] to-[#1a3a5c] text-white rounded-3xl p-10 shadow-xl relative overflow-hidden">
          {/* Lueur décorative */}
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 text-center">
            <h2 className="text-2xl font-bold mb-3">Besoin d'aide pour votre intégration ?</h2>
            <p className="text-white/70 text-sm mb-8 max-w-xl mx-auto leading-relaxed">
              Notre équipe technique est là pour vous accompagner dans la connexion de vos services à l'écosystème Ktemas.
            </p>
            <a 
              href="mailto:dev@ktemas.io" 
              className="inline-block bg-white text-[#0f1c32] hover:bg-zinc-100 font-bold px-8 py-3 rounded-xl transition-all shadow-lg active:scale-95 text-sm"
            >
              Contacter l'équipe Dev
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}