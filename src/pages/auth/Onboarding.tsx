import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Check, Users, Building } from 'lucide-react';

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

type OnboardingStep = 'plan' | 'company' | 'payment';

export default function Onboarding() {
  const navigate = useNavigate();
  const [step, setStep] = useState<OnboardingStep>('plan');
  const [selectedPlan, setSelectedPlan] = useState<string>('');
  const [companyDetails, setCompanyDetails] = useState({
    name: '',
    address: '',
    phone: '',
    website: '',
    registrationNumber: '',
  });

  const handlePlanSelection = (planId: string) => {
    setSelectedPlan(planId);
    setStep('company');
  };

  const handleCompanySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('payment');
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Process payment and create account
    navigate('/admin');
  };

  if (step === 'plan') {
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
                    onClick={() => handlePlanSelection(plan.id)}
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

  if (step === 'company') {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          <div className="text-center">
            <Building className="mx-auto h-12 w-12 text-indigo-600" />
            <h2 className="mt-6 text-3xl font-bold text-gray-900">
              Company Details
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Tell us about your legal practice
            </p>
          </div>

          <form onSubmit={handleCompanySubmit} className="mt-8 space-y-6">
            <div className="space-y-4">
              <Input
                label="Company Name"
                value={companyDetails.name}
                onChange={(e) =>
                  setCompanyDetails({ ...companyDetails, name: e.target.value })
                }
                required
              />
              <Input
                label="Address"
                value={companyDetails.address}
                onChange={(e) =>
                  setCompanyDetails({ ...companyDetails, address: e.target.value })
                }
                required
              />
              <Input
                label="Phone"
                value={companyDetails.phone}
                onChange={(e) =>
                  setCompanyDetails({ ...companyDetails, phone: e.target.value })
                }
                required
              />
              <Input
                label="Website"
                value={companyDetails.website}
                onChange={(e) =>
                  setCompanyDetails({ ...companyDetails, website: e.target.value })
                }
              />
              <Input
                label="Registration Number"
                value={companyDetails.registrationNumber}
                onChange={(e) =>
                  setCompanyDetails({
                    ...companyDetails,
                    registrationNumber: e.target.value,
                  })
                }
                required
              />
            </div>

            <Button type="submit" className="w-full">
              Continue to Payment
            </Button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Payment Details</h2>
          <p className="mt-2 text-sm text-gray-600">
            Complete your subscription setup
          </p>
        </div>

        <form onSubmit={handlePaymentSubmit} className="mt-8 space-y-6">
          <div className="space-y-4">
            <Input
              label="Card Number"
              placeholder="1234 1234 1234 1234"
              required
            />
            <div className="grid grid-cols-2 gap-4">
              <Input label="Expiry Date" placeholder="MM/YY" required />
              <Input label="CVC" placeholder="123" required />
            </div>
            <Input
              label="Cardholder Name"
              placeholder="Name on card"
              required
            />
          </div>

          <Button type="submit" className="w-full">
            Complete Setup
          </Button>
        </form>
      </div>
    </div>
  );
}