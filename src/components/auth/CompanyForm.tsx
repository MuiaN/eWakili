import React from 'react';
import { Input } from '../ui/Input';
import { CompanyDetails } from '../../types/auth';

interface CompanyFormProps {
  companyDetails: CompanyDetails;
  onChange: (field: keyof CompanyDetails, value: string) => void;
}

export default function CompanyForm({ companyDetails, onChange }: CompanyFormProps) {
  return (
    <div className="space-y-4">
      <Input
        label="Company Name"
        value={companyDetails.name}
        onChange={(e) => onChange('name', e.target.value)}
        required
      />
      <Input
        label="Registration Number"
        value={companyDetails.registrationNumber}
        onChange={(e) => onChange('registrationNumber', e.target.value)}
        required
      />
      <Input
        label="Address"
        value={companyDetails.address}
        onChange={(e) => onChange('address', e.target.value)}
        required
      />
      <div className="grid grid-cols-2 gap-4">
        <Input
          label="City"
          value={companyDetails.city}
          onChange={(e) => onChange('city', e.target.value)}
          required
        />
        <Input
          label="State/Province"
          value={companyDetails.state}
          onChange={(e) => onChange('state', e.target.value)}
          required
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Input
          label="Country"
          value={companyDetails.country}
          onChange={(e) => onChange('country', e.target.value)}
          required
        />
        <Input
          label="Postal Code"
          value={companyDetails.postalCode}
          onChange={(e) => onChange('postalCode', e.target.value)}
          required
        />
      </div>
      <Input
        label="Website"
        type="url"
        value={companyDetails.website}
        onChange={(e) => onChange('website', e.target.value)}
      />
      <Input
        label="Company Phone"
        type="tel"
        value={companyDetails.companyPhone}
        onChange={(e) => onChange('companyPhone', e.target.value)}
        required
      />
      <Input
        label="Company Size"
        type="number"
        placeholder="Number of employees"
        value={companyDetails.size}
        onChange={(e) => onChange('size', e.target.value)}
        required
      />
    </div>
  );
}