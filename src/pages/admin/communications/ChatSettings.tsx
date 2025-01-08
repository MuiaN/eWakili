import React, { useState } from 'react';
import { MessageSquare, Plus, User, Users, Search } from 'lucide-react';
import { Button } from '../../../components/ui/Button';
import { Input } from '../../../components/ui/Input';

interface ChatSettings {
  enableGroupChat: boolean;
  fileSharing: boolean;
  saveHistory: boolean;
  readReceipts: boolean;
}

const mockChats = [
  {
    id: 1,
    name: 'Sarah Wilson',
    role: 'Managing Partner',
    lastMessage: 'System update scheduled for next week',
    unread: 3,
    timestamp: '10:30 AM',
  },
  {
    id: 2,
    name: 'Legal Team Group',
    role: 'Group Chat',
    lastMessage: 'Meeting notes from today\'s session',
    unread: 0,
    timestamp: 'Yesterday',
  },
  {
    id: 3,
    name: 'David Chen',
    role: 'Client',
    lastMessage: 'Thank you for the update',
    unread: 1,
    timestamp: '2 days ago',
  },
];

export default function ChatSection() {
  const [showNewChat, setShowNewChat] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [chatSettings, setChatSettings] = useState<ChatSettings>({
    enableGroupChat: true,
    fileSharing: true,
    saveHistory: true,
    readReceipts: true,
  });

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <MessageSquare className="h-6 w-6 text-indigo-600" />
          <h2 className="ml-2 text-lg font-medium">Chats</h2>
        </div>
        <Button onClick={() => setShowNewChat(!showNewChat)}>
          <Plus className="h-4 w-4 mr-2" />
          New Chat
        </Button>
      </div>

      {showNewChat && (
        <div className="mb-6 border rounded-lg p-4 space-y-4">
          <h3 className="font-medium text-gray-900">Create New Chat</h3>
          
          <div className="space-y-4">
            <Input
              placeholder="Search users..."
              icon={<Search className="h-4 w-4 text-gray-400" />}
            />
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">Group Chat</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={chatSettings.enableGroupChat}
                  onChange={(e) => setChatSettings({...chatSettings, enableGroupChat: e.target.checked})}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">File Sharing</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={chatSettings.fileSharing}
                  onChange={(e) => setChatSettings({...chatSettings, fileSharing: e.target.checked})}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
              </label>
            </div>

            <Button className="w-full">Create Chat</Button>
          </div>
        </div>
      )}

      <div className="space-y-2">
        {mockChats.map((chat) => (
          <div
            key={chat.id}
            className="flex items-center justify-between p-3 border rounded-lg hover:border-indigo-300 transition-colors cursor-pointer"
          >
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                {chat.role === 'Group Chat' ? (
                  <Users className="h-5 w-5 text-indigo-600" />
                ) : (
                  <User className="h-5 w-5 text-indigo-600" />
                )}
              </div>
              <div>
                <h3 className="font-medium text-gray-900">{chat.name}</h3>
                <div className="flex items-center">
                  <span className="text-xs text-gray-500">{chat.role}</span>
                  <span className="mx-2 text-gray-300">•</span>
                  <span className="text-xs text-gray-500">{chat.timestamp}</span>
                </div>
                <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
              </div>
            </div>
            {chat.unread > 0 && (
              <span className="bg-indigo-100 text-indigo-600 px-2 py-1 rounded-full text-xs font-medium">
                {chat.unread}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}