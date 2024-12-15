import React from 'react';
import { Activity, Server, Database, Globe } from 'lucide-react';

interface SystemMetric {
  name: string;
  value: string;
  status: 'healthy' | 'warning' | 'critical';
  icon: React.ElementType;
}

const metrics: SystemMetric[] = [
  {
    name: 'Server Status',
    value: '99.9% Uptime',
    status: 'healthy',
    icon: Server,
  },
  {
    name: 'Database Performance',
    value: '45ms Response',
    status: 'healthy',
    icon: Database,
  },
  {
    name: 'API Health',
    value: '98% Success Rate',
    status: 'warning',
    icon: Globe,
  },
  {
    name: 'System Load',
    value: '65%',
    status: 'healthy',
    icon: Activity,
  },
];

export default function SystemHealth() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-gray-900">System Health</h2>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <div
            key={metric.name}
            className="bg-white overflow-hidden shadow rounded-lg"
          >
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <metric.icon
                    className={`h-6 w-6 ${
                      metric.status === 'healthy'
                        ? 'text-green-500'
                        : metric.status === 'warning'
                        ? 'text-yellow-500'
                        : 'text-red-500'
                    }`}
                  />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      {metric.name}
                    </dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-semibold text-gray-900">
                        {metric.value}
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">
            System Metrics
          </h3>
          <div className="space-y-4">
            {metrics.map((metric) => (
              <div key={metric.name} className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600">
                      {metric.name}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-gray-600">
                      {metric.value}
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                  <div
                    style={{ width: metric.value }}
                    className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${
                      metric.status === 'healthy'
                        ? 'bg-green-500'
                        : metric.status === 'warning'
                        ? 'bg-yellow-500'
                        : 'bg-red-500'
                    }`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}