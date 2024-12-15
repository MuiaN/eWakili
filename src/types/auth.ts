export interface UserRegistration {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  position: string;
  phoneNumber: string;
}

export interface CompanyDetails {
  name: string;
  registrationNumber: string;
  address: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
  website: string;
  companyPhone: string;
  industry: string;
  size: string;
}

export interface SubscriptionPlan {
  id: string;
  name: string;
  price: number;
  staffLimit: number;
  features: string[];
}

export interface Subscription {
  planId: string;
  planName: string;
  price: number;
  staffLimit: number;
  features: string[];
}