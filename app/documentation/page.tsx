import Navbar from "@/components/Navbar";

export default function DocumentationPage() {
  return (
    <main className="min-h-screen bg-white text-[#0f1c32]">
      <Navbar />
      
      <div className="pt-32 px-6 max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
        
        {/* Sidebar */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="sticky top-32">
            <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-4">
              Sommaire
            </h2>
            <nav className="flex flex-col gap-2">
              <a href="#introduction" className="text-zinc-600 hover:text-[#0f1c32] font-medium transition-colors">Introduction</a>
              <a href="#token" className="text-zinc-600 hover:text-[#0f1c32] font-medium transition-colors">Le Token (KTMS)</a>
              <a href="#vault" className="text-zinc-600 hover:text-[#0f1c32] font-medium transition-colors">Le Vault</a>
              <a href="#gouvernance" className="text-zinc-600 hover:text-[#0f1c32] font-medium transition-colors">La Gouvernance</a>
              <a href="#securite" className="text-zinc-600 hover:text-[#0f1c32] font-medium transition-colors">Sécurité & Audit</a>
            </nav>
          </div>
        </aside>

        {/* Contenu */}
        <article className="flex-grow max-w-3xl space-y-12 pb-24">
          
          <section id="introduction">
            <h1 className="text-4xl font-bold tracking-tighter mb-6">Introduction</h1>
            <p className="text-lg text-zinc-600 leading-relaxed">
              Bienvenue dans la documentation officielle de Ktemas. 
              Ktemas est un coffre-fort numérique décentralisé conçu pour sécuriser votre épargne en tokens KTMS tout en vous permettant de participer à la gouvernance du protocole.
            </p>
          </section>

          <section id="token">
            <h2 className="text-2xl font-bold tracking-tighter mb-4">Le Token (KTMS)</h2>
            <p className="text-zinc-600 leading-relaxed mb-4">
              Le token KTMS est le cœur de l'écosystème. C'est un token ERC-20 standard doté d'un hardcap de 50% de sa supply initiale, garantissant une rareté à long terme.
            </p>
            <ul className="list-disc pl-6 text-zinc-600 space-y-2">
              <li>Supply initiale : 10 000 000 KTMS</li>
              <li>Standard : ERC-20</li>
              <li>Réseau : Ethereum Sepolia (Testnet)</li>
            </ul>
          </section>

          <section id="vault">
            <h2 className="text-2xl font-bold tracking-tighter mb-4">Le Vault</h2>
            <p className="text-zinc-600 leading-relaxed">
              Le Vault est le coffre-fort. Vous pouvez y déposer vos KTMS pour générer des récompenses algorithmiques. Les retraits sont soumis à un délai de 48 heures et à des frais de 0,5% reversés à la trésorerie du protocole.
            </p>
          </section>

          <section id="securite">
            <h2 className="text-2xl font-bold tracking-tighter mb-4">Sécurité & Audit</h2>
            <p className="text-zinc-600 leading-relaxed">
              La sécurité est notre priorité. L'ensemble des contrats intelligents de Ktemas a été audité avec succès (0 faille critique, 0 faille moyenne) par l'outil Slither.
            </p>
          </section>

        </article>
      </div>
    </main>
  );
}