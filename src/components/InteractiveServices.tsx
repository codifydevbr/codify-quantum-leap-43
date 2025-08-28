import { useState } from "react";
import { Code, Smartphone, Cloud, Cpu, ArrowRight, Zap, Shield, Palette, Database } from "lucide-react";
import FuturisticButton from "@/components/FuturisticButton";
import { Link } from "react-router-dom";
const InteractiveServices = () => {
  const [activeService, setActiveService] = useState(0);
  const services = [{
    icon: Code,
    title: "Desenvolvimento Web",
    description: "Sites e aplicações web modernas com tecnologia de ponta",
    features: ["React/Next.js", "TypeScript", "PWA", "SEO Otimizado"],
    color: "primary",
    delay: "0s"
  }, {
    icon: Smartphone,
    title: "Apps Mobile",
    description: "Aplicativos nativos e híbridos para iOS e Android",
    features: ["React Native", "Flutter", "App Store", "Push Notifications"],
    color: "secondary",
    delay: "0.1s"
  }, {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Infraestrutura escalável e automatizada na nuvem",
    features: ["AWS/Azure", "Docker", "CI/CD", "Microserviços"],
    color: "neon-purple",
    delay: "0.2s"
  }, {
    icon: Cpu,
    title: "IA & Automação",
    description: "Soluções inteligentes com Machine Learning",
    features: ["ChatBots", "Análise de Dados", "APIs IA", "Automação"],
    color: "neon-cyan",
    delay: "0.3s"
  }, {
    icon: Palette,
    title: "UX/UI Design",
    description: "Interfaces incríveis que encantam usuários",
    features: ["Design System", "Prototipagem", "User Research", "Figma"],
    color: "neon-pink",
    delay: "0.4s"
  }, {
    icon: Database,
    title: "APIs & Integrações",
    description: "Conecte sistemas e maximize eficiência",
    features: ["REST APIs", "GraphQL", "Webhooks", "Third-party"],
    color: "neon-green",
    delay: "0.5s"
  }];
  return;
};
export default InteractiveServices;