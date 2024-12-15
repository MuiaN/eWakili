import React from 'react';
import { Input } from '../ui/Input';
import { UserRegistration } from '../../types/auth';

interface RegistrationFormProps {
  formData: UserRegistration;
  onChange: (field: keyof UserRegistration, value: string) => void;
}

export default function RegistrationForm({ formData, onChange }: RegistrationFormProps) {
  return (
    <div className="space-y-4">
      <Input
        type="text"
        placeholder="Full name"
        value={formData.fullName}
        onChange={(e) => onChange('fullName', e.target.value)}
        required
      />
      <Input
        type="email"
        placeholder="Email address"
        value={formData.email}
        onChange={(e) => onChange('email', e.target.value)}
        required
      />
      <Input
        type="tel"
        placeholder="Phone number"
        value={formData.phoneNumber}
        onChange={(e) => onChange('phoneNumber', e.target.value)}
        required
      />
      <Input
        type="text"
        placeholder="Position in company"
        value={formData.position}
        onChange={(e) => onChange('position', e.target.value)}
        required
      />
      <Input
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(e) => onChange('password', e.target.value)}
        required
      />
      <Input
        type="password"
        placeholder="Confirm password"
        value={formData.confirmPassword}
        onChange={(e) => onChange('confirmPassword', e.target.value)}
        required
      />
    </div>
  );
}