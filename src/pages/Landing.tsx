import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Scale, Shield, Clock, Bot, FileText, Users } from 'lucide-react';
import { Button } from '../components/ui/Button';

const features = [
  {
    name: 'Case Management',
    description: 'Track and manage all your legal cases efficiently from a single dashboard.',
    icon: Scale,
  },
  {
    name: 'Document Management',
    description: 'Secure document storage and management with version control.',
    icon: FileText,
  },
  {
    name: 'Client Portal',
    description: 'Give clients secure access to their case information and documents.',
    icon: Users,
  },
  {
    name: 'AI-Powered Assistant',
    description: 'Get instant answers to legal queries with our AI assistant.',
    icon: Bot,
  },
  {
    name: 'Secure & Compliant',
    description: 'Enterprise-grade security with full regulatory compliance.',
    icon: Shield,
  },
  {
    name: 'Time Tracking',
    description: 'Track billable hours and manage time efficiently.',
    icon: Clock,
  },
];

export default function Landing() {
  return (
    <div className="relative isolate">
      {/* Hero Section */}
      <div className="relative pt-14">
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
                <Link to="/login" className="text-sm font-semibold leading-6 text-gray-900">
                  Already have an account? Sign in <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mx-auto mt-8 max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Everything you need</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Powerful Features for Modern Law Firms
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our platform provides all the tools you need to run your law practice efficiently and effectively.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Start Managing Your Legal Practice Better
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Join thousands of law firms who trust eWakili to manage their practice efficiently.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link to="/signup">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                Get started today
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}