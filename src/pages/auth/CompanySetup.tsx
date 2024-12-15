import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Building } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { useCompanyStore } from '../../store/companyStore';

export default function CompanySetup() {
  const navigate = useNavigate();
  const { setCompany } = useCompanyStore();
  const [companyDetails, setCompanyDetails] = useState({
    name: '',
    registrationNumber: '',
    address: '',
    city: '',
    state: '',
    country: '',
    postalCode: '',
    website: '',
    companyPhone: '',
    industry: 'Legal',
    size: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCompany(companyDetails);
    navigate('/subscription');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="text-center">
          <Building className="mx-auto h-12 w-12 text-indigo-600" />
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Set up your law firm
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Tell us about your legal practice
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="bg-white shadow rounded-lg p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Company Name
              </label>
              <Input
                value={companyDetails.name}
                onChange={(e) =>
                  setCompanyDetails({ ...companyDetails, name: e.target.value })
                }
                placeholder="Enter your company name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Registration Number
              </label>
              <Input
                value={companyDetails.registrationNumber}
                onChange={(e) =>
                  setCompanyDetails({
                    ...companyDetails,
                    registrationNumber: e.target.value,
                  })
                }
                placeholder="Company registration number"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Address
              </label>
              <Input
                value={companyDetails.address}
                onChange={(e) =>
                  setCompanyDetails({ ...companyDetails, address: e.target.value })
                }
                placeholder="Street address"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  City
                </label>
                <Input
                  value={companyDetails.city}
                  onChange={(e) =>
                    setCompanyDetails({ ...companyDetails, city: e.target.value })
                  }
                  placeholder="City"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  State/Province
                </label>
                <Input
                  value={companyDetails.state}
                  onChange={(e) =>
                    setCompanyDetails({ ...companyDetails, state: e.target.value })
                  }
                  placeholder="State/Province"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Country
                </label>
                <Input
                  value={companyDetails.country}
                  onChange={(e) =>
                    setCompanyDetails({ ...companyDetails, country: e.target.value })
                  }
                  placeholder="Country"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Postal Code
                </label>
                <Input
                  value={companyDetails.postalCode}
                  onChange={(e) =>
                    setCompanyDetails({
                      ...companyDetails,
                      postalCode: e.target.value,
                    })
                  }
                  placeholder="Postal code"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Website
              </label>
              <Input
                type="url"
                value={companyDetails.website}
                onChange={(e) =>
                  setCompanyDetails({ ...companyDetails, website: e.target.value })
                }
                placeholder="https://example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Company Phone
              </label>
              <Input
                type="tel"
                value={companyDetails.companyPhone}
                onChange={(e) =>
                  setCompanyDetails({
                    ...companyDetails,
                    companyPhone: e.target.value,
                  })
                }
                placeholder="+1 (555) 123-4567"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Company Size
              </label>
              <Input
                type="number"
                value={companyDetails.size}
                onChange={(e) =>
                  setCompanyDetails({ ...companyDetails, size: e.target.value })
                }
                placeholder="Number of employees"
                required
              />
            </div>
          </div>

          <Button type="submit" className="w-full">
            Continue to Subscription
          </Button>
        </form>
      </div>
    </div>
  );
}