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
    name: 'John Smith',
    role: 'Client',
    lastMessage: 'When can we schedule a meeting?',
    unread: 2,
  },
  {
    id: '2',
    name: 'Sarah Wilson',
    role: 'Managing Partner',
    lastMessage: 'Please review the case documents',
    unread: 1,
  },
  {
    id: '3',
    name: 'Legal Team',
    role: 'Group Chat',
    lastMessage: 'Meeting notes from today\'s session',
  },
  {
    id: '4',
    name: 'Mike Johnson',
    role: 'Paralegal',
    lastMessage: 'Documents are ready for review',
  },
];

const mockMessages = [
  {
    id: '1',
    content: 'Hello, I need to discuss the case updates',
    sender: 'John Smith',
    timestamp: new Date('2024-03-15T10:30:00'),
    isUser: false,
  },
  {
    id: '2',
    content: 'Of course, I can help you with that',
    sender: 'You',
    timestamp: new Date('2024-03-15T10:32:00'),
    isUser: true,
  },
];

export default function StaffMessages() {
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