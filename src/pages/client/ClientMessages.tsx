import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import MessageList from '../../components/messages/MessageList';
import MessageChat from '../../components/messages/MessageChat';
import NewMessageDialog from '../../components/messages/NewMessageDialog';
import { useAvailableUsers } from '../../hooks/useAvailableUsers';

const mockContacts = [
  {
    id: '1',
    name: 'James Wilson',
    role: 'Lawyer',
    lastMessage: 'Your case has been updated',
    unread: 1,
  },
  {
    id: '2',
    name: 'Maria Garcia',
    role: 'Paralegal',
    lastMessage: 'Documents ready for your review',
  },
  {
    id: '3',
    name: 'Support Team',
    role: 'Customer Support',
    lastMessage: 'How can we help you today?',
  },
];

const mockMessages = [
  {
    id: '1',
    content: 'Your case documents have been updated',
    sender: 'James Wilson',
    timestamp: new Date('2024-03-15T11:30:00'),
    isUser: false,
  },
  {
    id: '2',
    content: 'Thank you, when can we discuss the updates?',
    sender: 'You',
    timestamp: new Date('2024-03-15T11:32:00'),
    isUser: true,
  },
];

export default function ClientMessages() {
  const [selectedContactId, setSelectedContactId] = useState<string>();
  const [isNewMessageOpen, setIsNewMessageOpen] = useState(false);
  const availableUsers = useAvailableUsers();
  
  const selectedContact = mockContacts.find((c) => c.id === selectedContactId);

  const handleSendMessage = (content: string) => {
    console.log('Sending message:', content);
  };

  const handleStartNewChat = (userId: string) => {
    setSelectedContactId(userId);
    // In a real app, you would initialize a new chat here
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Button onClick={() => setIsNewMessageOpen(true)}>
          <PlusCircle className="h-4 w-4 mr-2" />
          New Message
        </Button>
      </div>

      <div className="h-[calc(100vh-11rem)] flex bg-white rounded-lg shadow-sm overflow-hidden">
        <MessageList
          contacts={mockContacts}
          onSelectContact={setSelectedContactId}
          selectedContactId={selectedContactId}
        />
        <MessageChat
          messages={mockMessages}
          onSendMessage={handleSendMessage}
          selectedContact={selectedContact}
        />
      </div>

      <NewMessageDialog
        isOpen={isNewMessageOpen}
        onClose={() => setIsNewMessageOpen(false)}
        onStartChat={handleStartNewChat}
        availableUsers={availableUsers}
      />
    </div>
  );
}