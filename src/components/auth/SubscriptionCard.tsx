import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '../ui/Button';
import { SubscriptionPlan } from '../../types/auth';

interface SubscriptionCardProps {
  plan: SubscriptionPlan;
  onSelect: (plan: SubscriptionPlan) => void;
}

export default function SubscriptionCard({ plan, onSelect }: SubscriptionCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg divide-y divide-gray-200">
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-900">{plan.name}</h3>
        <p className="mt-4">
          <span className="text-4xl font-extrabold text-gray-900">
            ${plan.price}
          </span>
          <span className="text-base font-medium text-gray-500">/month</span>
        </p>
        <p className="mt-2 text-sm text-gray-500">Plus $10 per staff member</p>
        <Button className="mt-8 w-full" onClick={() => onSelect(plan)}>
          Select {plan.name}
        </Button>
      </div>
      <div className="px-6 pt-6 pb-8">
        <h4 className="text-sm font-semibold text-gray-900 tracking-wide uppercase">
          What's included
        </h4>
        <ul className="mt-6 space-y-4">
          {plan.features.map((feature) => (
            <li key={feature} className="flex">
              <Check className="flex-shrink-0 h-5 w-5 text-green-500" />
              <span className="ml-3 text-sm text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}