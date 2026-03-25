import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-woman.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Mulher em paz interior"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/30" />
      </div>

      <div className="container mx-auto relative z-10 pt-24">
        <div className="max-w-2xl space-y-8 animate-fade-in-up">
          <p className="text-sm font-body uppercase tracking-[0.3em] text-primary">
            🌟 Integração do Autocuidado na Vida Diária
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-light leading-tight text-foreground">
            Desperte a{" "}
            <span className="font-semibold italic text-primary">mulher inteira</span>{" "}
            que existe em você
          </h1>

          <p className="text-lg md:text-xl font-body font-light text-muted-foreground leading-relaxed max-w-xl">
            Uma jornada profunda de reconexão com seu corpo, mente, emoção e espírito.
            Descubra sua verdadeira essência e viva com propósito, leveza e autenticidade.
          </p>

          <p className="text-base font-body text-gold font-medium tracking-wide">
            🏵️ Corpo • Mente • Emoção • Espírito
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button variant="hero" size="lg" className="text-base px-10 py-6" asChild>
              <a href="#contato">Iniciar Minha Jornada</a>
            </Button>
            <Button variant="warmOutline" size="lg" className="text-base px-10 py-6" asChild>
              <a href="#sobre">Conheça o Método</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
