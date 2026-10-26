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
          <div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-4xl mb-4">🏦</div>
            <h2 className="text-2xl font-bold mb-3">Ktemas (KTMS)</h2>
            <p className="text-zinc-600 mb-4">
              Le pilier central. Un coffre-fort numérique décentralisé pour sécuriser votre épargne.
            </p>
            <span className="text-xs font-medium bg-green-100 text-green-700 px-3 py-1 rounded-full">
              Actif (Testnet)
            </span>
          </div>

          {/* Kuusi */}
          <div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow opacity-75">
            <div className="text-4xl mb-4">🌲</div>
            <h2 className="text-2xl font-bold mb-3">Kuusi</h2>
            <p className="text-zinc-600 mb-4">
              [Description à venir] La deuxième devise de l'écosystème.
            </p>
            <span className="text-xs font-medium bg-zinc-100 text-zinc-500 px-3 py-1 rounded-full">
              En développement
            </span>
          </div>

          {/* Netense */}
          <div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow opacity-75">
            <div className="text-4xl mb-4">🌐</div>
            <h2 className="text-2xl font-bold mb-3">Netense</h2>
            <p className="text-zinc-600 mb-4">
              [Description à venir] La troisième devise de l'écosystème.
            </p>
            <span className="text-xs font-medium bg-zinc-100 text-zinc-500 px-3 py-1 rounded-full">
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