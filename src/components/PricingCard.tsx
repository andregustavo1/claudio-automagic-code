
import React from 'react';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

interface PricingFeature {
  name: string;
  included: boolean;
}

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  description: string;
  features: PricingFeature[];
  buttonText: string;
  popular?: boolean;
  className?: string;
  delay?: number;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  period,
  description,
  features,
  buttonText,
  popular = false,
  className,
  delay = 0
}) => {
  return (
    <div 
      className={cn(
        "rounded-2xl overflow-hidden transition-all duration-300 h-full",
        popular ? "glassmorphism scale-105 z-10" : "neomorphism hover:scale-[1.02]",
        "opacity-0 animate-fade-in",
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {popular && (
        <div className="bg-claudio-purple text-white text-center py-2 text-sm font-medium">
          MAIS POPULAR
        </div>
      )}
      <div className="p-6 md:p-8 flex flex-col h-full">
        <div className="mb-8">
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <div className="flex items-baseline mb-4">
            <span className="text-4xl font-bold text-white">{price}</span>
            <span className="text-claudio-lightgray ml-2">/{period}</span>
          </div>
          <p className="text-claudio-lightgray/80">{description}</p>
        </div>
        
        <div className="flex-grow">
          <ul className="space-y-3 mb-8">
            {features.map((feature, index) => (
              <li key={index} className={cn(
                "flex items-start",
                feature.included ? "text-claudio-lightgray" : "text-claudio-lightgray/50 line-through"
              )}>
                <Check className={cn(
                  "w-5 h-5 mr-2 mt-0.5 flex-shrink-0",
                  feature.included ? "text-claudio-emerald" : "text-claudio-lightgray/30"
                )} />
                <span>{feature.name}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <button className={cn(
          "w-full py-3 rounded-md font-medium transition-all duration-300",
          popular 
            ? "bg-claudio-emerald text-white hover:bg-claudio-emerald/90" 
            : "border border-claudio-emerald/30 text-claudio-emerald hover:bg-claudio-emerald/10"
        )}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
