import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function EcosystemePage() {
  return (
    <main className="min-h-screen bg-white text-[#0f1c32]">
      <Navbar />
      
      <div className="pt-40 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold tracking-tighter mb-4">
            L'Écosystème Ktemas
          </h1>
          <p className="text-xl text-zinc-500 max-w-2xl mx-auto">
            Découvrez les 4 piliers qui composent notre coffre-fort numérique décentralisé.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Token */}
          <div className="bg-gradient-to-br from-[#0f1c32] via-[#132a4a] to-[#1a3a5c] text-white p-8 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="text-4xl mb-4">🪙</div>
            <h2 className="text-2xl font-bold mb-3 text-white">Le Token (KTMS)</h2>
            <p className="text-white/80 mb-4">
              Le cœur de l'écosystème. Un token ERC-20 standard avec un hardcap de 50% pour garantir la rareté à long terme.
            </p>
            <Link href="/documentation#token" className="text-white font-medium hover:underline">
              En savoir plus →
            </Link>
          </div>

          {/* Vault */}
          <div className="bg-gradient-to-br from-[#0f1c32] via-[#132a4a] to-[#1a3a5c] text-white p-8 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="text-4xl mb-4">🏦</div>
            <h2 className="text-2xl font-bold mb-3 text-white">Le Vault</h2>
            <p className="text-white/80 mb-4">
              Le coffre-fort. Déposez vos KTMS, générez des récompenses algorithmiques et retirez à tout moment (délai de 48h).
            </p>
            <Link href="/app" className="text-white font-medium hover:underline">
              Accéder au Vault →
            </Link>
          </div>

          {/* Gouvernance */}
          <div className="bg-gradient-to-br from-[#0f1c32] via-[#132a4a] to-[#1a3a5c] text-white p-8 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="text-4xl mb-4">🗳️</div>
            <h2 className="text-2xl font-bold mb-3 text-white">La Gouvernance</h2>
            <p className="text-white/80 mb-4">
              Le pouvoir aux détenteurs. Proposez des changements et votez sur les décisions clés du protocole.
            </p>
            <Link href="/gouvernance" className="text-white font-medium hover:underline">
              Voir les propositions →
            </Link>
          </div>

          {/* Trésorerie */}
          <div className="bg-gradient-to-br from-[#0f1c32] via-[#132a4a] to-[#1a3a5c] text-white p-8 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="text-4xl mb-4">💼</div>
            <h2 className="text-2xl font-bold mb-3 text-white">La Trésorerie</h2>
            <p className="text-white/80 mb-4">
              La sécurité financière. Les frais de retrait (0,5%) alimentent une trésorerie sécurisée par un timelock de 48h.
            </p>
            <Link href="/tresorerie" className="text-white font-medium hover:underline">
              Voir la trésorerie →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}