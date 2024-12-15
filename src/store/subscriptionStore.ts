import { create } from 'zustand';
import { Subscription } from '../types/auth';

interface SubscriptionState {
  subscription: Subscription | null;
  setSubscription: (subscription: Subscription) => void;
}

export const useSubscriptionStore = create<SubscriptionState>((set) => ({
  subscription: null,
  setSubscription: (subscription) => set({ subscription }),
}));