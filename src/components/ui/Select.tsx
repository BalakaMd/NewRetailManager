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

