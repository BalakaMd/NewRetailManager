import styled from 'styled-components';

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
  width: 100%;
`;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.text.primary};
  direction: rtl;
  text-align: right;
`;

export const StyledInput = styled.input<{ $hasError: boolean }>`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-family: ${({ theme }) => theme.typography.fontFamily.hebrew};
  color: ${({ theme }) => theme.colors.text.primary};
  background-color: ${({ theme }) => theme.colors.background.primary};
  border: 1px solid
    ${({ theme, $hasError }) =>
      $hasError ? theme.colors.status.error : theme.colors.border.default};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  direction: rtl;
  text-align: right;
  transition: all ${({ theme }) => theme.transitions.default};

  &:focus {
    outline: none;
    border-color: ${({ theme, $hasError }) =>
      $hasError ? theme.colors.status.error : theme.colors.primary.main};
    box-shadow: 0 0 0 3px
      ${({ theme, $hasError }) =>
        $hasError
          ? `${theme.colors.status.error}20`
          : `${theme.colors.primary.main}20`};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.background.tertiary};
    cursor: not-allowed;
    opacity: 0.6;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.tertiary};
  }

  /* Hide spinner for number inputs */
  &[type='number'] {
    -moz-appearance: textfield;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;

export const ErrorText = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.status.error};
  direction: rtl;
  text-align: right;
`;

export const HelperText = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.text.secondary};
  direction: rtl;
  text-align: right;
`;

