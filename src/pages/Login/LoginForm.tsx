import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { Button, Input } from '../../components/ui';
import { useAuthStore } from '../../store/authStore';
import { LoginRequest } from '../../services/api/auth';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const ErrorMessage = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.status.error}15;
  border: 1px solid ${({ theme }) => theme.colors.status.error};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: ${({ theme }) => theme.colors.status.error};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  text-align: center;
  direction: rtl;
`;

const ChangePasswordLink = styled.a`
  text-align: center;
  color: ${({ theme }) => theme.colors.primary.main};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  text-decoration: none;
  cursor: pointer;
  margin-top: ${({ theme }) => theme.spacing.sm};
  transition: color ${({ theme }) => theme.transitions.default};

  &:hover {
    color: ${({ theme }) => theme.colors.primary.hover};
    text-decoration: underline;
  }
`;

interface LoginFormProps {
  onSuccess?: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onSuccess }) => {
  const { login, isLoading, error, clearError } = useAuthStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginRequest>({
    defaultValues: {
      KidometMefic: '',
      HPMefic: '',
      UserName: '',
      Password: '',
    },
  });

  const onSubmit = async (data: LoginRequest) => {
    clearError();
    const success = await login(data);
    if (success && onSuccess) {
      onSuccess();
    }
  };

  const handleChangePasswordClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // TODO: Navigate to change password page
    console.log('Navigate to change password');
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {error && <ErrorMessage>{error}</ErrorMessage>}

      <Input
        label="קידומת מפיץ"
        type="number"
        placeholder="לדוגמה: 111"
        {...register('KidometMefic', {
          required: 'קידומת מפיץ היא שדה חובה',
          min: {
            value: 1,
            message: 'קידומת מפיץ חייבת להיות מספר חיובי',
          },
        })}
        error={errors.KidometMefic?.message}
      />

      <Input
        label="מס' חברה (ח.פ)"
        type="number"
        placeholder="הכנס מספר חברה"
        {...register('HPMefic', {
          required: "מס' חברה הוא שדה חובה",
          min: {
            value: 1,
            message: "מס' חברה חייב להיות מספר חיובי",
          },
        })}
        error={errors.HPMefic?.message}
      />

      <Input
        label="קוד משתמש"
        type="text"
        placeholder="לדוגמה: user"
        {...register('UserName', {
          required: 'קוד משתמש הוא שדה חובה',
          minLength: {
            value: 2,
            message: 'קוד משתמש חייב להכיל לפחות 2 תווים',
          },
        })}
        error={errors.UserName?.message}
      />

      <Input
        label="סיסמא"
        type="password"
        placeholder="הכנס סיסמא"
        {...register('Password', {
          required: 'סיסמא היא שדה חובה',
          minLength: {
            value: 6,
            message: 'סיסמא חייבת להכיל לפחות 6 תווים',
          },
        })}
        error={errors.Password?.message}
      />

      <Button type="submit" variant="primary" fullWidth isLoading={isLoading}>
        כניסה
      </Button>

      <ChangePasswordLink href="#" onClick={handleChangePasswordClick}>
        החלפת סיסמא
      </ChangePasswordLink>
    </Form>
  );
};

