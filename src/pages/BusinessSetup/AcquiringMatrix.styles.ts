import styled from 'styled-components';

export const MatrixTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  direction: rtl;
  background-color: ${({ theme }) => theme.colors.background.primary};
`;

export const TableHeader = styled.th`
  padding: ${({ theme }) => theme.spacing.md};
  text-align: right;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  background-color: ${({ theme }) => theme.colors.background.tertiary};
  border: 1px solid ${({ theme }) => theme.colors.border.light};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: ${({ theme }) => theme.colors.background.secondary};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.background.tertiary};
  }
`;

export const TableCell = styled.td`
  padding: ${({ theme }) => theme.spacing.sm};
  border: 1px solid ${({ theme }) => theme.colors.border.light};
  text-align: right;
`;

