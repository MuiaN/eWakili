import React from 'react';
import { Button } from '../../components/ui/Button';
import { PlusCircle, ChevronLeft, ChevronRight } from 'lucide-react';

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const currentDate = new Date();

const mockEvents = [
  {
    id: 1,
    title: 'Client Meeting',
    date: '2024-03-15',
    time: '10:00 AM',
    type: 'meeting',
  },
  {
    id: 2,
    title: 'Court Hearing',
    date: '2024-03-20',
    time: '2:00 PM',
    type: 'hearing',
  },
];

export default function StaffCalendar() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Calendar</h1>
        <Button>
          <PlusCircle className="h-4 w-4 mr-2" />
          Add Event
        </Button>
      </div>

      <div className="bg-white shadow rounded-lg">
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h2 className="text-lg font-semibold text-gray-900">
            {currentDate.toLocaleString('default', { month: 'long' })}{' '}
            {currentDate.getFullYear()}
          </h2>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-px bg-gray-200">
          {days.map((day) => (
            <div
              key={day}
              className="bg-gray-50 py-2 text-center text-xs font-semibold uppercase tracking-wide text-gray-500"
            >
              {day}
            </div>
          ))}
          {/* Calendar days would be rendered here */}
        </div>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Upcoming Events
        </h3>
        <div className="space-y-4">
          {mockEvents.map((event) => (
            <div
              key={event.id}
              className="flex items-center justify-between p-4 border rounded-lg"
            >
              <div>
                <h4 className="font-medium text-gray-900">{event.title}</h4>
                <p className="text-sm text-gray-500">
                  {event.date} at {event.time}
                </p>
              </div>
              <span
                className={`px-2 py-1 text-xs font-semibold rounded-full ${
                  event.type === 'meeting'
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {event.type}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}