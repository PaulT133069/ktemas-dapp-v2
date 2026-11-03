import Navbar from "@/components/Navbar";

export default function PlaceholderPage() {
  return (
    <main className="min-h-screen bg-zinc-50 text-[#0f1c32]">
      <Navbar />
      <div className="pt-32 px-6 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold tracking-tighter mb-4">
          Programme du Yield
        </h1>
        <p className="text-zinc-500">
          Cette page est en construction. Revenez bientôt !
        </p>
      </div>
    </main>
  );
}