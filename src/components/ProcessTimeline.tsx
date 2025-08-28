import React from 'react';
import { Lightbulb, PenTool, Code2, Rocket, Settings, CheckCircle } from 'lucide-react';

const ProcessTimeline = () => {
  const steps = [
    {
      icon: Lightbulb,
      title: "Ideação",
      description: "Entendemos sua visão e definimos objetivos claros",
      duration: "1-2 dias",
      activities: ["Briefing detalhado", "Análise de requisitos", "Definição de escopo"],
      position: { desktop: { top: "5%", right: "5%" }, mobile: 0 }
    },
    {
      icon: PenTool,
      title: "Design",
      description: "Criamos interfaces incríveis e experiências únicas",
      duration: "3-5 dias",
      activities: ["Wireframes", "Protótipos", "Design System"],
      position: { desktop: { top: "25%", left: "5%" }, mobile: 1 }
    },
    {
      icon: Code2,
      title: "Desenvolvimento",
      description: "Codificamos com as melhores práticas e tecnologias",
      duration: "2-4 semanas",
      activities: ["Frontend", "Backend", "Integrações"],
      position: { desktop: { top: "45%", right: "10%" }, mobile: 2 }
    },
    {
      icon: Settings,
      title: "Testes",
      description: "Garantimos qualidade e performance máxima",
      duration: "3-5 dias",
      activities: ["Testes unitários", "Testes de integração", "QA"],
      position: { desktop: { top: "65%", left: "10%" }, mobile: 3 }
    },
    {
      icon: Rocket,
      title: "Deploy",
      description: "Colocamos sua solução no ar com segurança",
      duration: "1-2 dias",
      activities: ["Configuração servidores", "Deploy produção", "Monitoramento"],
      position: { desktop: { top: "85%", right: "15%" }, mobile: 4 }
    },
    {
      icon: CheckCircle,
      title: "Suporte",
      description: "Acompanhamos e mantemos sua aplicação sempre atualizada",
      duration: "Contínuo",
      activities: ["Manutenção", "Updates", "Suporte técnico"],
      position: { desktop: { bottom: "5%", left: "15%" }, mobile: 5 }
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-background to-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 holographic">
            Nosso Processo
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Uma metodologia comprovada que garante resultados excepcionais
          </p>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden space-y-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={step.title} className="relative">
                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-16 bg-gradient-to-b from-primary to-secondary opacity-50 z-0" />
                )}
                
                {/* Step Card */}
                <div className="flex items-start space-x-4 relative z-10">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary p-3 animate-gentle-glow">
                      <IconComponent className="w-full h-full text-white" />
                    </div>
                    <div className="text-center mt-2">
                      <span className="text-xs font-bold text-primary">
                        {index + 1}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex-1 bg-card border border-primary/20 rounded-xl p-6 hover:border-primary/40 transition-all duration-300 min-w-0" style={{ width: '280px' }}>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground mb-3 leading-relaxed">
                      {step.description}
                    </p>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium text-secondary">
                        Duração: {step.duration}
                      </span>
                    </div>
                    <div className="space-y-2">
                      {step.activities.map((activity, activityIndex) => (
                        <div key={activity} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span className="text-sm text-muted-foreground">{activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:block relative h-[800px]">
          {/* SVG Lines */}
          <svg className="absolute inset-0 w-full h-full z-0" preserveAspectRatio="none">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
                <stop offset="50%" stopColor="hsl(var(--secondary))" stopOpacity="0.8" />
                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            
            {/* Connecting lines between steps */}
            {steps.slice(0, -1).map((step, index) => {
              const nextStep = steps[index + 1];
              const x1 = step.position.desktop.right ? `${100 - parseInt(step.position.desktop.right)}%` : 
                         step.position.desktop.left ? `${parseInt(step.position.desktop.left)}%` : '50%';
              const y1 = step.position.desktop.top ? `${parseInt(step.position.desktop.top)}%` : 
                         step.position.desktop.bottom ? `${100 - parseInt(step.position.desktop.bottom)}%` : '50%';
              const x2 = nextStep.position.desktop.right ? `${100 - parseInt(nextStep.position.desktop.right)}%` : 
                         nextStep.position.desktop.left ? `${parseInt(nextStep.position.desktop.left)}%` : '50%';
              const y2 = nextStep.position.desktop.top ? `${parseInt(nextStep.position.desktop.top)}%` : 
                         nextStep.position.desktop.bottom ? `${100 - parseInt(nextStep.position.desktop.bottom)}%` : '50%';
              
              return (
                <line
                  key={index}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="url(#lineGradient)"
                  strokeWidth="3"
                  strokeDasharray="5,5"
                  className="animate-pulse"
                  style={{ animationDelay: `${index * 0.5}s` }}
                />
              );
            })}
          </svg>

          {/* Step Cards */}
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div
                key={step.title}
                className="absolute group animate-fade-in"
                style={{
                  ...step.position.desktop,
                  animationDelay: `${index * 0.2}s`,
                  width: '280px'
                }}
              >
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-sm z-20 animate-gentle-glow">
                  {index + 1}
                </div>
                
                {/* Card */}
                <div className="bg-card border border-primary/20 rounded-xl p-6 hover:border-primary/40 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 relative z-10">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary p-3 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-full h-full text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {step.title}
                      </h3>
                      <span className="text-sm text-secondary font-medium">
                        {step.duration}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  
                  <div className="space-y-2">
                    {step.activities.map((activity, activityIndex) => (
                      <div key={activity} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary group-hover:bg-secondary transition-colors" />
                        <span className="text-sm text-muted-foreground">{activity}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;