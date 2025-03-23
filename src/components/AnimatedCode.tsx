
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedCodeProps {
  language: string;
  code: string;
  className?: string;
  typingSpeed?: number;
  delay?: number;
}

const AnimatedCode: React.FC<AnimatedCodeProps> = ({
  language,
  code,
  className,
  typingSpeed = 30,
  delay = 0
}) => {
  const [displayedCode, setDisplayedCode] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    const delayTimeout = setTimeout(() => {
      setStartTyping(true);
    }, delay);

    return () => clearTimeout(delayTimeout);
  }, [delay]);

  useEffect(() => {
    if (!startTyping) return;

    setIsTyping(true);
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex >= code.length) {
        clearInterval(typingInterval);
        setIsTyping(false);
        return;
      }

      setDisplayedCode(code.slice(0, currentIndex + 1));
      currentIndex++;
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [code, typingSpeed, startTyping]);

  // Format the code with syntax highlighting
  const formatCode = (code: string) => {
    // This is a simple formatter - in a real app, you'd use a library like prism.js
    return code
      .replace(/\/\/(.*)/g, '<span class="text-gray-500">$&</span>') // Comments
      .replace(/(".*?")/g, '<span class="text-claudio-emerald">$&</span>') // Strings
      .replace(/\b(const|let|var|function|return|if|else|for|while|import|export|from|class|interface|type|extends|implements)\b/g, 
               '<span class="text-claudio-purple">$&</span>') // Keywords
      .replace(/\b(true|false|null|undefined|this|super)\b/g, 
               '<span class="text-yellow-500">$&</span>') // Constants
      .replace(/\b(\d+)\b/g, '<span class="text-blue-400">$&</span>'); // Numbers
  };

  return (
    <div className={cn("code-window", className)}>
      <pre className="text-white whitespace-pre-wrap break-words overflow-x-auto">
        <code
          dangerouslySetInnerHTML={{
            __html: formatCode(displayedCode)
          }}
        />
        {isTyping && <span className="cursor animate-cursor-blink">|</span>}
      </pre>
    </div>
  );
};

interface CodeTabsProps {
  tabs: {
    language: string;
    name: string;
    code: string;
  }[];
  className?: string;
}

export const CodeTabs: React.FC<CodeTabsProps> = ({ tabs, className }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={cn("w-full", className)}>
      <div className="language-tabs">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={cn(
              "language-tab",
              activeTab === index ? "active" : ""
            )}
            onClick={() => setActiveTab(index)}
          >
            {tab.name}
          </div>
        ))}
      </div>
      
      <AnimatedCode
        language={tabs[activeTab].language}
        code={tabs[activeTab].code}
        key={activeTab} // Reset animation when changing tabs
      />
    </div>
  );
};

export default AnimatedCode;
