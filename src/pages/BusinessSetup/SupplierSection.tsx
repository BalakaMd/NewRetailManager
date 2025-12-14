import { Input, Checkbox } from '../../components/ui';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { CreateTerminalRequest } from '../../types/terminal';
import { SectionGrid } from './SupplierSection.styles';

interface SupplierSectionProps {
  register: UseFormRegister<CreateTerminalRequest>;
  errors: FieldErrors<CreateTerminalRequest>;
}

export const SupplierSection: React.FC<SupplierSectionProps> = ({
  register,
  errors,
}) => {
  return (
    <SectionGrid>
      <Input
        label="מס' ספק מובל לרב ספק"
        type="text"
        placeholder="הכנס מספר ספק"
        {...register('BusinessNumber', {
          required: "מס' ספק הוא שדה חובה",
        })}
        error={errors.BusinessNumber?.message}
      />

      <Checkbox
        label="רב-ספק"
        {...register('EnableRavMutav')}
      />

      <Input
        label="כתובת מקוצרת"
        type="text"
        placeholder="הכנס כתובת מקוצרת"
        {...register('BusinessName')}
        error={errors.BusinessName?.message}
      />

      <Input
        label="מס' עוסק מורשה"
        type="text"
        placeholder="הכנס מספר עוסק"
        {...register('BusinessNumber')}
        error={errors.BusinessNumber?.message}
      />
    </SectionGrid>
  );
};

