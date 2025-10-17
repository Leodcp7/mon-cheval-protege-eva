import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      id="nav"
      className={`fixed top-0 left-0 w-full z-50 transition-colors backdrop-blur-md ${
        scrolled ? "bg-white/70 shadow-sm" : "bg-white/30"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <img
            src="/logo-rocket.svg"
            alt="Logo Mon Cheval Protégé"
            className="h-8 w-auto"
          />
          <div className="hidden md:flex space-x-6 text-sm font-medium text-textDark">
            <a href="#features" className="hover:text-primary">Fonctionnalités</a>
            <a href="#how" className="hover:text-primary">Comment ça marche</a>
            <a href="#testimonials" className="hover:text-primary">Témoignages</a>
            <a href="#faq" className="hover:text-primary">FAQ</a>
          </div>
        </div>
        <button className="rounded-full border border-primary/12 bg-white/50 backdrop-blur-md px-5 py-2.5 text-textDark shadow-sm hover:bg-white/70 transition">
          ✉︎ Obtenir un devis
        </button>
      </div>
    </nav>
  );
}
