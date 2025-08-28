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
    <section className="py-12 relative bg-gradient-to-br from-background to-muted/10">
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

        {/* Mobile Timeline - Vertical with connecting line */}
        <div className="block lg:hidden">
          <div className="relative">
            {/* Vertical line for mobile */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary opacity-50"></div>
            
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={step.title} className="flex items-start space-x-6">
                  {/* Step number */}
                  <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-white font-orbitron font-bold glow-primary flex-shrink-0">
                    {index + 1}
                  </div>
                  
                  {/* Content card */}
                  <div className="flex-1 cyber-glass p-6 rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-300">
                    <div className="flex items-center space-x-3 mb-3">
                      <step.icon className="w-6 h-6 text-primary" />
                      <h3 className="text-lg font-semibold">{step.title}</h3>
                    </div>
                    
                    <div className="flex items-center space-x-2 text-sm text-secondary mb-3">
                      <Clock className="w-4 h-4" />
                      <span>{step.duration}</span>
                    </div>
                    
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {step.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-2">
                      {step.activities.map((activity) => (
                        <div key={activity} className="flex items-center space-x-2 text-xs">
                          <CheckCircle className="w-3 h-3 text-secondary flex-shrink-0" />
                          <span className="text-muted-foreground">{activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Timeline - Random distributed layout */}
        <div className="hidden lg:block relative">
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ height: '800px' }}>
            {/* Connecting lines between steps */}
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
                <stop offset="50%" stopColor="hsl(var(--secondary))" stopOpacity="0.8" />
                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
              </linearGradient>
            </defs>
            
            {/* Line 1->2 */}
            <path d="M 200 120 Q 400 80 600 160" stroke="url(#lineGradient)" strokeWidth="2" fill="none" opacity="0.7" />
            {/* Line 2->3 */}
            <path d="M 600 160 Q 700 250 500 320" stroke="url(#lineGradient)" strokeWidth="2" fill="none" opacity="0.7" />
            {/* Line 3->4 */}
            <path d="M 500 320 Q 300 350 250 480" stroke="url(#lineGradient)" strokeWidth="2" fill="none" opacity="0.7" />
            {/* Line 4->5 */}
            <path d="M 250 480 Q 400 550 650 500" stroke="url(#lineGradient)" strokeWidth="2" fill="none" opacity="0.7" />
            {/* Line 5->6 */}
            <path d="M 650 500 Q 750 600 450 650" stroke="url(#lineGradient)" strokeWidth="2" fill="none" opacity="0.7" />
          </svg>

          {/* Distributed step cards */}
          <div className="relative" style={{ height: '800px' }}>
            {/* Step 1 - Top Left */}
            <div className="absolute" style={{ top: '80px', left: '100px', width: '280px' }}>
              <div className="cyber-glass p-6 rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-500 group hover:scale-105">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-orbitron font-bold">
                    1
                  </div>
                  <Search className="w-6 h-6 text-primary" />
                  <h3 className="text-lg font-semibold">Descoberta</h3>
                </div>
                <div className="flex items-center space-x-2 text-sm text-secondary mb-3">
                  <Clock className="w-4 h-4" />
                  <span>{steps[0].duration}</span>
                </div>
                <p className="text-muted-foreground text-sm mb-4">{steps[0].description}</p>
                <div className="space-y-1">
                  {steps[0].activities.map((activity) => (
                    <div key={activity} className="flex items-center space-x-2 text-xs">
                      <CheckCircle className="w-3 h-3 text-secondary" />
                      <span className="text-muted-foreground">{activity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 2 - Top Right */}
            <div className="absolute" style={{ top: '120px', right: '120px', width: '280px' }}>
              <div className="cyber-glass p-6 rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-500 group hover:scale-105">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-orbitron font-bold">
                    2
                  </div>
                  <Palette className="w-6 h-6 text-primary" />
                  <h3 className="text-lg font-semibold">Design & Prototipagem</h3>
                </div>
                <div className="flex items-center space-x-2 text-sm text-secondary mb-3">
                  <Clock className="w-4 h-4" />
                  <span>{steps[1].duration}</span>
                </div>
                <p className="text-muted-foreground text-sm mb-4">{steps[1].description}</p>
                <div className="space-y-1">
                  {steps[1].activities.map((activity) => (
                    <div key={activity} className="flex items-center space-x-2 text-xs">
                      <CheckCircle className="w-3 h-3 text-secondary" />
                      <span className="text-muted-foreground">{activity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 3 - Center Left */}
            <div className="absolute" style={{ top: '280px', left: '200px', width: '280px' }}>
              <div className="cyber-glass p-6 rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-500 group hover:scale-105">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-orbitron font-bold">
                    3
                  </div>
                  <Code className="w-6 h-6 text-primary" />
                  <h3 className="text-lg font-semibold">Desenvolvimento</h3>
                </div>
                <div className="flex items-center space-x-2 text-sm text-secondary mb-3">
                  <Clock className="w-4 h-4" />
                  <span>{steps[2].duration}</span>
                </div>
                <p className="text-muted-foreground text-sm mb-4">{steps[2].description}</p>
                <div className="space-y-1">
                  {steps[2].activities.map((activity) => (
                    <div key={activity} className="flex items-center space-x-2 text-xs">
                      <CheckCircle className="w-3 h-3 text-secondary" />
                      <span className="text-muted-foreground">{activity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 4 - Bottom Left */}
            <div className="absolute" style={{ top: '440px', left: '50px', width: '280px' }}>
              <div className="cyber-glass p-6 rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-500 group hover:scale-105">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-orbitron font-bold">
                    4
                  </div>
                  <TestTube className="w-6 h-6 text-primary" />
                  <h3 className="text-lg font-semibold">Testes & QA</h3>
                </div>
                <div className="flex items-center space-x-2 text-sm text-secondary mb-3">
                  <Clock className="w-4 h-4" />
                  <span>{steps[3].duration}</span>
                </div>
                <p className="text-muted-foreground text-sm mb-4">{steps[3].description}</p>
                <div className="space-y-1">
                  {steps[3].activities.map((activity) => (
                    <div key={activity} className="flex items-center space-x-2 text-xs">
                      <CheckCircle className="w-3 h-3 text-secondary" />
                      <span className="text-muted-foreground">{activity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 5 - Bottom Right */}
            <div className="absolute" style={{ top: '460px', right: '80px', width: '280px' }}>
              <div className="cyber-glass p-6 rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-500 group hover:scale-105">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-orbitron font-bold">
                    5
                  </div>
                  <Rocket className="w-6 h-6 text-primary" />
                  <h3 className="text-lg font-semibold">Deploy & Lançamento</h3>
                </div>
                <div className="flex items-center space-x-2 text-sm text-secondary mb-3">
                  <Clock className="w-4 h-4" />
                  <span>{steps[4].duration}</span>
                </div>
                <p className="text-muted-foreground text-sm mb-4">{steps[4].description}</p>
                <div className="space-y-1">
                  {steps[4].activities.map((activity) => (
                    <div key={activity} className="flex items-center space-x-2 text-xs">
                      <CheckCircle className="w-3 h-3 text-secondary" />
                      <span className="text-muted-foreground">{activity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 6 - Bottom Center */}
            <div className="absolute" style={{ top: '610px', left: '250px', width: '280px' }}>
              <div className="cyber-glass p-6 rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-500 group hover:scale-105">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-orbitron font-bold">
                    6
                  </div>
                  <Users className="w-6 h-6 text-primary" />
                  <h3 className="text-lg font-semibold">Suporte & Manutenção</h3>
                </div>
                <div className="flex items-center space-x-2 text-sm text-secondary mb-3">
                  <Clock className="w-4 h-4" />
                  <span>{steps[5].duration}</span>
                </div>
                <p className="text-muted-foreground text-sm mb-4">{steps[5].description}</p>
                <div className="space-y-1">
                  {steps[5].activities.map((activity) => (
                    <div key={activity} className="flex items-center space-x-2 text-xs">
                      <CheckCircle className="w-3 h-3 text-secondary" />
                      <span className="text-muted-foreground">{activity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
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