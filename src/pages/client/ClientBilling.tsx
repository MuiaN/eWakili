import React from 'react';
import { DollarSign, Download, CreditCard } from 'lucide-react';
import { Button } from '../../components/ui/Button';

const mockInvoices = [
  {
    id: 'INV-001',
    date: '2024-03-15',
    amount: 2500.00,
    status: 'pending',
    dueDate: '2024-03-30',
    description: 'Legal consultation and document preparation',
  },
  {
    id: 'INV-002',
    date: '2024-03-01',
    amount: 1750.00,
    status: 'paid',
    dueDate: '2024-03-15',
    description: 'Court filing fees and representation',
  },
];

export default function ClientBilling() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Billing</h1>
        <Button>
          <CreditCard className="h-4 w-4 mr-2" />
          Make Payment
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <DollarSign className="h-8 w-8 text-green-500" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Total Due</p>
              <p className="text-2xl font-semibold text-gray-900">$4,250.00</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Recent Invoices
          </h3>
          <div className="space-y-4">
            {mockInvoices.map((invoice) => (
              <div
                key={invoice.id}
                className="border rounded-lg p-4 flex items-center justify-between"
              >
                <div>
                  <p className="font-medium text-gray-900">{invoice.id}</p>
                  <p className="text-sm text-gray-500">{invoice.description}</p>
                  <p className="text-xs text-gray-400">
                    Due: {invoice.dueDate}
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">
                      ${invoice.amount.toFixed(2)}
                    </p>
                    <span
                      className={`inline-flex text-xs font-semibold rounded-full px-2 py-1 ${
                        invoice.status === 'paid'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {invoice.status}
                    </span>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Payment Methods
          </h3>
          <div className="space-y-4">
            <Button variant="outline" className="w-full">
              <CreditCard className="h-4 w-4 mr-2" />
              Add Payment Method
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}