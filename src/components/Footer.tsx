import { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    const revealItems =
      document.querySelectorAll<HTMLElement>(".scroll-reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elem = entry.target as HTMLElement;
            elem.classList.add("animate-fade-in-up");
            elem.style.opacity = "1";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    revealItems.forEach((item) => {
      item.style.opacity = "0";
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <footer className="py-12 bg-foreground">
      <div className="container mx-auto text-center space-y-4">
        <a
          href="#inicio"
          className="scroll-reveal font-display text-2xl font-semibold text-primary-foreground tracking-wide"
        >
          Vida <span className="text-primary">Lirica</span>
        </a>
        <p className="scroll-reveal text-sm font-body text-primary-foreground/60">
          🏵️ Corpo • Mente • Emoção • Espírito
        </p>
        <div className="scroll-reveal flex justify-center gap-6 text-sm font-body text-primary-foreground/50">
          <a href="#sobre" className="hover:text-primary transition-colors">
            Sobre
          </a>
          <a href="#mentoria" className="hover:text-primary transition-colors">
            Mentoria
          </a>
          <a href="#blog" className="hover:text-primary transition-colors">
            Blog
          </a>
          <a href="#contato" className="hover:text-primary transition-colors">
            Contato
          </a>
        </div>
        <p className="scroll-reveal text-xs font-body text-primary-foreground/40 pt-4">
          © {new Date().getFullYear()} Vida Lirica. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
