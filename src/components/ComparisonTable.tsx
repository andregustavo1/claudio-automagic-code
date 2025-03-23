
import React from 'react';
import { cn } from '@/lib/utils';
import { Check, X } from 'lucide-react';

interface Feature {
  name: string;
  description?: string;
  claudioAI: boolean;
  devinAI: boolean;
  otherAI: boolean;
  highlight?: boolean;
}

interface ComparisonTableProps {
  features: Feature[];
  className?: string;
}

const ComparisonTable: React.FC<ComparisonTableProps> = ({ 
  features,
  className 
}) => {
  return (
    <div className={cn("w-full overflow-x-auto", className)}>
      <table className="w-full border-collapse">
        <thead>
          <tr className="text-left">
            <th className="py-4 px-4 text-claudio-lightgray font-normal">Recursos</th>
            <th className="py-4 px-4 text-white text-center">
              <span className="text-claudio-emerald font-mono">Claudio.AI</span>
            </th>
            <th className="py-4 px-4 text-white text-center">Devin.AI</th>
            <th className="py-4 px-4 text-white text-center">Outras IAs</th>
          </tr>
        </thead>
        <tbody>
          {features.map((feature, index) => (
            <tr 
              key={index}
              className={cn(
                "border-t border-claudio-darkgray/50 transition-colors hover:bg-claudio-darkgray/20",
                feature.highlight ? "bg-claudio-darkgray/30" : ""
              )}
            >
              <td className="py-4 px-4">
                <div className="font-medium text-white">{feature.name}</div>
                {feature.description && (
                  <div className="text-sm text-claudio-lightgray/70 mt-1">{feature.description}</div>
                )}
              </td>
              <td className="py-4 px-4 text-center">
                {feature.claudioAI ? (
                  <Check className="inline-block text-claudio-emerald w-5 h-5" />
                ) : (
                  <X className="inline-block text-red-500 w-5 h-5" />
                )}
              </td>
              <td className="py-4 px-4 text-center">
                {feature.devinAI ? (
                  <Check className="inline-block text-green-500 w-5 h-5" />
                ) : (
                  <X className="inline-block text-red-500 w-5 h-5" />
                )}
              </td>
              <td className="py-4 px-4 text-center">
                {feature.otherAI ? (
                  <Check className="inline-block text-green-500 w-5 h-5" />
                ) : (
                  <X className="inline-block text-red-500 w-5 h-5" />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTable;
