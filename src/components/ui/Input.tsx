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

export const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  ...props
}) => {
  return (
    <InputWrapper>
      {label && <Label htmlFor={props.id}>{label}</Label>}
      <StyledInput $hasError={!!error} {...props} />
      {error && <ErrorText>{error}</ErrorText>}
      {!error && helperText && <HelperText>{helperText}</HelperText>}
    </InputWrapper>
  );
};

