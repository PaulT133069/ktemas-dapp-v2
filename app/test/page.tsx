export default function TestPage() {
  return (
    <div className="min-h-screen bg-white text-[#0f1c32] flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">Page de Test</h1>
      <p className="text-xl mb-8">Si ce texte est beau, la police fonctionne.</p>
      
      {/* Bouton de test (HTML pur, sans Wagmi) */}
      <button className="bg-[#0f1c32] hover:bg-[#1a2d4a] text-white font-medium px-6 py-3 rounded-full transition-colors">
        Bouton de Test
      </button>
    </div>
  );
}