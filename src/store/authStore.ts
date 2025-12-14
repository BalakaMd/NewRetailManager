import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { LoginRequest, LoginResponse } from '../services/api/auth';
import { mockLogin } from '../services/mocks';

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  user: {
    kidometMefic: string;
    hpMefic: string;
    userName: string;
  } | null;
  isLoading: boolean;
  error: string | null;
  login: (credentials: LoginRequest) => Promise<boolean>;
  logout: () => void;
  clearError: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      token: null,
      user: null,
      isLoading: false,
      error: null,

      login: async (credentials: LoginRequest) => {
        set({ isLoading: true, error: null });

        try {
          // Use mock for now - replace with real API call later
          const response: LoginResponse = await mockLogin(credentials);

          if (response.hasError || !response.token) {
            set({
              isLoading: false,
              error: response.errors?.message || 'Login failed',
            });
            return false;
          }

          // Store token
          localStorage.setItem('authToken', response.token);

          set({
            isAuthenticated: true,
            token: response.token,
            user: {
              kidometMefic: credentials.KidometMefic,
              hpMefic: credentials.HPMefic,
              userName: credentials.UserName,
            },
            isLoading: false,
            error: null,
          });

          return true;
        } catch (error) {
          set({
            isLoading: false,
            error: error instanceof Error ? error.message : 'An error occurred',
          });
          return false;
        }
      },

      logout: () => {
        localStorage.removeItem('authToken');
        set({
          isAuthenticated: false,
          token: null,
          user: null,
          error: null,
        });
      },

      clearError: () => {
        set({ error: null });
      },
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({
        isAuthenticated: state.isAuthenticated,
        token: state.token,
        user: state.user,
      }),
    }
  )
);

