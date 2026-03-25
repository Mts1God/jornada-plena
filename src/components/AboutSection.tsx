import mentorPortrait from "@/assets/mentor-portrait.jpg";
import mandala from "@/assets/mandala-decoration.png";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 bg-secondary/50 relative overflow-hidden">
      {/* Decorative mandala */}
      <img
        src={mandala}
        alt=""
        className="absolute -right-32 -top-32 w-80 h-80 opacity-10 animate-float"
        loading="lazy"
        width={800}
        height={800}
      />

      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Portrait */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={mentorPortrait}
                alt="Mentora - Retrato profissional"
                className="w-full h-auto object-cover"
                loading="lazy"
                width={1024}
                height={1024}
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-blush/50 -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-lilac/50 -z-10" />
          </div>

          {/* Bio */}
          <div className="space-y-6">
            <p className="text-sm font-body uppercase tracking-[0.3em] text-primary">
              Sobre a Mentora
            </p>
            <h2 className="text-3xl md:text-5xl font-display font-light text-foreground">
              Uma vida dedicada à{" "}
              <span className="italic font-semibold text-primary">transformação feminina</span>
            </h2>
            <p className="text-base font-body text-muted-foreground leading-relaxed">
              Com mais de 20 anos de experiência em desenvolvimento humano, formação internacional
              em comportamento, inteligência emocional e espiritualidade aplicada, já impactei
              milhares de mulheres no Brasil e na América Latina através de programas de mentoria
              profundos e transformadores.
            </p>
            <p className="text-base font-body text-muted-foreground leading-relaxed">
              Minha missão é guiar mulheres a desbloquearem seu potencial, fortalecerem sua
              identidade e viverem com propósito. Acredito que toda mulher carrega dentro de si
              uma força extraordinária — ela só precisa ser lembrada disso.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
              <div className="text-center">
                <p className="text-3xl font-display font-bold text-primary">20+</p>
                <p className="text-xs font-body text-muted-foreground mt-1">Anos de experiência</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-display font-bold text-primary">5.000+</p>
                <p className="text-xs font-body text-muted-foreground mt-1">Mulheres transformadas</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-display font-bold text-primary">12</p>
                <p className="text-xs font-body text-muted-foreground mt-1">Países alcançados</p>
              </div>
            </div>

            {/* Mission, Vision, Values */}
            <div className="space-y-4 pt-4">
              <div className="bg-background rounded-xl p-5">
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">Missão</h3>
                <p className="text-sm font-body text-muted-foreground">
                  Despertar mulheres para a vida em inteireza, integrando corpo, mente, emoção e espírito.
                </p>
              </div>
              <div className="bg-background rounded-xl p-5">
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">Visão</h3>
                <p className="text-sm font-body text-muted-foreground">
                  Um mundo onde cada mulher vive conectada à sua essência, com clareza e autenticidade.
                </p>
              </div>
              <div className="bg-background rounded-xl p-5">
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">Valores</h3>
                <p className="text-sm font-body text-muted-foreground">
                  Autenticidade, acolhimento, profundidade, transformação e amor próprio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
