import { useState } from "react";
import { Plus, MessageCircle, Phone, Mail, X } from "lucide-react";
import { Link } from "react-router-dom";

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      href: "https://wa.me/5564999341815?text=Olá! Gostaria de conversar sobre um projeto.",
      color: "bg-green-500 hover:bg-green-600"
    },
    {
      icon: Phone,
      label: "Ligar",
      href: "tel:+5564999341815",
      color: "bg-blue-500 hover:bg-blue-600"
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:codifydev.principal@gmail.com",
      color: "bg-purple-500 hover:bg-purple-600"
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Action buttons */}
      <div className={`absolute bottom-16 right-0 space-y-3 transition-all duration-300 ${
        isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
      }`}>
        {actions.map((action, index) => (
          <a
            key={action.label}
            href={action.href}
            className={`flex items-center space-x-3 px-4 py-3 rounded-full text-white shadow-lg transition-all duration-300 group ${action.color}`}
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <action.icon className="w-5 h-5" />
            <span className="hidden sm:block text-sm font-medium whitespace-nowrap">
              {action.label}
            </span>
          </a>
        ))}
      </div>

      {/* Main FAB */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-gradient-primary text-white rounded-full shadow-lg hover:shadow-primary/30 transition-all duration-300 flex items-center justify-center group glow-primary"
      >
        <div className={`transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
          {isOpen ? <X className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
        </div>
      </button>
    </div>
  );
};

export default FloatingActionButton;