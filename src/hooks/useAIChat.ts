import { useState, useCallback } from 'react';

interface ChatMessage {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

export function useAIChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const legalResponses = {
    patent: "To file a patent, you'll need to: 1) Conduct a patent search, 2) Prepare patent application documents, 3) File with the patent office, 4) Respond to office actions, 5) Pay required fees. It's recommended to work with a patent attorney.",
    contract: "Contract breach remedies typically include: 1) Damages (compensatory, punitive, liquidated), 2) Specific performance, 3) Rescission, 4) Reformation. The appropriate remedy depends on the breach's nature and contract terms.",
    confidentiality: "Client confidentiality requires: 1) Secure communication channels, 2) Protected document storage, 3) Limited access to case information, 4) Written confidentiality agreements, 5) Regular staff training on privacy protocols.",
    registration: "Company registration steps: 1) Choose business structure, 2) Reserve company name, 3) Prepare formation documents, 4) File with registrar, 5) Obtain necessary licenses, 6) Register for taxes, 7) Set up compliance procedures.",
  };

  const generateResponse = useCallback((message: string) => {
    const lowerMessage = message.toLowerCase();
    let response = "I can help you with legal matters. Please be more specific about your question.";

    if (lowerMessage.includes('patent')) {
      response = legalResponses.patent;
    } else if (lowerMessage.includes('contract') && lowerMessage.includes('breach')) {
      response = legalResponses.contract;
    } else if (lowerMessage.includes('confidentiality')) {
      response = legalResponses.confidentiality;
    } else if (lowerMessage.includes('registration')) {
      response = legalResponses.registration;
    }

    return response;
  }, []);

  const sendMessage = useCallback(async (content: string) => {
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      content,
      role: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    // Simulate AI response delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const aiResponse: ChatMessage = {
      id: (Date.now() + 1).toString(),
      content: generateResponse(content),
      role: 'assistant',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, aiResponse]);
    setIsLoading(false);
  }, [generateResponse]);

  return {
    messages,
    isLoading,
    sendMessage,
  };
}