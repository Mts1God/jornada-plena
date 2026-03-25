import wellnessImage from "@/assets/wellness-still-life.jpg";

const pillars = [
  {
    emoji: "🧘‍♀️",
    title: "Corpo",
    description: "Reconexão com seu corpo como templo sagrado. Práticas de presença, respiração e cuidado físico consciente.",
    color: "bg-warm/50",
  },
  {
    emoji: "🧠",
    title: "Mente",
    description: "Reprogramação de crenças limitantes, clareza mental e desenvolvimento de uma mentalidade de crescimento.",
    color: "bg-lilac/50",
  },
  {
    emoji: "💗",
    title: "Emoção",
    description: "Inteligência emocional, acolhimento das emoções e desenvolvimento de equilíbrio e resiliência interior.",
    color: "bg-blush/50",
  },
  {
    emoji: "✨",
    title: "Espírito",
    description: "Conexão com sua essência espiritual, propósito de vida e alinhamento com algo maior que você.",
    color: "bg-secondary",
  },
];

const outcomes = [
  "Autoconhecimento profundo e duradouro",
  "Paz interior e equilíbrio emocional",
  "Clareza sobre seu propósito de vida",
  "Relacionamentos mais saudáveis e autênticos",
  "Confiança e amor próprio fortalecidos",
  "Uma vida vivida com inteireza e presença",
];

const JourneySection = () => {
  return (
    <section id="jornada" className="py-24 bg-background">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-body uppercase tracking-[0.3em] text-primary mb-4">
            A Jornada de Transformação
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-light text-foreground mb-6">
            O Método{" "}
            <span className="italic font-semibold text-primary">Inteireza Feminina</span>
          </h2>
          <p className="text-base font-body text-muted-foreground leading-relaxed">
            Uma abordagem integrada que honra todas as dimensões do ser feminino,
            guiando você através de quatro pilares fundamentais.
          </p>
        </div>

        {/* 4 Pillars */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className={`${pillar.color} rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-500 hover:-translate-y-1`}
            >
              <span className="text-4xl mb-4 block">{pillar.emoji}</span>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                {pillar.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Outcomes */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-display text-foreground">
              Resultados que você pode esperar
            </h3>
            <p className="font-body text-muted-foreground leading-relaxed">
              Ao final dessa jornada, você terá vivido uma transformação real e profunda.
              Não apenas no que você faz, mas em quem você é.
            </p>
            <div className="space-y-3">
              {outcomes.map((outcome, i) => (
                <div key={i} className="flex items-center gap-3 bg-card rounded-xl px-5 py-3 border border-border/50">
                  <span className="text-primary text-sm">✦</span>
                  <p className="font-body text-sm text-foreground">{outcome}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src={wellnessImage}
              alt="Bem-estar e autocuidado"
              className="w-full h-auto object-cover"
              loading="lazy"
              width={1200}
              height={800}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
