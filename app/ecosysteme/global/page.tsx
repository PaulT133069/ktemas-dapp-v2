import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function EcosystemeGlobalPage() {
  return (
    <main className="min-h-screen bg-white text-[#0f1c32]">
      <Navbar />
      
      <div className="pt-40 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold tracking-tighter mb-4">
            L'Écosystème Global
          </h1>
          <p className="text-xl text-zinc-500 max-w-2xl mx-auto">
            Découvrez les 3 devises qui composeront l'univers Ktemas à terme.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Ktemas */}
          <div className="bg-gradient-to-br from-[#0f1c32] via-[#132a4a] to-[#1a3a5c] text-white p-8 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="text-4xl mb-4">🏦</div>
            <h2 className="text-2xl font-bold mb-3 text-white">Ktemas (KTMS)</h2>
            <p className="text-white/80 mb-4">
              Le pilier central. Un coffre-fort numérique décentralisé pour sécuriser votre épargne.
            </p>
            <span className="text-xs font-medium bg-green-500/20 text-green-300 px-3 py-1 rounded-full">
              Actif (Testnet)
            </span>
          </div>

          {/* Kuusi */}
          <div className="bg-gradient-to-br from-[#0f1c32] via-[#132a4a] to-[#1a3a5c] text-white p-8 rounded-2xl shadow-sm">
            <div className="text-4xl mb-4">🌲</div>
            <h2 className="text-2xl font-bold mb-3 text-white">Kuusi</h2>
            <p className="text-white/80 mb-4">
              [Description à venir] La deuxième devise de l'écosystème.
            </p>
            <span className="text-xs font-medium bg-white/10 text-white/70 px-3 py-1 rounded-full">
              En développement
            </span>
          </div>

          {/* Netense */}
          <div className="bg-gradient-to-br from-[#0f1c32] via-[#132a4a] to-[#1a3a5c] text-white p-8 rounded-2xl shadow-sm">
            <div className="text-4xl mb-4">🌐</div>
            <h2 className="text-2xl font-bold mb-3 text-white">Netense</h2>
            <p className="text-white/80 mb-4">
              [Description à venir] La troisième devise de l'écosystème.
            </p>
            <span className="text-xs font-medium bg-white/10 text-white/70 px-3 py-1 rounded-full">
              En développement
            </span>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link href="/ecosysteme" className="text-[#0f1c32] font-medium hover:underline">
            ← Retour à l'écosystème Ktemas
          </Link>
        </div>
      </div>
    </main>
  );
}