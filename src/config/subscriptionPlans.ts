import { SubscriptionPlan } from '../types/auth';

export const subscriptionPlans: SubscriptionPlan[] = [
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