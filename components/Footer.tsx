import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-100 py-12 mt-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-xl font-bold tracking-tighter text-[#0f1c32]">
            Ktemas
          </span>
          <p className="text-sm text-zinc-500">
            © 2026 Ktemas. Tous droits réservés.
          </p>
        </div>

        <div className="flex gap-8 text-sm font-medium text-zinc-500">
          <Link href="/app" className="hover:text-[#0f1c32] transition-colors">
            App
          </Link>
          <Link href="/documentation" className="hover:text-[#0f1c32] transition-colors">
            Documentation
          </Link>
          <Link href="https://github.com/PaulT133069/Ktemas" target="_blank" rel="noopener noreferrer" className="hover:text-[#0f1c32] transition-colors">
            GitHub
          </Link>
        </div>

      </div>
    </footer>
  );
}