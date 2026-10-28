import Navbar from "@/components/Navbar";

export default function TresoreriePage() {
  return (
    <main className="min-h-screen bg-zinc-50 text-[#0f1c32]">
      <Navbar />
      
      <div className="pt-32 px-6 max-w-6xl mx-auto text-center">
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tighter mb-4">
            Trésorerie du Protocole
          </h1>
          <p className="text-zinc-500 text-lg max-w-2xl mx-auto text-center">
            Transparence totale sur les fonds de l'écosystème Ktemas.
            Les frais de retrait (0,5%) alimentent cette trésorerie, sécurisée par un timelock de 48h.
          </p>
        </div>

        {/* Cartes de stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-[#0f1c32] via-[#132a4a] to-[#1a3a5c] text-white p-6 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-sm font-medium text-white/70 mb-2">Solde Total</h3>
            <p className="text-3xl font-bold text-white">0 KTMS</p>
            <p className="text-sm text-white/50 mt-1">En attente de dépôts</p>
          </div>
          <div className="bg-gradient-to-br from-[#0f1c32] via-[#132a4a] to-[#1a3a5c] text-white p-6 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-sm font-medium text-white/70 mb-2">Frais Perçus</h3>
            <p className="text-3xl font-bold text-white">0 KTMS</p>
            <p className="text-sm text-white/50 mt-1">Depuis le lancement</p>
          </div>
          <div className="bg-gradient-to-br from-[#0f1c32] via-[#132a4a] to-[#1a3a5c] text-white p-6 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-sm font-medium text-white/70 mb-2">Retraits Effectués</h3>
            <p className="text-3xl font-bold text-white">0</p>
            <p className="text-sm text-white/50 mt-1">Avec timelock de 48h</p>
          </div>
        </div>

        {/* Historique des transactions (placeholder) */}
        <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-zinc-200">
            <h2 className="text-xl font-semibold">Historique des mouvements</h2>
          </div>
          <div className="p-12 text-center text-zinc-400">
            <p className="text-lg mb-2">Aucune transaction pour le moment</p>
            <p className="text-sm">Les mouvements de trésorerie apparaîtront ici.</p>
          </div>
        </div>

        {/* Note de sécurité */}
        <div className="mt-8 bg-blue-50 border border-blue-100 p-6 rounded-2xl">
          <h3 className="font-semibold text-blue-900 mb-2">🔒 Sécurité et Transparence</h3>
          <p className="text-blue-800 text-sm">
            Toutes les transactions de la trésorerie sont visibles on-chain. 
            Les retraits sont soumis à un délai de 48h (timelock) pour permettre à la communauté de vérifier chaque mouvement.
          </p>
        </div>
      </div>
    </main>
  );
}