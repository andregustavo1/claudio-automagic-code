
import React, { useEffect, useRef, useState } from 'react';
import Header from '@/components/Header';
import Terminal from '@/components/Terminal';
import FeatureCard from '@/components/FeatureCard';
import ComparisonTable from '@/components/ComparisonTable';
import PricingCard from '@/components/PricingCard';
import Footer from '@/components/Footer';
import { CodeTabs } from '@/components/AnimatedCode';
import { 
  Zap, 
  Code, 
  Layers, 
  BrainCircuit, 
  Server, 
  PenTool,
  Shield,
  Terminal as TerminalIcon,
  Cpu,
  Globe
} from 'lucide-react';

// Intersection Observer hook
function useIntersectionObserver(
  ref: React.RefObject<HTMLElement>,
  options: IntersectionObserverInit = {}
): boolean {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, options]);

  return isIntersecting;
}

const Index = () => {
  // Create particle effect
  useEffect(() => {
    const particlesContainer = document.querySelector('#particles-container');
    if (!particlesContainer) return;

    const createParticle = () => {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      // Random size between 2-5px
      const size = Math.random() * 3 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Random position within container
      const containerWidth = particlesContainer.clientWidth;
      const containerHeight = particlesContainer.clientHeight;
      const x = Math.random() * containerWidth;
      const y = Math.random() * containerHeight;
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;

      // Random opacity and duration
      particle.style.opacity = (Math.random() * 0.3 + 0.2).toString();
      
      // Random animation
      const duration = Math.random() * 10 + 10;
      const delay = Math.random() * 5;
      particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
      
      particlesContainer.appendChild(particle);
    };

    // Create initial particles
    for (let i = 0; i < 50; i++) {
      createParticle();
    }
  }, []);

  const comparisionFeatures = [
    {
      name: "Desenvolvimento Full Stack Autônomo",
      description: "Capacidade de desenvolver aplicações completas sem intervenção humana",
      claudioAI: true,
      devinAI: true,
      otherAI: false,
      highlight: true
    },
    {
      name: "Compreensão de Contexto de Projeto",
      description: "Entendimento profundo dos requisitos e objetivos do projeto",
      claudioAI: true,
      devinAI: true,
      otherAI: false
    },
    {
      name: "Manutenção e Evolução de Código",
      description: "Capacidade de manter e evoluir código existente",
      claudioAI: true,
      devinAI: true,
      otherAI: false
    },
    {
      name: "Trabalho Colaborativo com Humanos",
      description: "Integração eficiente com equipes de desenvolvimento",
      claudioAI: true,
      devinAI: true,
      otherAI: true
    },
    {
      name: "Gestão de Dependências e Versões",
      description: "Gerenciamento inteligente de pacotes e compatibilidade",
      claudioAI: true,
      devinAI: false,
      otherAI: false,
      highlight: true
    },
    {
      name: "Testes Automatizados Completos",
      description: "Criação automática de testes unitários, integração e E2E",
      claudioAI: true,
      devinAI: true,
      otherAI: false
    },
    {
      name: "Otimização de Performance",
      description: "Análise e otimização automática de performance",
      claudioAI: true,
      devinAI: false,
      otherAI: false,
      highlight: true
    }
  ];

  const codeTabs = [
    {
      language: "javascript",
      name: "JavaScript",
      code: `// Criando uma API REST com Claudio.AI
import express from 'express';
import { authenticateUser } from './auth';
import { ProductController } from './controllers';

const app = express();
app.use(express.json());

// Middleware de autenticação
app.use('/api', authenticateUser);

// Rotas de produtos
app.get('/api/products', ProductController.getAllProducts);
app.get('/api/products/:id', ProductController.getProductById);
app.post('/api/products', ProductController.createProduct);
app.put('/api/products/:id', ProductController.updateProduct);
app.delete('/api/products/:id', ProductController.deleteProduct);

// Iniciar servidor
app.listen(3000, () => {
  console.log('Server running on port 3000');
});`
    },
    {
      language: "python",
      name: "Python",
      code: `# Análise de dados com Claudio.AI
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score

# Carregar dados
data = pd.read_csv('customer_data.csv')

# Preparar dados
X = data.drop('churn', axis=1)
y = data['churn']

# Dividir em treino e teste
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# Treinar modelo
model = RandomForestClassifier(n_estimators=100)
model.fit(X_train, y_train)

# Avaliar modelo
predictions = model.predict(X_test)
accuracy = accuracy_score(y_test, predictions)
print(f"Acurácia do modelo: {accuracy:.2f}")`
    },
    {
      language: "typescript",
      name: "TypeScript",
      code: `// Aplicação React com TypeScript por Claudio.AI
import React, { useState, useEffect } from 'react';
import { fetchProducts, Product } from './api';

interface ProductListProps {
  category: string;
}

const ProductList: React.FC<ProductListProps> = ({ category }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        const data = await fetchProducts(category);
        setProducts(data);
      } catch (err) {
        setError('Falha ao carregar produtos');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, [category]);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};`
    }
  ];

  return (
    <div className="bg-claudio-black min-h-screen text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden" id="hero">
        <div id="particles-container" className="absolute inset-0 pointer-events-none"></div>
        <div className="container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <div className="max-w-xl">
              <div className="inline-block px-3 py-1 bg-claudio-purple/20 rounded-full text-claudio-purple text-sm font-medium mb-5 animate-fade-in">
                Engenharia de Software Autônoma
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Seu Engenheiro de Software Autônomo
              </h1>
              <p className="text-xl text-claudio-lightgray/90 mb-8 leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                Transformando ideias em aplicações completas sem intervenção humana. Desenvolve, testa e implementa soluções de software de ponta a ponta.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <a href="#try" className="primary-button">
                  Iniciar Projeto
                </a>
                <a href="#how-it-works" className="secondary-button">
                  Como Funciona
                </a>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 opacity-0 animate-fade-in" style={{ animationDelay: '0.7s' }}>
            <Terminal 
              className="shadow-2xl" 
              initialDelay={2000}
            />
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="section bg-gradient-to-b from-claudio-black to-claudio-black/95" id="about">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h2 className="section-title">Conheça Claudio.AI</h2>
            <p className="section-subtitle">
              Engenharia de software autônoma de ponta a ponta, desenvolvida para transformar radicalmente o processo de desenvolvimento
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <h3 className="text-2xl font-bold mb-3">
                  <span className="text-claudio-emerald">01.</span> Compreensão Profunda
                </h3>
                <p className="text-claudio-lightgray/80">
                  Claudio.AI entende completamente seus requisitos, conversa sobre expectativas e cria uma visão clara do projeto antes de escrever qualquer código.
                </p>
              </div>
              
              <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <h3 className="text-2xl font-bold mb-3">
                  <span className="text-claudio-emerald">02.</span> Design de Arquitetura
                </h3>
                <p className="text-claudio-lightgray/80">
                  Projeta arquiteturas escaláveis, aplica padrões de design apropriados e estrutura seu código para manutenção e escalabilidade a longo prazo.
                </p>
              </div>
              
              <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                <h3 className="text-2xl font-bold mb-3">
                  <span className="text-claudio-emerald">03.</span> Desenvolvimento Full Stack
                </h3>
                <p className="text-claudio-lightgray/80">
                  Codifica em múltiplas linguagens e frameworks, implementando desde APIs RESTful até interfaces responsivas e bancos de dados otimizados.
                </p>
              </div>
              
              <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <h3 className="text-2xl font-bold mb-3">
                  <span className="text-claudio-emerald">04.</span> Testes & Implantação
                </h3>
                <p className="text-claudio-lightgray/80">
                  Cria suítes de testes automatizados, configura pipelines CI/CD e implanta aplicações de forma segura em ambientes de produção.
                </p>
              </div>
            </div>
            
            <div className="relative opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="terminal-window shadow-2xl">
                <div className="terminal-header">
                  <div className="terminal-button terminal-close"></div>
                  <div className="terminal-button terminal-minimize"></div>
                  <div className="terminal-button terminal-maximize"></div>
                  <div className="terminal-title">claudio@ai:~/projects</div>
                </div>
                <div className="p-4">
                  <CodeTabs tabs={codeTabs} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features */}
      <section className="section bg-claudio-black/95" id="features">
        <div className="container mx-auto">
          <div className="mb-16 text-center">
            <h2 className="section-title">Por Que Engenheiros Escolhem Claudio.AI</h2>
            <p className="section-subtitle">
              Vantagens que transformam o desenvolvimento de software e potencializam equipes técnicas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              title="10x Mais Rápido"
              description="Desenvolvimento acelerado sem comprometer qualidade. Transforme semanas de trabalho em horas."
              icon={<Zap size={32} />}
              delay={100}
            />
            <FeatureCard
              title="Código Perfeito"
              description="Gera código limpo, bem documentado e seguindo as melhores práticas. Sempre testado e pronto para produção."
              icon={<Code size={32} />}
              delay={200}
            />
            <FeatureCard
              title="Full Stack"
              description="Domínio completo do frontend ao backend e DevOps. Um especialista para cada camada da sua aplicação."
              icon={<Layers size={32} />}
              delay={300}
            />
            <FeatureCard
              title="Aprendizado Contínuo"
              description="Evolui com cada projeto e se adapta constantemente às novas tecnologias e frameworks."
              icon={<BrainCircuit size={32} />}
              delay={400}
            />
          </div>
        </div>
      </section>
      
      {/* Technical Capabilities */}
      <section className="section bg-gradient-to-b from-claudio-black/95 to-claudio-black" id="capabilities">
        <div className="container mx-auto">
          <div className="mb-16 text-center">
            <h2 className="section-title">Capacidades Técnicas</h2>
            <p className="section-subtitle">
              Domínio técnico abrangente para qualquer desafio de desenvolvimento de software
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="neomorphism p-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <Server className="text-claudio-emerald mb-4" size={36} />
              <h3 className="text-xl font-bold mb-3 text-white">Múltiplas Linguagens</h3>
              <p className="text-claudio-lightgray/80 mb-4">Fluente em Python, JavaScript, TypeScript, Rust, Go, Java, C++, e outras linguagens.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-claudio-darkgray/50 rounded text-xs">Python</span>
                <span className="px-2 py-1 bg-claudio-darkgray/50 rounded text-xs">JavaScript</span>
                <span className="px-2 py-1 bg-claudio-darkgray/50 rounded text-xs">TypeScript</span>
                <span className="px-2 py-1 bg-claudio-darkgray/50 rounded text-xs">Rust</span>
                <span className="px-2 py-1 bg-claudio-darkgray/50 rounded text-xs">Go</span>
                <span className="px-2 py-1 bg-claudio-darkgray/50 rounded text-xs">Java</span>
                <span className="px-2 py-1 bg-claudio-darkgray/50 rounded text-xs">C++</span>
              </div>
            </div>
            
            <div className="neomorphism p-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <PenTool className="text-claudio-emerald mb-4" size={36} />
              <h3 className="text-xl font-bold mb-3 text-white">Frameworks & Bibliotecas</h3>
              <p className="text-claudio-lightgray/80 mb-4">Experiência com React, Vue, Angular, Django, Flask, Express, Spring e outros frameworks populares.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-claudio-darkgray/50 rounded text-xs">React</span>
                <span className="px-2 py-1 bg-claudio-darkgray/50 rounded text-xs">Vue</span>
                <span className="px-2 py-1 bg-claudio-darkgray/50 rounded text-xs">Angular</span>
                <span className="px-2 py-1 bg-claudio-darkgray/50 rounded text-xs">Django</span>
                <span className="px-2 py-1 bg-claudio-darkgray/50 rounded text-xs">Flask</span>
                <span className="px-2 py-1 bg-claudio-darkgray/50 rounded text-xs">Express</span>
                <span className="px-2 py-1 bg-claudio-darkgray/50 rounded text-xs">Spring</span>
              </div>
            </div>
            
            <div className="neomorphism p-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Shield className="text-claudio-emerald mb-4" size={36} />
              <h3 className="text-xl font-bold mb-3 text-white">Segurança & Conformidade</h3>
              <p className="text-claudio-lightgray/80 mb-4">Implementação de melhores práticas de segurança, criptografia e conformidade com regulamentos.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-claudio-darkgray/50 rounded text-xs">OWASP</span>
                <span className="px-2 py-1 bg-claudio-darkgray/50 rounded text-xs">Auth</span>
                <span className="px-2 py-1 bg-claudio-darkgray/50 rounded text-xs">Criptografia</span>
                <span className="px-2 py-1 bg-claudio-darkgray/50 rounded text-xs">GDPR</span>
                <span className="px-2 py-1 bg-claudio-darkgray/50 rounded text-xs">LGPD</span>
                <span className="px-2 py-1 bg-claudio-darkgray/50 rounded text-xs">PCI DSS</span>
              </div>
            </div>
            
            <div className="neomorphism p-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <TerminalIcon className="text-claudio-emerald mb-4" size={36} />
              <h3 className="text-xl font-bold mb-3 text-white">DevOps & Infraestrutura</h3>
              <p className="text-claudio-lightgray/80 mb-4">Configuração de CI/CD, containerização, orquestração e infraestrutura como código.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-claudio-darkgray/50 rounded text-xs">Docker</span>
                <span className="px-2 py-1 bg-claudio-darkgray/50 rounded text-xs">Kubernetes</span>
                <span className="px-2 py-1 bg-claudio-darkgray/50 rounded text-xs">CI/CD</span>
                <span className="px-2 py-1 bg-claudio-darkgray/50 rounded text-xs">AWS</span>
                <span className="px-2 py-1 bg-claudio-darkgray/50 rounded text-xs">Azure</span>
                <span className="px-2 py-1 bg-claudio-darkgray/50 rounded text-xs">GCP</span>
                <span className="px-2 py-1 bg-claudio-darkgray/50 rounded text-xs">Terraform</span>
              </div>
            </div>
            
            <div className="neomorphism p-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <Cpu className="text-claudio-emerald mb-4" size={36} />
              <h3 className="text-xl font-bold mb-3 text-white">Banco de Dados & Armazenamento</h3>
              <p className="text-claudio-lightgray/80 mb-4">Projeto e otimização de bancos relacionais e NoSQL, queries e modelagem de dados.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-claudio-darkgray/50 rounded text-xs">PostgreSQL</span>
                <span className="px-2 py-1 bg-claudio-darkgray/50 rounded text-xs">MySQL</span>
                <span className="px-2 py-1 bg-claudio-darkgray/50 rounded text-xs">MongoDB</span>
                <span className="px-2 py-1 bg-claudio-darkgray/50 rounded text-xs">Redis</span>
                <span className="px-2 py-1 bg-claudio-darkgray/50 rounded text-xs">DynamoDB</span>
                <span className="px-2 py-1 bg-claudio-darkgray/50 rounded text-xs">Cassandra</span>
              </div>
            </div>
            
            <div className="neomorphism p-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
              <Globe className="text-claudio-emerald mb-4" size={36} />
              <h3 className="text-xl font-bold mb-3 text-white">Testes & Qualidade</h3>
              <p className="text-claudio-lightgray/80 mb-4">Testes unitários, integração, E2E, performance e análise estática de código.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-claudio-darkgray/50 rounded text-xs">Jest</span>
                <span className="px-2 py-1 bg-claudio-darkgray/50 rounded text-xs">Cypress</span>
                <span className="px-2 py-1 bg-claudio-darkgray/50 rounded text-xs">Selenium</span>
                <span className="px-2 py-1 bg-claudio-darkgray/50 rounded text-xs">JUnit</span>
                <span className="px-2 py-1 bg-claudio-darkgray/50 rounded text-xs">pytest</span>
                <span className="px-2 py-1 bg-claudio-darkgray/50 rounded text-xs">ESLint</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Comparison Table */}
      <section className="section bg-claudio-black" id="comparison">
        <div className="container mx-auto">
          <div className="mb-16 text-center">
            <h2 className="section-title">Como Claudio.AI Se Compara</h2>
            <p className="section-subtitle">
              Uma comparação detalhada das capacidades de engenharia de software autônoma
            </p>
          </div>
          
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <ComparisonTable features={comparisionFeatures} className="neomorphism p-6" />
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section className="section bg-claudio-black" id="pricing">
        <div className="container mx-auto">
          <div className="mb-16 text-center">
            <h2 className="section-title">Planos para Cada Necessidade</h2>
            <p className="section-subtitle">
              Escolha o plano ideal para seu projeto, equipe ou organização
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingCard
              title="Starter"
              price="R$199"
              period="mês"
              description="Ideal para experimentação e projetos pessoais"
              features={[
                { name: "Até 3 projetos simultâneos", included: true },
                { name: "Suporte 24/7 via chat", included: true },
                { name: "1GB de armazenamento", included: true },
                { name: "Deploy em ambiente de testes", included: true },
                { name: "Acesso a todas as linguagens", included: true },
                { name: "Colaboração multi-usuário", included: false },
                { name: "Acesso à API", included: false },
                { name: "Ambientes personalizados", included: false }
              ]}
              buttonText="Começar Grátis"
              delay={100}
            />
            
            <PricingCard
              title="Team"
              price="R$499"
              period="mês"
              description="Para equipes e startups em crescimento"
              features={[
                { name: "Projetos ilimitados", included: true },
                { name: "Suporte 24/7 via chat e e-mail", included: true },
                { name: "10GB de armazenamento", included: true },
                { name: "Deploy em produção", included: true },
                { name: "Acesso a todas as linguagens", included: true },
                { name: "Colaboração multi-usuário", included: true },
                { name: "Acesso à API", included: true },
                { name: "Ambientes personalizados", included: false }
              ]}
              buttonText="Iniciar Avaliação"
              popular={true}
              delay={200}
            />
            
            <PricingCard
              title="Enterprise"
              price="R$999"
              period="mês"
              description="Para grandes organizações e projetos complexos"
              features={[
                { name: "Projetos ilimitados", included: true },
                { name: "Suporte 24/7 dedicado", included: true },
                { name: "Armazenamento ilimitado", included: true },
                { name: "Deploy multi-ambiente", included: true },
                { name: "Acesso a todas as linguagens", included: true },
                { name: "Colaboração multi-usuário", included: true },
                { name: "Acesso à API avançada", included: true },
                { name: "Ambientes personalizados", included: true }
              ]}
              buttonText="Fale com Vendas"
              delay={300}
            />
          </div>
          
          <div className="text-center mt-12 text-claudio-lightgray">
            <p>Todos os planos incluem suporte técnico e atualizações contínuas.</p>
            <p className="mt-2">Precisa de um plano personalizado? <a href="#" className="text-claudio-emerald hover:underline">Entre em contato</a>.</p>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden" id="try">
        <div className="absolute inset-0 bg-cta-gradient opacity-90 z-0"></div>
        <div id="particles-container" className="absolute inset-0 pointer-events-none z-10"></div>
        
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white animate-fade-in-up">
              Pronto para Revolucionar seu Desenvolvimento?
            </h2>
            <p className="text-xl text-white/90 mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Junte-se a milhares de engenheiros que potencializam seu trabalho com Claudio.AI
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <a href="#" className="px-8 py-4 bg-white text-claudio-blue font-bold rounded-md hover:bg-white/90 transition-all duration-300">
                Iniciar Avaliação Gratuita
              </a>
              <p className="text-white/80 text-sm mt-4">Não é necessário cartão de crédito</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
