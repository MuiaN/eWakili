import React from 'react';
import { Button } from '../ui/Button';

const suggestedPrompts = [
  "What's the legal process for filing a patent?",
  "Explain contract breach remedies",
  "How to handle client confidentiality?",
  "Legal requirements for company registration",
];

interface SuggestedPromptsProps {
  onSelectPrompt: (prompt: string) => void;
}

export default function SuggestedPrompts({ onSelectPrompt }: SuggestedPromptsProps) {
  return (
    <div className="space-y-2">
      <h3 className="text-sm font-medium text-gray-700">Suggested Questions</h3>
      <div className="flex flex-wrap gap-2">
        {suggestedPrompts.map((prompt) => (
          <Button
            key={prompt}
            variant="outline"
            size="sm"
            onClick={() => onSelectPrompt(prompt)}
            className="text-xs"
          >
            {prompt}
          </Button>
        ))}
      </div>
    </div>
  );
}