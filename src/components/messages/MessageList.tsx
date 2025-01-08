import React from 'react';
import { User } from 'lucide-react';

interface MessageListProps {
  contacts: Array<{
    id: string;
    name: string;
    role: string;
    lastMessage?: string;
    unread?: number;
  }>;
  onSelectContact: (contactId: string) => void;
  selectedContactId?: string;
}

export default function MessageList({ contacts, onSelectContact, selectedContactId }: MessageListProps) {
  return (
    <div className="border-r border-gray-200 w-80 overflow-y-auto">
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-900">Messages</h2>
      </div>
      <div className="divide-y divide-gray-200">
        {contacts.map((contact) => (
          <button
            key={contact.id}
            onClick={() => onSelectContact(contact.id)}
            className={`w-full p-4 text-left hover:bg-gray-50 flex items-center ${
              selectedContactId === contact.id ? 'bg-indigo-50' : ''
            }`}
          >
            <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
              <User className="h-5 w-5 text-indigo-600" />
            </div>
            <div className="ml-3 flex-1">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">{contact.name}</p>
                {contact.unread && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                    {contact.unread}
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-500">{contact.role}</p>
              {contact.lastMessage && (
                <p className="text-xs text-gray-500 truncate mt-1">{contact.lastMessage}</p>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}