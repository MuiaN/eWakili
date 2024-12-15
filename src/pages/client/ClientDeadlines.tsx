import React from 'react';
import { Clock, AlertCircle, CheckCircle } from 'lucide-react';

const mockDeadlines = [
  {
    id: 1,
    title: 'Document Submission Deadline',
    date: '2024-03-20',
    time: '5:00 PM',
    case: 'Smith vs. Johnson',
    priority: 'high',
    status: 'pending',
  },
  {
    id: 2,
    title: 'Court Hearing',
    date: '2024-03-25',
    time: '10:00 AM',
    case: 'Smith vs. Johnson',
    priority: 'high',
    status: 'upcoming',
  },
  {
    id: 3,
    title: 'Review Meeting',
    date: '2024-03-18',
    time: '2:00 PM',
    case: 'Smith vs. Johnson',
    priority: 'medium',
    status: 'completed',
  },
];

export default function ClientDeadlines() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Deadlines</h1>
      </div>

      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <div className="space-y-4">
            {mockDeadlines.map((deadline) => (
              <div
                key={deadline.id}
                className="border rounded-lg p-4"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {deadline.status === 'pending' ? (
                      <Clock className="h-5 w-5 text-yellow-500" />
                    ) : deadline.status === 'completed' ? (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    ) : (
                      <AlertCircle className="h-5 w-5 text-red-500" />
                    )}
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">
                        {deadline.title}
                      </h3>
                      <p className="text-sm text-gray-500">
                        Case: {deadline.case}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">
                      {deadline.date}
                    </p>
                    <p className="text-sm text-gray-500">{deadline.time}</p>
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        deadline.priority === 'high'
                          ? 'bg-red-100 text-red-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {deadline.priority}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}