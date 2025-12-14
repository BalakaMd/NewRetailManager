import styled from 'styled-components';

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  direction: rtl;
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;

export const StyledCheckbox = styled.div<{ $checked: boolean; $disabled: boolean }>`
  width: 20px;
  height: 20px;
  border: 2px solid
    ${({ theme, $checked }) =>
      $checked ? theme.colors.primary.main : theme.colors.border.default};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  background-color: ${({ theme, $checked }) =>
    $checked ? theme.colors.primary.main : theme.colors.background.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  transition: all ${({ theme }) => theme.transitions.default};
  flex-shrink: 0;

  &:hover:not([data-disabled='true']) {
    border-color: ${({ theme }) => theme.colors.primary.hover};
  }

  &[data-disabled='true'] {
    opacity: 0.6;
  }

  &::after {
    content: ${({ $checked }) => ($checked ? '"✓"' : '""')};
    color: ${({ theme }) => theme.colors.text.inverse};
    font-size: 14px;
    font-weight: bold;
  }
`;

export const Label = styled.label<{ $disabled: boolean }>`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme, $disabled }) =>
    $disabled ? theme.colors.text.tertiary : theme.colors.text.primary};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  user-select: none;
`;

export const ErrorText = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.status.error};
  direction: rtl;
  text-align: right;
  margin-top: ${({ theme }) => theme.spacing.xs};
`;

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;

