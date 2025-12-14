import styled from 'styled-components';

interface SelectOption {
  value: string | number;
  label: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  helperText?: string;
  options: SelectOption[];
}

const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
  width: 100%;
`;

const Label = styled.label`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.text.primary};
  direction: rtl;
  text-align: right;
`;

const StyledSelect = styled.select<{ $hasError: boolean }>`
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
  cursor: pointer;
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
`;

const ErrorText = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.status.error};
  direction: rtl;
  text-align: right;
`;

const HelperText = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.text.secondary};
  direction: rtl;
  text-align: right;
`;

export const Select: React.FC<SelectProps> = ({
  label,
  error,
  helperText,
  options,
  ...props
}) => {
  return (
    <SelectWrapper>
      {label && <Label htmlFor={props.id}>{label}</Label>}
      <StyledSelect $hasError={!!error} {...props}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </StyledSelect>
      {error && <ErrorText>{error}</ErrorText>}
      {!error && helperText && <HelperText>{helperText}</HelperText>}
    </SelectWrapper>
  );
};

