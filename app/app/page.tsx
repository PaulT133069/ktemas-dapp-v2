import Navbar from "@/components/Navbar";

export default function AppPage() {
  return (
    <main className="min-h-screen bg-zinc-50 text-[#0f1c32]">
      <Navbar />
      
      <div className="pt-32 px-6 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tighter mb-8">
          Mon Dashboard
        </h1>

        {/* Zone de connexion (Emplacement réservé) */}
        <div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h2 className="text-xl font-semibold mb-2">Connectez votre wallet</h2>
            <p className="text-zinc-500 text-sm">Pour voir vos soldes et interagir avec le Vault.</p>
          </div>
          
          {/* 🔮 EMPLACEMENT DU BOUTON CONNECT WALLET */}
          <div className="bg-zinc-100 text-zinc-400 px-6 py-2 rounded-full text-sm font-medium border border-dashed border-zinc-300">
            Connect Wallet (bientôt)
          </div>
        </div>

        {/* Zone Vault (placeholder) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Déposer</h3>
            <p className="text-zinc-500 text-sm mb-4">Déposez vos KTMS pour gagner des récompenses.</p>
            <div className="h-32 bg-zinc-50 rounded-xl border border-dashed border-zinc-300 flex items-center justify-center text-zinc-400">
              Formulaire de dépôt (bientôt)
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Retirer</h3>
            <p className="text-zinc-500 text-sm mb-4">Retirez vos KTMS (délai de 48h).</p>
            <div className="h-32 bg-zinc-50 rounded-xl border border-dashed border-zinc-300 flex items-center justify-center text-zinc-400">
              Formulaire de retrait (bientôt)
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}