import { forwardRef } from 'react';
import {
  InputWrapper,
  Label,
  StyledInput,
  ErrorText,
  HelperText,
} from './Input.styles';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, ...props }, ref) => {
    return (
      <InputWrapper>
        {label && <Label htmlFor={props.id}>{label}</Label>}
        <StyledInput $hasError={!!error} ref={ref} {...props} />
        {error && <ErrorText>{error}</ErrorText>}
        {!error && helperText && <HelperText>{helperText}</HelperText>}
      </InputWrapper>
    );
  }
);

Input.displayName = 'Input';

