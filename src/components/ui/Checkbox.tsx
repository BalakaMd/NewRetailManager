import styled from 'styled-components';
import { theme } from '../../theme';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  direction: rtl;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;

const StyledCheckbox = styled.div<{ $checked: boolean; $disabled: boolean }>`
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

const Label = styled.label<{ $disabled: boolean }>`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme, $disabled }) =>
    $disabled ? theme.colors.text.tertiary : theme.colors.text.primary};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  user-select: none;
`;

const ErrorText = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.status.error};
  direction: rtl;
  text-align: right;
  margin-top: ${({ theme }) => theme.spacing.xs};
`;

const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  error,
  checked,
  disabled,
  id,
  ...props
}) => {
  const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <CheckboxContainer>
      <CheckboxWrapper>
        <HiddenCheckbox
          id={checkboxId}
          checked={checked}
          disabled={disabled}
          {...props}
        />
        <StyledCheckbox
          $checked={!!checked}
          $disabled={!!disabled}
          data-disabled={disabled ? 'true' : 'false'}
          onClick={() => {
            if (!disabled && props.onChange) {
              const event = {
                target: { checked: !checked },
              } as React.ChangeEvent<HTMLInputElement>;
              props.onChange(event);
            }
          }}
        />
        {label && (
          <Label htmlFor={checkboxId} $disabled={!!disabled}>
            {label}
          </Label>
        )}
      </CheckboxWrapper>
      {error && <ErrorText>{error}</ErrorText>}
    </CheckboxContainer>
  );
};

