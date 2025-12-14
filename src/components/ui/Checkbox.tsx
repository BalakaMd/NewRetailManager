import {
  CheckboxWrapper,
  HiddenCheckbox,
  StyledCheckbox,
  Label,
  ErrorText,
  CheckboxContainer,
} from './Checkbox.styles';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

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

