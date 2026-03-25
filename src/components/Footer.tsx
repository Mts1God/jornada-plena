const Footer = () => {
  return (
    <footer className="py-12 bg-foreground">
      <div className="container mx-auto text-center space-y-4">
        <a href="#inicio" className="font-display text-2xl font-semibold text-primary-foreground tracking-wide">
          Inteireza <span className="text-primary">Feminina</span>
        </a>
        <p className="text-sm font-body text-primary-foreground/60">
          🏵️ Corpo • Mente • Emoção • Espírito
        </p>
        <div className="flex justify-center gap-6 text-sm font-body text-primary-foreground/50">
          <a href="#sobre" className="hover:text-primary transition-colors">Sobre</a>
          <a href="#mentoria" className="hover:text-primary transition-colors">Mentoria</a>
          <a href="#blog" className="hover:text-primary transition-colors">Blog</a>
          <a href="#contato" className="hover:text-primary transition-colors">Contato</a>
        </div>
        <p className="text-xs font-body text-primary-foreground/40 pt-4">
          © {new Date().getFullYear()} Inteireza Feminina. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
