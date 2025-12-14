import { forwardRef } from 'react';
import {
  SelectWrapper,
  Label,
  StyledSelect,
  ErrorText,
  HelperText,
} from './Select.styles';

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

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, helperText, options, ...props }, ref) => {
    return (
      <SelectWrapper>
        {label && <Label htmlFor={props.id}>{label}</Label>}
        <StyledSelect $hasError={!!error} ref={ref} {...props}>
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
  }
);

Select.displayName = 'Select';

