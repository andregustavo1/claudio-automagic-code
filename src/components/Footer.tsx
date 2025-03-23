
import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowUp, Github, Linkedin, Twitter } from 'lucide-react';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className={cn("bg-claudio-black border-t border-claudio-darkgray/50 py-16 px-4", className)}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <a href="#" className="inline-block">
              <span className="text-2xl font-mono font-bold">
                <span className="text-white">Claudio</span>
                <span className="text-claudio-emerald">.AI</span>
              </span>
            </a>
            <p className="text-claudio-lightgray/70 mt-4 max-w-xs">
              Transformando ideias em código. Um engenheiro de software autônomo movido por IA.
            </p>
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://twitter.com/claudio_ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center border border-white/10 text-white/80 hover:bg-white/10 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="https://github.com/claudio-ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center border border-white/10 text-white/80 hover:bg-white/10 transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a 
                href="https://linkedin.com/company/claudio-ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center border border-white/10 text-white/80 hover:bg-white/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Produto</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-claudio-lightgray/70 hover:text-white transition-colors">Recursos</a></li>
              <li><a href="#how-it-works" className="text-claudio-lightgray/70 hover:text-white transition-colors">Como Funciona</a></li>
              <li><a href="#pricing" className="text-claudio-lightgray/70 hover:text-white transition-colors">Preços</a></li>
              <li><a href="#" className="text-claudio-lightgray/70 hover:text-white transition-colors">Roadmap</a></li>
              <li><a href="#" className="text-claudio-lightgray/70 hover:text-white transition-colors">Status</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Recursos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-claudio-lightgray/70 hover:text-white transition-colors">Documentação</a></li>
              <li><a href="#" className="text-claudio-lightgray/70 hover:text-white transition-colors">API Reference</a></li>
              <li><a href="#" className="text-claudio-lightgray/70 hover:text-white transition-colors">Blog Técnico</a></li>
              <li><a href="#" className="text-claudio-lightgray/70 hover:text-white transition-colors">Tutoriais</a></li>
              <li><a href="#" className="text-claudio-lightgray/70 hover:text-white transition-colors">Changelog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Contato</h4>
            <ul className="space-y-2">
              <li><a href="mailto:info@claudio.ai" className="text-claudio-lightgray/70 hover:text-white transition-colors">info@claudio.ai</a></li>
              <li><a href="#" className="text-claudio-lightgray/70 hover:text-white transition-colors">Suporte</a></li>
              <li><a href="#" className="text-claudio-lightgray/70 hover:text-white transition-colors">Comunidade</a></li>
              <li><a href="#" className="text-claudio-lightgray/70 hover:text-white transition-colors">Parcerias</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-claudio-darkgray/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-claudio-lightgray/60 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Claudio.AI. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-claudio-lightgray/60 hover:text-white text-sm transition-colors">Termos de Serviço</a>
            <a href="#" className="text-claudio-lightgray/60 hover:text-white text-sm transition-colors">Política de Privacidade</a>
            <a href="#" className="text-claudio-lightgray/60 hover:text-white text-sm transition-colors">Cookies</a>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 bg-claudio-darkgray rounded-full flex items-center justify-center border border-white/10 text-white hover:bg-claudio-darkgray/80 transition-colors shadow-lg z-20"
        aria-label="Voltar ao topo"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
