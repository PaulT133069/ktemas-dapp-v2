import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 pt-40 pb-24 max-w-4xl mx-auto">
      
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 text-zinc-600 text-sm font-medium mb-8">
        <span className="w-2 h-2 rounded-full bg-green-500"></span>
        Sécurisé et audité
      </div>

      <h1 className="text-6xl md:text-7xl font-bold tracking-tighter text-[#0f1c32] mb-6">
        Le futur de votre épargne <br className="hidden md:block" /> est ici.
      </h1>

      <p className="text-xl md:text-2xl text-zinc-500 font-light mb-12 max-w-2xl">
        Ktemas est un coffre-fort numérique décentralisé. Déposez vos tokens, générez des récompenses et participez à la gouvernance du protocole.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
        <Link href="/app">
          <button className="bg-[#0f1c32] hover:bg-[#1a2d4a] text-white font-medium px-8 py-4 rounded-full text-lg w-full sm:w-auto transition-colors">
            Ouvrir mon Vault
          </button>
        </Link>
        <Link href="/documentation">
          <button className="border border-zinc-200 text-[#0f1c32] hover:border-[#0f1c32] font-medium px-8 py-4 rounded-full text-lg w-full sm:w-auto transition-colors">
            Lire le whitepaper
          </button>
        </Link>
      </div>
    </section>
  );
}