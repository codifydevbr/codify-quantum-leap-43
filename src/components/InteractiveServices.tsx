import { useState } from "react";
import { Code, Smartphone, Cloud, Cpu, ArrowRight, Zap, Shield, Palette, Database } from "lucide-react";
import FuturisticButton from "@/components/FuturisticButton";
import { Link } from "react-router-dom";

const InteractiveServices = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: Code,
      title: "Desenvolvimento Web",
      description: "Sites e aplicações web modernas com tecnologia de ponta",
      features: ["React/Next.js", "TypeScript", "PWA", "SEO Otimizado"],
      color: "primary",
      delay: "0s"
    },
    {
      icon: Smartphone,
      title: "Apps Mobile",
      description: "Aplicativos nativos e híbridos para iOS e Android",
      features: ["React Native", "Flutter", "App Store", "Push Notifications"],
      color: "secondary",
      delay: "0.1s"
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Infraestrutura escalável e automatizada na nuvem",
      features: ["AWS/Azure", "Docker", "CI/CD", "Microserviços"],
      color: "neon-purple",
      delay: "0.2s"
    },
    {
      icon: Cpu,
      title: "IA & Automação",
      description: "Soluções inteligentes com Machine Learning",
      features: ["ChatBots", "Análise de Dados", "APIs IA", "Automação"],
      color: "neon-cyan",
      delay: "0.3s"
    },
    {
      icon: Palette,
      title: "UX/UI Design",
      description: "Interfaces incríveis que encantam usuários",
      features: ["Design System", "Prototipagem", "User Research", "Figma"],
      color: "neon-pink",
      delay: "0.4s"
    },
    {
      icon: Database,
      title: "APIs & Integrações",
      description: "Conecte sistemas e maximize eficiência",
      features: ["REST APIs", "GraphQL", "Webhooks", "Third-party"],
      color: "neon-green",
      delay: "0.5s"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 cyber-text">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluções completas em desenvolvimento de software para impulsionar seu negócio. 
            Da ideia ao produto final, cuidamos de tudo.
          </p>
        </div>

        {/* Interactive grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative overflow-hidden cyber-glass p-8 rounded-2xl hover-glow transition-all duration-500 cursor-pointer animate-fade-scale ${
                activeService === index ? 'ring-2 ring-primary glow-primary' : ''
              }`}
              style={{ animationDelay: service.delay }}
              onMouseEnter={() => setActiveService(index)}
            >
              {/* Service icon */}
              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-full cyber-glass flex items-center justify-center group-hover:glow-intense transition-all duration-500">
                  <service.icon className="w-8 h-8 text-primary group-hover:text-secondary transition-colors duration-300" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Service content */}
              <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <div key={feature} className="flex items-center space-x-2 text-sm">
                    <div className="w-2 h-2 bg-secondary rounded-full" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Action button */}
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <FuturisticButton variant="outline" size="sm" className="w-full">
                  Saiba Mais
                  <ArrowRight className="w-4 h-4" />
                </FuturisticButton>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl" />
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            Não encontrou o que procura? Temos expertise em tecnologias diversas.
          </p>
          <Link to="/servicos">
            <FuturisticButton variant="secondary" size="lg">
              Ver Todos os Serviços
              <ArrowRight className="w-5 h-5" />
            </FuturisticButton>
          </Link>
        </div>
      </div>

      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-gentle-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl animate-gentle-glow" style={{ animationDelay: '2s' }} />
      </div>
    </section>
  );
};

export default InteractiveServices;