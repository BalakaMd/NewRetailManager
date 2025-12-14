import { Input, Select } from '../../components/ui';
import { UseFormRegister, Control, FieldErrors } from 'react-hook-form';
import { CreateTerminalRequest } from '../../types/terminal';
import { MatrixTable, TableHeader, TableRow, TableCell } from './AcquiringMatrix.styles';

interface AcquiringMatrixProps {
  register: UseFormRegister<CreateTerminalRequest>;
  control: Control<CreateTerminalRequest>;
  errors: FieldErrors<CreateTerminalRequest>;
}

const PSP_OPTIONS = [
  { value: 'Tranzila', label: 'Tranzila' },
  { value: 'CardCom', label: 'CardCom' },
  { value: 'Rapyd', label: 'Rapyd' },
  { value: 'UPAY', label: 'UPAY' },
];

const ACQUIRER_OPTIONS = [
  { value: 'Isracard', label: 'ישראכרט' },
  { value: 'Cal', label: 'כא"ל' },
  { value: 'Tranzila', label: 'Tranzila' },
  { value: 'MAX', label: 'MAX' },
  { value: 'CardCom', label: 'CardCom' },
  { value: 'Rapyd', label: 'Rapyd' },
  { value: 'UPAY', label: 'UPAY' },
];

const CARD_BRANDS = [
  { id: 'isracard', label: 'סולק ישראכרט', field: 'MastercardMCC' },
  { id: 'amex', label: 'סולק אמקס', field: 'AmexMCC' },
  { id: 'visa', label: 'סולק ויזה', field: 'ViseMCC' },
  { id: 'diners', label: 'סולק דיינרס', field: 'DinersMCC' },
  { id: 'mastercard', label: 'סולק מסטרכארד', field: 'MastercardMCC' },
];

export const AcquiringMatrix: React.FC<AcquiringMatrixProps> = ({
  register,
  errors,
}) => {
  return (
    <MatrixTable>
      <thead>
        <TableRow>
          <TableHeader>PSP</TableHeader>
          <TableHeader>מס' ספק</TableHeader>
          <TableHeader>סולק ישראכרט</TableHeader>
          <TableHeader>סולק אמקס</TableHeader>
          <TableHeader>סולק ויזה</TableHeader>
          <TableHeader>סולק דיינרס</TableHeader>
          <TableHeader>סולק מסטרכארד</TableHeader>
        </TableRow>
      </thead>
      <tbody>
        {PSP_OPTIONS.map((psp) => (
          <TableRow key={psp.value}>
            <TableCell>{psp.label}</TableCell>
            <TableCell>
              <Input
                type="text"
                placeholder="מספר ספק"
                {...register('BusinessNumber' as any)}
              />
            </TableCell>
            <TableCell>
              <Select
                options={ACQUIRER_OPTIONS}
                placeholder="בחר סולק"
                {...register('MastercardMCC' as any)}
              />
            </TableCell>
            <TableCell>
              <Select
                options={ACQUIRER_OPTIONS}
                placeholder="בחר סולק"
                {...register('AmexMCC' as any)}
              />
            </TableCell>
            <TableCell>
              <Select
                options={ACQUIRER_OPTIONS}
                placeholder="בחר סולק"
                {...register('ViseMCC' as any)}
              />
            </TableCell>
            <TableCell>
              <Select
                options={ACQUIRER_OPTIONS}
                placeholder="בחר סולק"
                {...register('DinersMCC' as any)}
              />
            </TableCell>
            <TableCell>
              <Select
                options={ACQUIRER_OPTIONS}
                placeholder="בחר סולק"
                {...register('MastercardMCC' as any)}
              />
            </TableCell>
          </TableRow>
        ))}
      </tbody>
    </MatrixTable>
  );
};

