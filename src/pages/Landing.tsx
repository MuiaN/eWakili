import React from 'react';
import { ArrowRight, Scale, Shield, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

const features = [
  {
    name: 'Secure Document Management',
    description: 'Keep your legal documents organized and secure with enterprise-grade encryption.',
    icon: Shield,
  },
  {
    name: 'Case Management',
    description: 'Track and manage all your cases efficiently from a single dashboard.',
    icon: Scale,
  },
  {
    name: 'Time Tracking',
    description: 'Track billable hours and manage your time effectively.',
    icon: Clock,
  },
];

export default function Landing() {
  return (
    <div className="relative isolate">
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Legal Practice Management Made Simple
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Streamline your legal practice with our comprehensive management system.
              From case tracking to document management, we've got you covered.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link to="/signup">
                <Button size="lg">
                  Get started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="mx-auto mt-32 max-w-2xl sm:mt-40 lg:mt-56 lg:max-w-4xl">
            <div className="grid grid-cols-1 gap-y-16 gap-x-8 lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col items-start">
                  <div className="rounded-md bg-indigo-500/10 p-2 ring-1 ring-indigo-500/20">
                    <feature.icon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-gray-900">
                    {feature.name}
                  </h3>
                  <p className="mt-2 text-base text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}