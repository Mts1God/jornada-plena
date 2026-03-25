import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Para Quem", href: "#para-quem" },
  { label: "Mentoria", href: "#mentoria" },
  { label: "Jornada", href: "#jornada" },
  { label: "Blog", href: "#blog" },
  { label: "Depoimentos", href: "#depoimentos" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);

  useEffect(() => {
    const onScroll = () => setHasShadow(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md transition-all duration-300 ${hasShadow ? "shadow-xl border-b border-border/50" : "border-b border-border/20"}`}
    >
      <div className="container mx-auto flex items-center justify-between py-4">
        <a
          href="#inicio"
          className="font-display text-2xl font-semibold text-foreground tracking-wide"
        >
          Vida <span className="text-primary">Lirica</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-body text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <Button variant="hero" size="lg" asChild>
            <a href="#contato">Iniciar Minha Jornada</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-t border-border px-6 pb-6 animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm font-body text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button variant="hero" size="lg" className="w-full mt-4" asChild>
            <a href="#contato">Iniciar Minha Jornada</a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
