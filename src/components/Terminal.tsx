
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface TerminalProps {
  className?: string;
  title?: string;
  autoType?: boolean;
  lines?: { prompt: string; command: string; output?: string[] }[];
  initialDelay?: number;
  typeSpeed?: number;
  outputDelay?: number;
}

export const Terminal: React.FC<TerminalProps> = ({
  className,
  title = "claudio@ai:~",
  autoType = true,
  lines = [
    { 
      prompt: "$", 
      command: "claudio init my-project", 
      output: ["✓ Understanding project requirements...", "✓ Setting up project structure...", "✓ Initializing Git repository..."] 
    },
    { 
      prompt: "$", 
      command: "claudio generate api", 
      output: ["✓ Designing API architecture...", "✓ Creating routes and controllers...", "✓ Implementing authentication...", "✓ API successfully generated!"] 
    },
    { 
      prompt: "$", 
      command: "claudio test", 
      output: ["Running tests...", "PASS  src/api/auth.test.js", "PASS  src/api/routes.test.js", "Test Suites: 5 passed, 5 total", "Tests: 23 passed, 23 total"] 
    },
    { 
      prompt: "$", 
      command: "claudio deploy", 
      output: ["Deploying to production...", "✓ Building optimized bundle...", "✓ Running security checks...", "✓ Deploying to cloud provider...", "✓ Application deployed successfully at https://my-project.com"] 
    }
  ],
  initialDelay = 1000,
  typeSpeed = 75,
  outputDelay = 500
}) => {
  const [displayedLines, setDisplayedLines] = useState<{
    prompt: string;
    command: string;
    output?: string[];
    isTyping: boolean;
    showOutput: boolean;
    currentIndex: number;
  }[]>([]);

  const terminalRef = useRef<HTMLDivElement>(null);

  // Function to simulate typing
  const typeCommand = (index: number) => {
    if (index >= lines.length) return;
    
    const currentLine = lines[index];
    const displayLine = {
      prompt: currentLine.prompt,
      command: "",
      output: currentLine.output,
      isTyping: true,
      showOutput: false,
      currentIndex: 0
    };
    
    setDisplayedLines(prev => [...prev, displayLine]);

    let charIndex = 0;
    const typeInterval = setInterval(() => {
      if (charIndex >= currentLine.command.length) {
        clearInterval(typeInterval);
        
        setDisplayedLines(prev => {
          const updated = [...prev];
          updated[updated.length - 1].isTyping = false;
          return updated;
        });
        
        // Show output after a delay
        setTimeout(() => {
          setDisplayedLines(prev => {
            const updated = [...prev];
            updated[updated.length - 1].showOutput = true;
            return updated;
          });
          
          // Start typing the next command after output is shown
          setTimeout(() => {
            typeCommand(index + 1);
          }, outputDelay * (currentLine.output?.length || 1));
        }, outputDelay);
        
        return;
      }
      
      setDisplayedLines(prev => {
        const updated = [...prev];
        updated[updated.length - 1].command += currentLine.command[charIndex];
        return updated;
      });
      
      charIndex++;
    }, typeSpeed);
  };

  useEffect(() => {
    if (autoType) {
      // Start typing the first command after initialDelay
      const timer = setTimeout(() => {
        typeCommand(0);
      }, initialDelay);
      
      return () => clearTimeout(timer);
    }
  }, [autoType, initialDelay]);

  useEffect(() => {
    // Scroll to bottom when terminal updates
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [displayedLines]);

  return (
    <div className={cn("terminal-window w-full max-w-2xl mx-auto", className)}>
      <div className="terminal-header">
        <div className="terminal-button terminal-close"></div>
        <div className="terminal-button terminal-minimize"></div>
        <div className="terminal-button terminal-maximize"></div>
        <div className="terminal-title">{title}</div>
      </div>
      <div className="terminal-body" ref={terminalRef}>
        {displayedLines.map((line, i) => (
          <div key={i} className="space-y-1">
            <div className="terminal-line">
              <span className="terminal-prompt">{line.prompt}</span>
              <span className="terminal-command">{line.command}</span>
              {line.isTyping && <span className="cursor"></span>}
            </div>
            
            {line.showOutput && line.output && (
              <>
                {line.output.map((output, j) => (
                  <div 
                    key={j} 
                    className="terminal-output" 
                    style={{ 
                      animation: `fade-in 0.3s ease forwards`,
                      animationDelay: `${j * 0.1}s`,
                      opacity: 0 
                    }}
                  >
                    {output}
                  </div>
                ))}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Terminal;
