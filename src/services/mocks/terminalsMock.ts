import { Terminal, GetTerminalsResponse } from '../api/terminals';

// Mock terminals data
const mockTerminals: Terminal[] = [
  {
    id: '1',
    terminalNumber: '0800001',
    userName: 'terminal_user_1',
    password: '****',
    tcpIp: '192.168.1.100',
    email: 'terminal1@example.com',
    createdAt: '2024-01-15T10:00:00Z',
  },
  {
    id: '2',
    terminalNumber: '0800002',
    userName: 'terminal_user_2',
    password: '****',
    tcpIp: '192.168.1.101',
    email: 'terminal2@example.com',
    createdAt: '2024-01-16T10:00:00Z',
  },
  {
    id: '3',
    terminalNumber: '0800003',
    userName: 'terminal_user_3',
    password: '****',
    tcpIp: '192.168.1.102',
    email: 'terminal3@example.com',
    createdAt: '2024-01-17T10:00:00Z',
  },
];

// Mock get terminals function
export const mockGetTerminals = async (): Promise<GetTerminalsResponse> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  return {
    terminals: mockTerminals,
    hasError: false,
  };
};

