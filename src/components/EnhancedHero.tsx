import { Link } from "react-router-dom";
import { ArrowRight, Play, Sparkles, Zap, Code2, Star } from "lucide-react";
import FuturisticButton from "@/components/FuturisticButton";
import { analytics } from "@/components/Analytics";

const EnhancedHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background"></div>
      <div className="absolute inset-0 bg-[var(--gradient-hero)]"></div>
      <div className="absolute inset-0 bg-[var(--gradient-mesh)] opacity-30"></div>
      
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(147,71,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(147,71,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-grid-pulse"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="text-center max-w-6xl mx-auto">
          <div className="space-y-8 animate-slide-up">
            {/* Enhanced Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium animate-gentle-glow">
              <Star className="w-4 h-4 mr-2" />
              Transformando Ideias em Realidade Digital
              <Sparkles className="w-4 h-4 ml-2" />
            </div>
            
            {/* Main heading enhanced */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-bold leading-tight">
              <span className="cyber-text block">Desenvolvimento</span>
              <span className="holographic block pb-2">Sob Demanda</span>
              <span className="text-2xl md:text-3xl lg:text-4xl font-normal text-muted-foreground block mt-4">
                Tecnologia de ponta • Design futurista • Resultados garantidos
              </span>
            </h1>
            
            {/* Enhanced subheading */}
            <div className="max-w-4xl mx-auto space-y-4 animate-slide-up animate-delay-100">
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Criamos soluções digitais extraordinárias que transformam seu negócio.
                <span className="text-primary font-medium block mt-2">
                  Da ideia ao deploy em tempo recorde ⚡
                </span>
              </p>
              
              {/* Technology badges */}
              <div className="flex flex-wrap justify-center gap-3 mt-6">
                {["React", "Next.js", "Node.js", "TypeScript", "AI/ML", "Cloud"].map((tech) => (
                  <div key={tech} className="px-3 py-1 bg-secondary/20 border border-secondary/30 rounded-full text-xs text-secondary font-medium">
                    {tech}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Enhanced CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up animate-delay-200">
              <Link to="/solicitar-orcamento">
                <FuturisticButton 
                  variant="primary" 
                  size="lg" 
                  className="animate-gentle-glow group px-8 py-4" 
                  onClick={() => analytics.trackClick('hero_cta', {
                    section: 'hero',
                    action: 'solicitar_orcamento'
                  })}
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  Iniciar Projeto Agora
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </FuturisticButton>
              </Link>
              
              <Link to="/portfolio">
                <FuturisticButton variant="outline" size="lg" className="group">
                  <Play className="w-5 h-5 mr-2" />
                  Ver Portfolio
                </FuturisticButton>
              </Link>
            </div>
            
            {/* Enhanced Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto pt-16 animate-slide-up animate-delay-300">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-orbitron font-bold text-primary mb-2">150+</div>
                <div className="text-sm text-muted-foreground">Projetos Entregues</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-orbitron font-bold text-secondary mb-2">99%</div>
                <div className="text-sm text-muted-foreground">Satisfação Cliente</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-orbitron font-bold text-primary mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Anos Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-orbitron font-bold text-secondary mb-2">24h</div>
                <div className="text-sm text-muted-foreground">Tempo Resposta</div>
              </div>
            </div>

            {/* Trust indicators */}
            <div className="pt-12 animate-slide-up animate-delay-400">
              <p className="text-sm text-muted-foreground mb-4">Tecnologias que dominamos</p>
              <div className="flex justify-center items-center space-x-8 opacity-60">
                {[Code2, Zap, Sparkles].map((Icon, index) => (
                  <Icon key={index} className="w-8 h-8 text-primary animate-gentle-glow" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Main floating elements */}
        <div className="absolute top-32 left-10 animate-float">
          <div className="w-20 h-20 border-2 border-primary/40 rounded-full cyber-glass animate-gentle-glow" />
        </div>
        <div className="absolute bottom-32 right-10 animate-orbital-motion">
          <div className="w-16 h-16 bg-gradient-primary rounded-lg rotate-45 opacity-60" />
        </div>
        <div className="absolute top-1/2 left-5 animate-matrix-drift">
          <div className="w-12 h-12 bg-gradient-secondary rounded-full opacity-70" />
        </div>
        <div className="absolute top-32 right-20 animate-gentle-glow">
          <Zap className="w-10 h-10 text-secondary opacity-80" />
        </div>
        
        {/* Additional particles */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div 
            key={i} 
            className="absolute w-2 h-2 bg-primary rounded-full opacity-60 animate-particle-float" 
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default EnhancedHero;