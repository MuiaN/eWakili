import React from 'react';
import { Button } from '../components/ui/Button';
import { PlusCircle, ChevronLeft, ChevronRight } from 'lucide-react';

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const currentDate = new Date();
const daysInMonth = new Date(
  currentDate.getFullYear(),
  currentDate.getMonth() + 1,
  0
).getDate();

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
  {
    id: 3,
    title: 'Document Review',
    date: '2024-03-25',
    time: '11:30 AM',
    type: 'task',
  },
];

export default function Calendar() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Calendar</h1>
        <Button>
          <PlusCircle className="h-4 w-4 mr-2" />
          Add Event
        </Button>
      </div>

      <div className="bg-white shadow ring-1 ring-black ring-opacity-5 rounded-lg">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <div className="flex items-center">
            <h2 className="text-lg font-semibold text-gray-900">
              {currentDate.toLocaleString('default', { month: 'long' })}{' '}
              {currentDate.getFullYear()}
            </h2>
          </div>
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
          {Array.from({ length: daysInMonth }).map((_, index) => (
            <div
              key={index}
              className="bg-white px-3 py-2 text-sm h-32 relative"
            >
              <time
                dateTime={`2024-03-${index + 1}`}
                className={`font-semibold ${
                  index + 1 === currentDate.getDate()
                    ? 'text-indigo-600'
                    : 'text-gray-900'
                }`}
              >
                {index + 1}
              </time>
              {mockEvents
                .filter(
                  (event) =>
                    new Date(event.date).getDate() === index + 1
                )
                .map((event) => (
                  <div
                    key={event.id}
                    className={`mt-1 px-2 py-1 text-xs rounded-md ${
                      event.type === 'meeting'
                        ? 'bg-blue-100 text-blue-700'
                        : event.type === 'hearing'
                        ? 'bg-red-100 text-red-700'
                        : 'bg-green-100 text-green-700'
                    }`}
                  >
                    <p className="font-medium">{event.title}</p>
                    <p>{event.time}</p>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}