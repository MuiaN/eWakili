import React from 'react';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { MessageSquare, Phone, Mail, FileQuestion } from 'lucide-react';

const supportOptions = [
  {
    title: 'Live Chat',
    description: 'Chat with our support team',
    icon: MessageSquare,
    action: 'Start Chat',
  },
  {
    title: 'Phone Support',
    description: 'Call us directly',
    icon: Phone,
    action: 'Call Now',
  },
  {
    title: 'Email Support',
    description: 'Send us an email',
    icon: Mail,
    action: 'Send Email',
  },
  {
    title: 'FAQ',
    description: 'Browse common questions',
    icon: FileQuestion,
    action: 'View FAQs',
  },
];

export default function ClientSupport() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Support</h1>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {supportOptions.map((option) => (
          <div
            key={option.title}
            className="bg-white rounded-lg shadow p-6"
          >
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <option.icon className="h-6 w-6 text-indigo-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-900">
                  {option.title}
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  {option.description}
                </p>
              </div>
              <Button variant="outline">{option.action}</Button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Contact Support
          </h3>
          <form className="space-y-4">
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                Subject
              </label>
              <Input
                id="subject"
                placeholder="What can we help you with?"
                className="mt-1"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Describe your issue..."
              />
            </div>
            <Button type="submit">Submit Request</Button>
          </form>
        </div>
      </div>
    </div>
  );
}