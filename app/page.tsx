import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-zinc-50 to-white text-[#0f1c32] flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Hero />
      </div>
    </main>
  );
}