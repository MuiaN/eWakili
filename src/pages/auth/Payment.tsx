import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Lock } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { useSubscriptionStore } from '../../store/subscriptionStore';

export default function Payment() {
  const navigate = useNavigate();
  const { subscription } = useSubscriptionStore();
  const [isProcessing, setIsProcessing] = useState(false);

  // For demo purposes, auto-fill payment details
  const [paymentDetails] = useState({
    cardNumber: '4242 4242 4242 4242',
    expiryDate: '12/25',
    cvc: '123',
    cardholderName: 'Demo User',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // For demo, always succeed
    navigate('/admin');
  };

  if (!subscription) {
    navigate('/subscription');
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="text-center">
          <CreditCard className="mx-auto h-12 w-12 text-indigo-600" />
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Complete your subscription
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Demo Mode: Payment will be auto-approved
          </p>
        </div>

        <div className="mt-8">
          <div className="bg-white p-6 shadow rounded-lg">
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-900">Order Summary</h3>
              <div className="mt-4 flex justify-between">
                <span className="text-gray-600">{subscription.planName} Plan</span>
                <span className="font-medium">${subscription.price}/month</span>
              </div>
              <div className="mt-1 flex justify-between text-sm">
                <span className="text-gray-500">Staff member limit</span>
                <span>{subscription.staffLimit} members</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Card Number
                  </label>
                  <Input
                    value={paymentDetails.cardNumber}
                    readOnly
                    className="bg-gray-50"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Expiry Date
                    </label>
                    <Input
                      value={paymentDetails.expiryDate}
                      readOnly
                      className="bg-gray-50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      CVC
                    </label>
                    <Input
                      value={paymentDetails.cvc}
                      readOnly
                      className="bg-gray-50"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Cardholder Name
                  </label>
                  <Input
                    value={paymentDetails.cardholderName}
                    readOnly
                    className="bg-gray-50"
                  />
                </div>
              </div>

              <div className="flex items-center">
                <Lock className="h-4 w-4 text-gray-400 mr-2" />
                <span className="text-sm text-gray-500">
                  Demo Mode: No actual payment will be processed
                </span>
              </div>

              <Button
                type="submit"
                className="w-full"
                disabled={isProcessing}
              >
                {isProcessing ? 'Processing...' : 'Complete Purchase'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}