import React from 'react';
import { Button } from '../components/ui/Button';
import { Download, BarChart2, PieChart, TrendingUp } from 'lucide-react';

const mockStats = [
  {
    id: 1,
    name: 'Total Cases',
    value: '245',
    change: '+12.5%',
    trend: 'up',
  },
  {
    id: 2,
    name: 'Active Cases',
    value: '156',
    change: '+5.2%',
    trend: 'up',
  },
  {
    id: 3,
    name: 'Closed Cases',
    value: '89',
    change: '+8.1%',
    trend: 'up',
  },
  {
    id: 4,
    name: 'Revenue',
    value: '$125,000',
    change: '+15.3%',
    trend: 'up',
  },
];

export default function Reports() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Reports</h1>
        <Button>
          <Download className="h-4 w-4 mr-2" />
          Export
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {mockStats.map((stat) => (
          <div
            key={stat.id}
            className="bg-white overflow-hidden shadow rounded-lg"
          >
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  {stat.name === 'Total Cases' ? (
                    <BarChart2 className="h-6 w-6 text-gray-400" />
                  ) : stat.name === 'Active Cases' ? (
                    <PieChart className="h-6 w-6 text-gray-400" />
                  ) : stat.name === 'Closed Cases' ? (
                    <TrendingUp className="h-6 w-6 text-gray-400" />
                  ) : (
                    <BarChart2 className="h-6 w-6 text-gray-400" />
                  )}
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      {stat.name}
                    </dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-semibold text-gray-900">
                        {stat.value}
                      </div>
                      <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                        {stat.change}
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <h3 className="text-lg font-medium text-gray-900">Case Distribution</h3>
            <div className="mt-4 h-64 bg-gray-50 rounded flex items-center justify-center">
              <span className="text-gray-500">Chart placeholder</span>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <h3 className="text-lg font-medium text-gray-900">Revenue Trends</h3>
            <div className="mt-4 h-64 bg-gray-50 rounded flex items-center justify-center">
              <span className="text-gray-500">Chart placeholder</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}