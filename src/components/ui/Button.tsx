import styled, { css } from 'styled-components';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  isLoading?: boolean;
}

const StyledButton = styled.button<{
  $variant: ButtonVariant;
  $size: ButtonSize;
  $fullWidth: boolean;
  $isLoading: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  font-family: ${({ theme }) => theme.typography.fontFamily.hebrew};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.default};
  position: relative;
  direction: rtl;

  ${({ $fullWidth }) =>
    $fullWidth &&
    css`
      width: 100%;
    `}

  ${({ $isLoading }) =>
    $isLoading &&
    css`
      pointer-events: none;
      opacity: 0.7;
    `}

  /* Size variants */
  ${({ $size }) => {
    switch ($size) {
      case 'sm':
        return css`
          padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
          font-size: ${({ theme }) => theme.typography.fontSize.sm};
        `;
      case 'lg':
        return css`
          padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
          font-size: ${({ theme }) => theme.typography.fontSize.lg};
        `;
      default:
        return css`
          padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
          font-size: ${({ theme }) => theme.typography.fontSize.base};
        `;
    }
  }}

  /* Variant styles */
  ${({ $variant, theme }) => {
    switch ($variant) {
      case 'primary':
        return css`
          background-color: ${theme.colors.primary.main};
          color: ${theme.colors.text.inverse};

          &:hover:not(:disabled) {
            background-color: ${theme.colors.primary.hover};
          }

          &:active:not(:disabled) {
            background-color: ${theme.colors.primary.dark};
          }
        `;
      case 'secondary':
        return css`
          background-color: ${theme.colors.secondary.main};
          color: ${theme.colors.text.inverse};

          &:hover:not(:disabled) {
            background-color: ${theme.colors.secondary.dark};
          }
        `;
      case 'outline':
        return css`
          background-color: transparent;
          color: ${theme.colors.primary.main};
          border: 1px solid ${theme.colors.primary.main};

          &:hover:not(:disabled) {
            background-color: ${theme.colors.primary.main};
            color: ${theme.colors.text.inverse};
          }
        `;
      case 'ghost':
        return css`
          background-color: transparent;
          color: ${theme.colors.text.primary};

          &:hover:not(:disabled) {
            background-color: ${theme.colors.background.tertiary};
          }
        `;
      default:
        return css`
          background-color: ${theme.colors.primary.main};
          color: ${theme.colors.text.inverse};
        `;
    }
  }}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary.main};
    outline-offset: 2px;
  }
`;

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  isLoading = false,
  children,
  disabled,
  ...props
}) => {
  return (
    <StyledButton
      $variant={variant}
      $size={size}
      $fullWidth={fullWidth}
      $isLoading={isLoading}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && <span>⏳</span>}
      {children}
    </StyledButton>
  );
};

