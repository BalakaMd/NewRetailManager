import apiClient from './client';

export interface LoginRequest {
  KidometMefic: string;
  HPMefic: string;
  UserName: string;
  Password: string;
}

export interface LoginResponse {
  token?: string;
  hasError: boolean;
  errors?: {
    code: number;
    message: string;
    severity: number;
  };
}

export const authApi = {
  login: async (credentials: LoginRequest): Promise<LoginResponse> => {
    // This will be implemented when real API is available
    // For now, using mock
    const response = await apiClient.post('/Auth/Login', credentials);
    return response.data;
  },
};

