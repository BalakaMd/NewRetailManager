import apiClient from './client';

export interface Terminal {
  id: string;
  terminalNumber: string;
  userName: string;
  password: string;
  tcpIp: string;
  email: string;
  createdAt: string;
}

export interface GetTerminalsResponse {
  terminals: Terminal[];
  hasError: boolean;
  errors?: {
    code: number;
    message: string;
    severity: number;
  };
}

export const terminalsApi = {
  getTerminals: async (): Promise<GetTerminalsResponse> => {
    // This will be implemented when real API is available
    // For now, using mock
    const response = await apiClient.get('/Terminals/List');
    return response.data;
  },

  createTerminal: async (terminal: Partial<Terminal>) => {
    const response = await apiClient.post('/Terminals/Create', terminal);
    return response.data;
  },
};

