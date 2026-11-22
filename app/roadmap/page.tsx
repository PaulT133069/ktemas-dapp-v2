// app/innovation/page.tsx
import Navbar from "@/components/Navbar";

export default function InnovationPage() {
  const roadmap = [
    {
      phase: "Phase 1",
      title: "Fondations & Testnet",
      status: "Terminé",
      statusColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
      items: [
        "Création du token KTMS (Supply 10M)",
        "Développement de l'écosystème de 5 contrats",
        "Audit de sécurité (0 faille critique)",
        "Lancement de la dApp sur Sepolia",
      ],
    },
    {
      phase: "Phase 2",
      title: "L'Écosystème Global",
      status: "En cours",
      statusColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      items: [
        "Lancement officiel de la dApp V1",
        "Introduction des devises Kuusi et Netense",
        "Ouverture de la Gouvernance communautaire",
        "Partenariats et intégrations DeFi",
      ],
    },
    {
      phase: "Phase 3",
      title: "L'Ère du Real Yield",
      status: "À venir",
      statusColor: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30",
      items: [
        "Déploiement sur le Mainnet",
        "Passage d'un rendement inflationniste à un rendement basé sur les revenus réels de la Trésorerie",
        "Lancement du Ktemas SDK pour les développeurs",
        "Transition totale vers une DAO décentralisée",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-zinc-50 text-[#0f1c32]">
      <Navbar />
      
      <div className="pt-32 px-6 max-w-5xl mx-auto pb-24">
        
        {/* HERO SECTION */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Roadmaps de Ktemas
          </h1>
          <p className="text-lg text-zinc-500 max-w-2xl mx-auto leading-relaxed">
            Ktemas n'est pas un projet statique. Découvrez comment nous construisons pas à pas 
            l'infrastructure financière décentralisée de demain.
          </p>
        </div>

        {/* TIMELINE - CARTES VERTICALES */}
        <div className="flex flex-col gap-12 max-w-3xl mx-auto relative">
          {/* Ligne verticale décorative (visible sur PC) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-zinc-200 -translate-x-1/2 z-0" />

          {roadmap.map((item, index) => (
            <div key={index} className="relative z-10">
              <div className="bg-gradient-to-br from-[#0f1c32] via-[#132a4a] to-[#1a3a5c] text-white rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300">
                
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4 border-b border-white/10 pb-6">
                  <div>
                    <span className="text-sm font-bold tracking-widest text-blue-300 uppercase mb-2 block">
                      {item.phase}
                    </span>
                    <h2 className="text-2xl font-bold text-white">{item.title}</h2>
                  </div>
                  <div className={`px-4 py-1.5 rounded-full text-xs font-bold border ${item.statusColor}`}>
                    {item.status}
                  </div>
                </div>

                <ul className="space-y-3">
                  {item.items.map((task, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/80 text-sm md:text-base">
                      <span className="mt-1 text-white/80">✦</span>
                      {task}
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          ))}
        </div>

        {/* SECTION INNOVATIONS PRODUIT (VISION) */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Roadmap de demain</h2>
            <p className="text-zinc-500 max-w-2xl mx-auto">
              Ktemas n'est pas qu'un simple coffre-fort. Nous posons les bases du portail financier décentralisé de nouvelle génération.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            
            {/* Carte 1 : Le Portail Unifié */}
            <div className="bg-gradient-to-br from-[#0f1c32] via-[#132a4a] to-[#1a3a5c] text-white rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/4 flex justify-center">
                <div className="w-20 h-20 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-4xl">
                  🌐
                </div>
              </div>
              <div className="w-full md:w-3/4 text-center md:text-left">
                <h3 className="text-xl font-bold mb-3">Le Portail Web3 Unifié</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Fini les allers-retours entre plusieurs sites. Le portail Ktemas centralisera l'ensemble de vos opérations : gestion des KTMS, suivi des rendements du Vault, accès à la Gouvernance et visualisation de la Trésorerie. Une interface unique, rapide et intuitive, conçue avec Next.js pour rivaliser avec les applications bancaires traditionnelles.
                </p>
              </div>
            </div>

            {/* Carte 2 : Les Micro-Vaults */}
            <div className="bg-gradient-to-br from-[#0f1c32] via-[#132a4a] to-[#1a3a5c] text-white rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/4 flex justify-center">
                <div className="w-20 h-20 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-4xl">
                  🗂️
                </div>
              </div>
              <div className="w-full md:w-3/4 text-center md:text-left">
                <h3 className="text-xl font-bold mb-3">Micro-Vaults Personnalisables</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  L'épargne de demain sera sur-mesure. Notre contrat intelligent évoluera pour permettre à chaque utilisateur de créer plusieurs sous-coffres isolés (ex: "Projet Voiture", "Épargne de sécurité", "Investissement long terme"). Chaque micro-vault aura son propre suivi de rendement, offrant une gestion budgétaire on-chain d'une précision inédite.
                </p>
              </div>
            </div>

            {/* Carte 3 : L'Interface Modulaire */}
            <div className="bg-gradient-to-br from-[#0f1c32] via-[#132a4a] to-[#1a3a5c] text-white rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/4 flex justify-center">
                <div className="w-20 h-20 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-4xl">
                  🎛️
                </div>
              </div>
              <div className="w-full md:w-3/4 text-center md:text-left">
                <h3 className="text-xl font-bold mb-3">Tableau de Bord Modulaire</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  L'interface s'adapte à l'utilisateur et non l'inverse. Grâce à une architecture de composants React avancée, le Dashboard Ktemas du futur sera entièrement personnalisable. Déplacez, redimensionnez et disposez vos modules (graphiques de trésorerie, propositions de vote, récompenses) pour construire l'espace de travail parfait.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}