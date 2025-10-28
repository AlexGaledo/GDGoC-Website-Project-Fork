import React from 'react';
import { GooglerAiIcon } from './Icons';

interface FaqSuggestionsProps {
  suggestions: string[];
  onSuggestionClick: (suggestion: string) => void;
}

const FaqSuggestions: React.FC<FaqSuggestionsProps> = ({ suggestions, onSuggestionClick }) => {
  return (
    <div className="flex items-start gap-2.5 mt-1 pt-2 border-t border-gray-200">
       <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 bg-gray-100 border border-gray-200 mt-1 flex items-center justify-center">
          <GooglerAiIcon className="w-full h-full object-cover p-0.5" />
        </div>
      <div className="max-w-[75%] flex-1">
        <div className="mb-2">
            <span className="bg-gradient-to-r from-red-100 to-red-200 text-red-800 text-xs font-medium px-2.5 py-1 rounded-full inline-block">
            Try asking:
            </span>
        </div>
        <div className="grid grid-cols-1 gap-2">
            {suggestions.map((suggestion, index) => (
            <button
                key={index}
                onClick={() => onSuggestionClick(suggestion)}
                className="text-left text-sm font-medium text-slate-700 bg-white px-3 py-2.5 rounded-lg border border-gray-200 h-full hover:bg-red-50 hover:border-red-300 hover:text-red-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-1 text-ellipsis overflow-hidden whitespace-nowrap shadow-sm"
                aria-label={`Ask: ${suggestion}`}
            >
                {suggestion}
            </button>
            ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSuggestions;