import { Heart, Frown, Compass, Sparkles, Shield, Sun } from "lucide-react";

const painPoints = [
  { icon: Compass, text: "Sente falta de propósito e direção na vida" },
  { icon: Frown, text: "Lida com ansiedade e sobrecarga emocional" },
  { icon: Heart, text: "Está desconectada de si mesma e de suas emoções" },
  { icon: Shield, text: "Enfrenta baixa autoestima e insegurança" },
  { icon: Sparkles, text: "Busca mais clareza, leveza e autenticidade" },
  { icon: Sun, text: "Deseja viver com mais presença e plenitude" },
];

const WhoIsForSection = () => {
  return (
    <section id="para-quem" className="py-24 bg-background">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-body uppercase tracking-[0.3em] text-primary mb-4">
            Para Quem É
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-light text-foreground mb-6">
            Essa jornada foi feita para{" "}
            <span className="italic font-semibold text-primary">você</span>
          </h2>
          <p className="text-base font-body text-muted-foreground leading-relaxed">
            Se você é uma mulher que sente que algo dentro de si precisa mudar, que existe uma
            versão mais autêntica e plena esperando para ser vivida — este é o seu lugar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-full bg-blush/50 flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors duration-500">
                <point.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="font-body text-foreground leading-relaxed">{point.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blush/30 rounded-3xl p-10 md:p-14 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-display font-light text-foreground mb-4">
            O que você pode esperar dessa transformação:
          </h3>
          <div className="grid sm:grid-cols-2 gap-4 mt-8 text-left">
            {[
              "Clareza sobre quem você realmente é",
              "Equilíbrio emocional e paz interior",
              "Conexão profunda com sua essência",
              "Autoconfiança e amor próprio fortalecidos",
              "Propósito e direção claros para sua vida",
              "Leveza e autenticidade no dia a dia",
            ].map((benefit, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-primary mt-1">✦</span>
                <p className="font-body text-sm text-foreground">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoIsForSection;
