import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sparkles, ChevronDown } from "lucide-react";
import FuturisticButton from "./FuturisticButton";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Início", path: "/" },
    { 
      name: "Empresa", 
      path: "/sobre",
      dropdown: [
        { name: "Sobre Nós", path: "/sobre" },
        { name: "Nossa Equipe", path: "/equipe" },
        { name: "Carreiras", path: "/carreiras" }
      ]
    },
    { 
      name: "Serviços", 
      path: "/servicos",
      dropdown: [
        { name: "Desenvolvimento Web", path: "/servicos/web" },
        { name: "Apps Mobile", path: "/servicos/mobile" },
        { name: "Cloud & DevOps", path: "/servicos/cloud" },
        { name: "IA & Automação", path: "/servicos/ia" }
      ]
    },
    { name: "Portfólio", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
    { name: "Contato", path: "/contato" }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'glass backdrop-blur-md border-b border-primary/30 shadow-lg shadow-primary/10' 
        : 'bg-transparent border-b border-primary/10'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo Enhanced */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity" />
              <img 
                src="/lovable-uploads/bdec4111-7cae-45f7-82f3-b04547142fef.png" 
                alt="Codify Logo" 
                className="relative w-12 h-12 group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-orbitron font-bold holographic">
                CODIFY
              </span>
              <span className="text-xs text-primary/70 font-medium -mt-1">
                Code the Future
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Enhanced */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div 
                key={item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.path}
                  className={`flex items-center space-x-1 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                    isActive(item.path)
                      ? "text-primary bg-primary/10"
                      : "text-foreground hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  <span>{item.name}</span>
                  {item.dropdown && (
                    <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                  )}
                </Link>
                
                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-card border border-primary/20 rounded-xl shadow-xl shadow-primary/10 p-2 animate-fade-in z-50">
                    {item.dropdown.map((dropItem) => (
                      <Link
                        key={dropItem.name}
                        to={dropItem.path}
                        className="block px-4 py-3 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200"
                      >
                        {dropItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Section Enhanced */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link 
              to="/contato" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              +55 (11) 99999-9999
            </Link>
            <Link to="/solicitar-orcamento">
              <FuturisticButton variant="primary" glow className="text-sm px-6">
                <Sparkles className="w-4 h-4 mr-2" />
                Começar Projeto
              </FuturisticButton>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors duration-300 rounded-lg hover:bg-primary/5"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Enhanced */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 right-0 glass backdrop-blur-md border-t border-primary/20 animate-fade-in">
            <nav className="container mx-auto px-4 py-6 space-y-2">
              {navItems.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-3 text-sm font-medium transition-all duration-300 rounded-lg ${
                      isActive(item.path)
                        ? "text-primary bg-primary/10"
                        : "text-foreground hover:text-primary hover:bg-primary/5"
                    }`}
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <div className="ml-4 mt-2 space-y-1">
                      {item.dropdown.map((dropItem) => (
                        <Link
                          key={dropItem.name}
                          to={dropItem.path}
                          onClick={() => setIsMenuOpen(false)}
                          className="block px-4 py-2 text-xs text-muted-foreground hover:text-primary transition-colors rounded-lg"
                        >
                          {dropItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-primary/20">
                <Link to="/solicitar-orcamento" onClick={() => setIsMenuOpen(false)}>
                  <FuturisticButton variant="primary" className="w-full">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Começar Projeto
                  </FuturisticButton>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;