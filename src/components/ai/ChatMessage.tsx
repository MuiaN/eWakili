import React from 'react';
import { User, Bot } from 'lucide-react';

interface ChatMessageProps {
  message: {
    id: string;
    content: string;
    role: 'user' | 'assistant';
    timestamp: Date;
  };
}

export default function ChatMessage({ message }: ChatMessageProps) {
  return (
    <div
      className={`flex gap-3 ${
        message.role === 'user' ? 'justify-end' : 'justify-start'
      }`}
    >
      {message.role === 'assistant' && (
        <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
          <Bot className="h-5 w-5 text-indigo-600" />
        </div>
      )}
      <div
        className={`max-w-[80%] rounded-lg p-4 ${
          message.role === 'user'
            ? 'bg-indigo-600 text-white'
            : 'bg-gray-100 text-gray-900'
        }`}
      >
        <p className="text-sm">{message.content}</p>
        <span className="text-xs opacity-70 mt-1 block">
          {new Date(message.timestamp).toLocaleTimeString()}
        </span>
      </div>
      {message.role === 'user' && (
        <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center">
          <User className="h-5 w-5 text-white" />
        </div>
      )}
    </div>
  );
}