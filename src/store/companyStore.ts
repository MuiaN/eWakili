import { create } from 'zustand';
import { CompanyDetails } from '../types/auth';

interface CompanyState {
  company: CompanyDetails | null;
  setCompany: (company: CompanyDetails) => void;
}

export const useCompanyStore = create<CompanyState>((set) => ({
  company: null,
  setCompany: (company) => set({ company }),
}));