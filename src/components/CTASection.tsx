import { Button } from "@/components/ui/button";
import mandala from "@/assets/mandala-decoration.png";

const CTASection = () => {
  return (
    <section id="contato" className="py-24 bg-primary/5 relative overflow-hidden">
      <img
        src={mandala}
        alt=""
        className="absolute -left-20 -bottom-20 w-60 h-60 opacity-10 animate-float"
        loading="lazy"
        width={800}
        height={800}
      />
      <img
        src={mandala}
        alt=""
        className="absolute -right-20 -top-20 w-48 h-48 opacity-5"
        loading="lazy"
        width={800}
        height={800}
      />

      <div className="container mx-auto text-center max-w-3xl relative z-10">
        <p className="text-sm font-body uppercase tracking-[0.3em] text-primary mb-4">
          Sua Jornada Começa Agora
        </p>
        <h2 className="text-3xl md:text-5xl font-display font-light text-foreground mb-6">
          Você merece viver em{" "}
          <span className="italic font-semibold text-primary">inteireza</span>
        </h2>
        <p className="text-lg font-body text-muted-foreground leading-relaxed mb-4">
          Não espere mais para se encontrar. Dê o primeiro passo em direção à mulher
          que você sempre soube que poderia ser. Eu estarei aqui para caminhar ao seu lado.
        </p>
        <p className="text-base font-body text-foreground font-medium mb-10">
          🏵️ Corpo • Mente • Emoção • Espírito
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="lg" className="text-base px-12 py-7" asChild>
            <a
              href="https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre a mentoria Inteireza Feminina."
              target="_blank"
              rel="noopener noreferrer"
            >
              Fale Comigo no WhatsApp
            </a>
          </Button>
          <Button variant="warmOutline" size="lg" className="text-base px-12 py-7" asChild>
            <a href="#mentoria">Saiba Mais Sobre a Mentoria</a>
          </Button>
        </div>

        <p className="text-sm font-body text-muted-foreground mt-8 italic">
          "A maior revolução que uma mulher pode fazer é escolher a si mesma."
        </p>
      </div>
    </section>
  );
};

export default CTASection;
