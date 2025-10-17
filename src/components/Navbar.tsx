import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all ${scrolled ? "bg-white/70 backdrop-blur-lg shadow-sm" : "bg-white/30 backdrop-blur-md"} border-b border-primary/10`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2">
          <span className="h-6 w-6 rounded-full bg-gradient-to-tr from-primary to-primary2 shadow-glow inline-flex items-center justify-center">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="#fff"><path d="M3 21l9-18 9 18-9-4z"/></svg>
          </span>
          <span className="font-semibold text-ink">Flowline</span>
        </Link>

        <ul className="hidden md:flex items-center gap-7 text-body">
          <li><a href="#features" className="hover:text-ink">Features</a></li>
          <li><a href="#work" className="hover:text-ink">How it works</a></li>
          <li><a href="#testimonials" className="hover:text-ink">Testimonials</a></li>
          <li><a href="#faq" className="hover:text-ink">FAQ</a></li>
        </ul>

        <a href="#demo" className="btn-secondary border-primary/20 bg-white/70">✉︎ Launch with Flowline</a>
      </nav>
    </header>
  );
}
