import Navbar from "@/components/Navbar";

export default function GouvernancePage() {
  return (
    <main className="min-h-screen bg-zinc-50 text-[#0f1c32]">
      <Navbar />
      
      <div className="pt-32 px-6 max-w-4xl mx-auto">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-4xl font-bold tracking-tighter mb-2">
              Gouvernance
            </h1>
            <p className="text-zinc-500">Participez aux décisions de la communauté.</p>
          </div>
          <button className="bg-[#0f1c32] text-white px-6 py-3 rounded-full font-medium hover:bg-[#1a2d4a] transition-colors">
            Créer une proposition
          </button>
        </div>

        {/* Liste des propositions (placeholder) */}
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold">Proposition #1 : Augmenter le seuil du Vault</h3>
              <span className="text-xs font-medium bg-green-100 text-green-700 px-3 py-1 rounded-full">Actif</span>
            </div>
            <div className="h-2 bg-zinc-100 rounded-full mb-2 overflow-hidden">
              <div className="h-full bg-green-500 w-3/4"></div>
            </div>
            <div className="flex justify-between text-sm text-zinc-500">
              <span>75% Pour</span>
              <span>25% Contre</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}