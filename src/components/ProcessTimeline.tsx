import { CheckCircle, Clock, Users, Rocket, Search, Palette, Code, TestTube } from "lucide-react";

const ProcessTimeline = () => {
  const steps = [
    {
      icon: Search,
      title: "Descoberta",
      description: "Entendemos profundamente seu negócio, objetivos e requisitos",
      duration: "1-2 semanas",
      activities: ["Briefing detalhado", "Análise de mercado", "Definição do escopo"]
    },
    {
      icon: Palette,
      title: "Design & Prototipagem",
      description: "Criamos wireframes, protótipos e o design visual do projeto",
      duration: "2-3 semanas",
      activities: ["Wireframes", "Protótipos", "Design System", "Testes de usabilidade"]
    },
    {
      icon: Code,
      title: "Desenvolvimento",
      description: "Codificação usando as melhores práticas e tecnologias modernas",
      duration: "4-8 semanas",
      activities: ["Sprint planning", "Desenvolvimento", "Code review", "Integrações"]
    },
    {
      icon: TestTube,
      title: "Testes & QA",
      description: "Testes rigorosos para garantir qualidade e performance",
      duration: "1-2 semanas",
      activities: ["Testes unitários", "Testes de integração", "Performance", "Segurança"]
    },
    {
      icon: Rocket,
      title: "Deploy & Lançamento",
      description: "Publicação do projeto e acompanhamento inicial",
      duration: "1 semana",
      activities: ["Deploy", "Monitoramento", "Treinamento", "Documentação"]
    },
    {
      icon: Users,
      title: "Suporte & Manutenção",
      description: "Suporte contínuo e atualizações conforme necessário",
      duration: "Contínuo",
      activities: ["Suporte 24/7", "Updates", "Melhorias", "Backup"]
    }
  ];

  return (
    <section className="py-12 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 cyber-text">
            Nosso Processo
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Um processo estruturado e transparente que garante a entrega de projetos 
            excepcionais dentro do prazo e orçamento.
          </p>
        </div>

        <div className="relative">
          {/* Enhanced Timeline line with animated dots */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-primary opacity-30 hidden lg:block" />
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-primary opacity-50 hidden lg:block animate-pulse" />
          
          {/* Steps */}
          <div className="space-y-8 lg:space-y-12">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 max-w-lg ${
                  index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'
                }`}>
                  <div className="cyber-glass p-6 rounded-2xl hover-glow transition-all duration-500 group animate-fade-scale border border-primary/20 hover:border-primary/40"
                       style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center text-white animate-gentle-glow">
                        <step.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                          {step.title}
                        </h3>
                        <div className="flex items-center space-x-2 text-sm text-secondary">
                          <Clock className="w-4 h-4" />
                          <span>{step.duration}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {step.description}
                    </p>
                    
                    <div className="space-y-2">
                      {step.activities.map((activity, i) => (
                        <div key={activity} className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                          <span className="text-muted-foreground">{activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Enhanced Timeline node */}
                <div className="hidden lg:flex relative z-10">
                  <div className="w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center text-white glow-primary animate-gentle-glow border-4 border-background">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                      <span className="font-orbitron font-bold text-lg">{index + 1}</span>
                    </div>
                  </div>
                  {/* Connecting lines */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gradient-primary opacity-50" />
                  )}
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 max-w-lg hidden lg:block" />
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16 p-8 cyber-glass rounded-2xl">
          <h3 className="text-2xl font-orbitron font-bold mb-4 holographic">
            Pronto para começar seu projeto?
          </h3>
          <p className="text-muted-foreground mb-6">
            Entre em contato conosco e vamos discutir como podemos ajudar a transformar sua ideia em realidade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-primary text-white font-medium rounded-xl hover:scale-105 transition-transform duration-300">
              Solicitar Orçamento
            </button>
            <button className="px-8 py-3 cyber-glass border border-primary/20 text-primary font-medium rounded-xl hover:border-primary/50 transition-colors duration-300">
              Agendar Conversa
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;