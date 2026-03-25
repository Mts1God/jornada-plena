import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ana Carolina S.",
    location: "São Paulo, SP",
    text: "Essa mentoria mudou minha vida. Eu estava completamente perdida, sem saber quem eu era de verdade. Hoje, me sinto inteira, presente e cheia de propósito. Sou eternamente grata.",
  },
  {
    name: "Mariana L.",
    location: "Belo Horizonte, MG",
    text: "Pela primeira vez, senti que alguém realmente me enxergou. O processo foi profundo, amoroso e transformador. Voltei a acreditar em mim e na minha capacidade de viver com leveza.",
  },
  {
    name: "Fernanda R.",
    location: "Curitiba, PR",
    text: "Eu não sabia que era possível sentir tanta paz e clareza. O método Inteireza Feminina me reconectou com partes de mim que eu tinha esquecido. Recomendo de coração.",
  },
  {
    name: "Juliana M.",
    location: "Rio de Janeiro, RJ",
    text: "Cheguei à mentoria cheia de ansiedade e sem direção. Saí com uma nova versão de mim — mais forte, mais leve, mais verdadeira. Foi a melhor decisão que já tomei.",
  },
  {
    name: "Patrícia A.",
    location: "Recife, PE",
    text: "O acolhimento e a profundidade dessa jornada são únicos. Não é só sobre autoconhecimento — é sobre renascer. Hoje vivo de um jeito que eu nem sabia que era possível.",
  },
  {
    name: "Camila D.",
    location: "Porto Alegre, RS",
    text: "Depois de anos buscando respostas fora, finalmente encontrei dentro de mim. A mentoria me deu as ferramentas e o apoio para essa reconexão. Sou outra mulher.",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="py-24 bg-background">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-body uppercase tracking-[0.3em] text-primary mb-4">
            Depoimentos
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-light text-foreground mb-6">
            Histórias reais de{" "}
            <span className="italic font-semibold text-primary">transformação</span>
          </h2>
          <p className="text-base font-body text-muted-foreground leading-relaxed">
            Mulheres que decidiram escolher a si mesmas e viveram mudanças profundas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 border border-border/50 hover:shadow-lg transition-all duration-500 relative"
            >
              <Quote className="w-8 h-8 text-primary/20 absolute top-6 right-6" />
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blush flex items-center justify-center">
                  <span className="text-sm font-display font-bold text-primary">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-body text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="font-body text-xs text-muted-foreground">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
