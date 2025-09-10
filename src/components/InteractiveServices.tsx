import { useState } from "react";
import { Code, Smartphone, Cloud, Cpu, ArrowRight, Zap, Shield, Palette, Database, Star, CheckCircle } from "lucide-react";
import FuturisticButton from "@/components/FuturisticButton";
import { Link } from "react-router-dom";

const InteractiveServices = () => {
  const [activeService, setActiveService] = useState(0);
  
  const services = [
    {
      icon: Code,
      title: "Desenvolvimento Web",
      description: "Sites e aplicações web modernas que convertem visitantes em clientes",
      features: ["React/Next.js", "TypeScript", "SEO Avançado", "Performance A+"],
      price: "A partir de R$ 2.999",
      color: "primary",
      delay: "0s",
      highlight: "Mais Popular"
    },
    {
      icon: Smartphone,
      title: "Apps Mobile",
      description: "Aplicativos nativos e híbridos para iOS e Android",
      features: ["React Native", "Flutter", "App Store", "Push Notifications"],
      price: "A partir de R$ 4.999",
      color: "secondary",
      delay: "0.1s"
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Infraestrutura escalável e automatizada na nuvem",
      features: ["AWS/Azure", "Docker", "CI/CD", "Monitoramento"],
      price: "A partir de R$ 1.999",
      color: "neon-purple",
      delay: "0.2s"
    },
    {
      icon: Cpu,
      title: "IA & Automação",
      description: "Soluções inteligentes com Machine Learning e IA",
      features: ["ChatBots", "Análise de Dados", "APIs IA", "RPA"],
      price: "A partir de R$ 3.999",
      color: "neon-cyan",
      delay: "0.3s",
      highlight: "Tendência 2024"
    },
    {
      icon: Palette,
      title: "UX/UI Design",
      description: "Interfaces incríveis que encantam e convertem usuários",
      features: ["Design System", "Prototipagem", "User Research", "Figma"],
      price: "A partir de R$ 1.499",
      color: "neon-pink",
      delay: "0.4s"
    },
    {
      icon: Database,
      title: "APIs & Integrações",
      description: "Conecte sistemas e maximize a eficiência do seu negócio",
      features: ["REST APIs", "GraphQL", "Webhooks", "Third-party"],
      price: "A partir de R$ 999",
      color: "neon-green",
      delay: "0.5s"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/10 to-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(147,71,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(147,71,255,0.1)_1px,transparent_1px)] bg-[size:30px_30px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6 animate-gentle-glow">
            <Shield className="w-4 h-4 mr-2" />
            Soluções Completas para seu Negócio
          </div>
          
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-6 holographic">
            Nossos Serviços
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Transformamos ideias em soluções digitais poderosas que impulsionam resultados. 
            <span className="text-primary font-medium block mt-2">
              Da estratégia ao código, cuidamos de tudo para você.
            </span>
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.title}
                className={`group relative bg-card border border-primary/20 rounded-3xl p-8 hover:border-primary/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 animate-fade-in cursor-pointer ${
                  activeService === index ? 'ring-2 ring-primary scale-105' : ''
                }`}
                style={{ animationDelay: service.delay }}
                onClick={() => setActiveService(index)}
              >
                {/* Highlight Badge */}
                {service.highlight && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold px-3 py-1 rounded-full animate-gentle-glow">
                    {service.highlight}
                  </div>
                )}

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity" />
                    <div className="relative w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl p-3 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-full h-full text-white" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Price */}
                  <div className="mb-6 p-3 bg-primary/5 rounded-lg border border-primary/10">
                    <span className="text-sm text-primary font-bold">{service.price}</span>
                  </div>
                  
                  {/* CTA Button */}
                  <Link to="/servicos">
                    <FuturisticButton variant="outline" size="sm" className="w-full group-hover:border-primary group-hover:bg-primary/5">
                      Saiba Mais
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </FuturisticButton>
                  </Link>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4">
            <Link to="/solicitar-orcamento">
              <FuturisticButton variant="primary" size="lg" className="animate-gentle-glow">
                <Star className="w-5 h-5 mr-2" />
                Começar Meu Projeto
              </FuturisticButton>
            </Link>
            <Link to="/contato">
              <FuturisticButton variant="outline" size="lg">
                Conversar com Especialista
              </FuturisticButton>
            </Link>
          </div>
          
          <p className="text-sm text-muted-foreground mt-4">
            💡 Consultoria gratuita • 🚀 Projetos sob medida • ⚡ Entrega rápida
          </p>
        </div>
      </div>
    </section>
  );
};

export default InteractiveServices;