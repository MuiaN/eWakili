import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Check } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { useSubscriptionStore } from '../../store/subscriptionStore';

const subscriptionPlans = [
  {
    id: 'starter',
    name: 'Starter',
    price: 49,
    staffLimit: 5,
    features: [
      'Up to 5 staff members',
      'Basic case management',
      'Document storage',
      'Client portal',
      'Email support',
    ],
  },
  {
    id: 'professional',
    name: 'Professional',
    price: 199,
    staffLimit: 30,
    features: [
      'Up to 30 staff members',
      'Advanced case management',
      'Document automation',
      'Client portal with custom branding',
      'Priority support',
      'Analytics and reporting',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 499,
    staffLimit: 50,
    features: [
      'Up to 50 staff members',
      'Enterprise case management',
      'Advanced document automation',
      'White-labeled client portal',
      '24/7 priority support',
      'Custom integrations',
      'Dedicated account manager',
    ],
  },
];

export default function SubscriptionPlans() {
  const navigate = useNavigate();
  const { setSubscription } = useSubscriptionStore();

  const handlePlanSelection = (plan: typeof subscriptionPlans[0]) => {
    setSubscription({
      planId: plan.id,
      planName: plan.name,
      price: plan.price,
      staffLimit: plan.staffLimit,
      features: plan.features,
    });
    navigate('/payment');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Choose your subscription plan
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Select a plan that best fits your firm's needs
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {subscriptionPlans.map((plan) => (
            <div
              key={plan.id}
              className="bg-white rounded-lg shadow-lg divide-y divide-gray-200"
            >
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900">
                  {plan.name}
                </h3>
                <p className="mt-4">
                  <span className="text-4xl font-extrabold text-gray-900">
                    ${plan.price}
                  </span>
                  <span className="text-base font-medium text-gray-500">
                    /month
                  </span>
                </p>
                <p className="mt-2 text-sm text-gray-500">
                  Plus $10 per staff member
                </p>
                <Button
                  className="mt-8 w-full"
                  onClick={() => handlePlanSelection(plan)}
                >
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
                      <span className="ml-3 text-sm text-gray-700">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}