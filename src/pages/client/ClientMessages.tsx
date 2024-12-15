import React from 'react';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Send, Paperclip } from 'lucide-react';

const mockMessages = [
  {
    id: 1,
    sender: 'John Smith',
    role: 'Attorney',
    message: 'Your case documents have been reviewed. We need to discuss a few points.',
    timestamp: '2024-03-15 10:30 AM',
    isUser: false,
  },
  {
    id: 2,
    sender: 'You',
    message: 'When would be a good time to schedule a meeting?',
    timestamp: '2024-03-15 10:35 AM',
    isUser: true,
  },
];

export default function ClientMessages() {
  return (
    <div className="h-[calc(100vh-7rem)] flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold text-gray-900">Messages</h1>
      </div>

      <div className="flex-1 bg-white rounded-lg shadow overflow-hidden flex flex-col">
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {mockMessages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-lg rounded-lg p-4 ${
                  message.isUser
                    ? 'bg-indigo-100 text-indigo-900'
                    : 'bg-gray-100 text-gray-900'
                }`}
              >
                <div className="flex items-center space-x-2 mb-1">
                  <span className="font-medium">{message.sender}</span>
                  {!message.isUser && (
                    <span className="text-xs text-gray-500">{message.role}</span>
                  )}
                </div>
                <p className="text-sm">{message.message}</p>
                <span className="text-xs text-gray-500 mt-1 block">
                  {message.timestamp}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 border-t">
          <div className="flex space-x-4">
            <Input
              placeholder="Type your message..."
              className="flex-1"
            />
            <Button variant="outline" size="icon">
              <Paperclip className="h-4 w-4" />
            </Button>
            <Button>
              <Send className="h-4 w-4 mr-2" />
              Send
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}