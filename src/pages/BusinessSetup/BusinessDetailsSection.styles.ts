import styled from 'styled-components';

export const DetailsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  direction: rtl;
`;

export const TwoColumnGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: ${({ theme }) => theme.spacing.md};
  direction: rtl;
`;

export const CheckboxGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  align-items: center;
  direction: rtl;
  grid-column: 1 / -1;
`;

export const CheckboxItem = styled.div`
  display: flex;
  align-items: center;
`;

