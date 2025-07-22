import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Code, 
  Smartphone, 
  Cloud, 
  Zap, 
  Shield, 
  Cpu,
  CheckCircle,
  Star,
  Play
} from "lucide-react";
import FuturisticButton from "@/components/FuturisticButton";
import SEOHead from "@/components/SEOHead";

const Home = () => {
  const services = [
    {
      icon: Code,
      title: "Desenvolvimento Web",
      description: "Sites e aplicações web modernas com tecnologia de ponta",
      delay: "0s"
    },
    {
      icon: Smartphone,
      title: "Apps Mobile",
      description: "Aplicativos nativos e híbridos para iOS e Android",
      delay: "0.1s"
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Infraestrutura escalável e automatizada na nuvem",
      delay: "0.2s"
    },
    {
      icon: Cpu,
      title: "IA & Automação",
      description: "Soluções inteligentes com Machine Learning",
      delay: "0.3s"
    },
  ];

  const features = [
    "Tecnologia de última geração",
    "Equipe especializada",
    "Suporte 24/7",
    "Entrega no prazo",
    "Código limpo e documentado",
    "Testes automatizados"
  ];

  const testimonials = [
    {
      name: "Carlos Silva",
      company: "TechCorp",
      content: "A Codify transformou nossa ideia em um produto incrível. Superaram todas as expectativas!",
      rating: 5
    },
    {
      name: "Ana Costa",
      company: "StartupXYZ",
      content: "Profissionalismo e qualidade excepcionais. Recomendo fortemente!",
      rating: 5
    },
    {
      name: "Pedro Santos",
      company: "InnovateLab",
      content: "Desenvolveram nossa plataforma em tempo recorde sem comprometer a qualidade.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Codify | Desenvolvimento de Software Personalizado e Inovador"
        description="A Codify é uma empresa brasileira especializada em desenvolvimento de software sob demanda, aplicativos mobile, APIs e soluções digitais inovadoras. Transforme sua ideia em realidade!"
        keywords="desenvolvimento de software, empresa de software, software sob demanda, soluções digitais, software personalizado, Codify"
        canonicalUrl="https://codify.dev.br/"
        schema={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Codify - Desenvolvimento de Software Personalizado",
          "description": "Transformamos suas ideias em soluções digitais inovadoras com tecnologia de ponta e design futurista.",
          "url": "https://codify.dev.br/"
        }}
      />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Static gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="space-y-8 animate-slide-up">
              <h1 className="text-5xl md:text-7xl font-orbitron font-bold leading-tight">
                <span className="cyber-text">Desenvolvimento de Software Personalizado para o Futuro</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-slide-up animate-delay-100">
                Transformamos suas ideias em soluções digitais inovadoras com 
                tecnologia de ponta e design futurista.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up animate-delay-200">
                <Link to="/solicitar-orcamento">
                  <FuturisticButton variant="primary" size="lg" className="animate-gentle-glow">
                    Solicitar Orçamento
                    <ArrowRight className="w-5 h-5" />
                  </FuturisticButton>
                </Link>
                
                <FuturisticButton variant="outline" size="lg">
                  <Play className="w-5 h-5" />
                  Ver Demo
                </FuturisticButton>
              </div>
            </div>
          </div>
        </div>

        {/* Animated floating elements */}
        <div className="absolute top-20 left-10 floating-element">
          <div className="w-20 h-20 border-2 border-primary/40 rounded-full cyber-glass animate-gentle-glow" />
        </div>
        <div className="absolute bottom-20 right-10 floating-element">
          <div className="w-16 h-16 bg-gradient-primary rounded-lg rotate-45 opacity-60 animate-orbital-motion" />
        </div>
        <div className="absolute top-1/2 left-5 floating-element">
          <div className="w-12 h-12 bg-gradient-secondary rounded-full opacity-70 animate-matrix-drift" />
        </div>
        <div className="absolute top-1/3 right-1/4 floating-element">
          <Zap className="w-10 h-10 text-secondary opacity-80 animate-gentle-glow" />
        </div>
        <div className="absolute bottom-1/3 left-1/3 floating-element">
          <div className="w-8 h-8 border border-secondary/60 rotate-45 rounded-sm opacity-60 animate-float" />
        </div>
        
        {/* Additional floating particles */}
        <div className="absolute top-10 right-20 floating-element">
          <div className="w-6 h-6 bg-neon-cyan rounded-full opacity-50 animate-orbital-motion" style={{ animationDelay: '-8s' }} />
        </div>
        <div className="absolute bottom-32 left-20 floating-element">
          <div className="w-4 h-4 bg-primary rounded-full opacity-60 animate-matrix-drift" style={{ animationDelay: '-15s' }} />
        </div>
        <div className="absolute top-2/3 right-10 floating-element">
          <div className="w-10 h-10 border border-secondary/40 rounded-full animate-gentle-glow" style={{ animationDelay: '-3s' }} />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 cyber-text">
              Nossos Serviços
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Soluções completas em desenvolvimento de software para impulsionar seu negócio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group cyber-glass p-8 rounded-2xl hover-glow transition-all duration-500 cursor-pointer animate-fade-scale"
                style={{ animationDelay: service.delay }}
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-full cyber-glass flex items-center justify-center group-hover:glow-intense transition-all duration-500">
                    <service.icon className="w-8 h-8 text-primary group-hover:text-secondary transition-colors duration-300" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-dark">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-orbitron font-bold holographic">
                Por que escolher a Codify?
              </h2>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Combinamos expertise técnica com design inovador para entregar 
                soluções que superam expectativas.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div
                    key={feature}
                    className="flex items-center space-x-3 animate-fade-scale"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <Link to="/sobre">
                  <FuturisticButton variant="secondary" size="lg">
                    Nossa História
                    <ArrowRight className="w-5 h-5" />
                  </FuturisticButton>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square glass rounded-3xl p-8 flex items-center justify-center">
                <div className="text-center space-y-6">
                  <div className="w-32 h-32 mx-auto rounded-full bg-gradient-primary flex items-center justify-center animate-gentle-glow">
                    <Shield className="w-16 h-16 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold">100% Seguro</h3>
                  <p className="text-muted-foreground">
                    Código limpo, testes automatizados e documentação completa
                  </p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-primary/30 rounded-full animate-gentle-glow" />
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-secondary/20 rounded-lg rotate-45 animate-float" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 holographic">
              O que nossos clientes dizem
            </h2>
            <p className="text-xl text-muted-foreground">
              Histórias reais de sucesso e transformação digital
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="glass p-8 rounded-2xl hover:scale-105 transition-all duration-500 animate-fade-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-secondary fill-current" />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-semibold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-dark relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 holographic">
            Pronto para o futuro?
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Vamos transformar sua ideia em uma solução digital extraordinária. 
            Entre em contato conosco hoje mesmo!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/solicitar-orcamento">
              <FuturisticButton variant="primary" size="lg" glow>
                Começar Projeto
                <ArrowRight className="w-5 h-5" />
              </FuturisticButton>
            </Link>
            
            <Link to="/contato">
              <FuturisticButton variant="outline" size="lg">
                Falar Conosco
              </FuturisticButton>
            </Link>
          </div>
        </div>

        {/* Background effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-gentle-glow" />
          <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-gentle-glow" style={{ animationDelay: '2s' }} />
        </div>
      </section>
    </div>
  );
};

export default Home;