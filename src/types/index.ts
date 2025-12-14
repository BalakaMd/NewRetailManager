// Common types used across the application

export interface ApiError {
  code: number;
  message: string;
  severity: number;
}

export interface ApiResponse<T = unknown> {
  hasError: boolean;
  errors?: ApiError;
  data?: T;
}

