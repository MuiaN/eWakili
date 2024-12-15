import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import RegistrationForm from '../../components/auth/RegistrationForm';
import { useAuthStore } from '../../store/authStore';
import { UserRegistration } from '../../types/auth';

export default function SignUp() {
  const navigate = useNavigate();
  const { setUser } = useAuthStore();
  const [formData, setFormData] = useState<UserRegistration>({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    position: '',
    phoneNumber: '',
  });

  const handleChange = (field: keyof UserRegistration, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setUser({
      id: '1',
      name: formData.fullName,
      email: formData.email,
      role: 'SUPER_ADMIN',
      permissions: {
        viewCases: true,
        viewDocuments: true,
        viewBilling: true,
        viewCalendar: true,
        submitDocuments: true,
        communicateWithTeam: true,
      },
    });
    navigate('/company-setup');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
            Create your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link
              to="/login"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Sign in
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <RegistrationForm formData={formData} onChange={handleChange} />
          <Button type="submit" className="w-full">
            Create account
          </Button>
          <p className="text-xs text-center text-gray-600">
            By signing up, you agree to our{' '}
            <Link to="/terms" className="text-indigo-600 hover:text-indigo-500">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link to="/privacy" className="text-indigo-600 hover:text-indigo-500">
              Privacy Policy
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}