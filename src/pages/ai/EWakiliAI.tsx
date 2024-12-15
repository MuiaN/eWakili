import React from 'react';
import { Bot } from 'lucide-react';
import ChatMessage from '../../components/ai/ChatMessage';
import ChatInput from '../../components/ai/ChatInput';
import SuggestedPrompts from '../../components/ai/SuggestedPrompts';
import { useAIChat } from '../../hooks/useAIChat';

export default function EWakiliAI() {
  const { messages, isLoading, sendMessage } = useAIChat();

  return (
    <div className="h-[calc(100vh-7rem)] flex flex-col">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
          <Bot className="h-6 w-6 text-indigo-600" />
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">eWakili AI</h1>
          <p className="text-sm text-gray-500">Your legal assistant</p>
        </div>
      </div>

      {messages.length === 0 ? (
        <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
          <Bot className="h-16 w-16 text-indigo-200 mb-4" />
          <h2 className="text-xl font-medium text-gray-900 mb-2">
            Welcome to eWakili AI
          </h2>
          <p className="text-gray-500 mb-8 max-w-md">
            I'm your legal assistant, ready to help you with legal matters,
            research, and professional advice.
          </p>
          <SuggestedPrompts onSelectPrompt={sendMessage} />
        </div>
      ) : (
        <div className="flex-1 overflow-y-auto px-4 space-y-4 mb-4">
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
        </div>
      )}

      <div className="px-4 py-4 border-t bg-white">
        <ChatInput onSendMessage={sendMessage} isLoading={isLoading} />
      </div>
    </div>
  );
}