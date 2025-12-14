import { LoginRequest, LoginResponse } from '../api/auth';

// Mock login function
export const mockLogin = async (
  credentials: LoginRequest
): Promise<LoginResponse> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Mock validation
  if (
    credentials.KidometMefic &&
    credentials.HPMefic &&
    credentials.UserName &&
    credentials.Password
  ) {
    return {
      token: 'mock-jwt-token-' + Date.now(),
      hasError: false,
    };
  }

  return {
    hasError: true,
    errors: {
      code: 401,
      message: 'Invalid credentials',
      severity: 2,
    },
  };
};

