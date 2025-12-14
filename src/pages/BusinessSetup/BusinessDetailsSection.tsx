import { Input, Select, Checkbox } from '../../components/ui';
import { UseFormRegister, UseFormWatch, FieldErrors } from 'react-hook-form';
import { CreateTerminalRequest } from '../../types/terminal';
import {
  DetailsGrid,
  TwoColumnGrid,
  CheckboxGroup,
  CheckboxItem,
} from './BusinessDetailsSection.styles';

interface BusinessDetailsSectionProps {
  register: UseFormRegister<CreateTerminalRequest>;
  watch: UseFormWatch<CreateTerminalRequest>;
  errors: FieldErrors<CreateTerminalRequest>;
  depositType: number;
}

const PHONE_PREFIXES = [
  { value: '02', label: '02' },
  { value: '03', label: '03' },
  { value: '04', label: '04' },
  { value: '08', label: '08' },
  { value: '09', label: '09' },
];

const MOBILE_PREFIXES = [
  { value: '050', label: '050' },
  { value: '052', label: '052' },
  { value: '053', label: '053' },
  { value: '054', label: '054' },
  { value: '055', label: '055' },
  { value: '058', label: '058' },
];

const UPDATE_RECORD_TYPES = [
  { value: 'פתיחה', label: 'פתיחה' },
  { value: 'חידוש פעילות', label: 'חידוש פעילות' },
];

const BUSINESS_TYPES = [
  { value: '02', label: '02 בתי קפה' },
  { value: '03', label: '03 חנויות מזון' },
  { value: '04', label: '04 בתי מרקחת' },
  { value: '12-19', label: '12-19 (АЗС/Топливо)' },
  { value: '20', label: '20 רשתות שיווק' },
  { value: '34', label: '34 סטימצקי' },
];

const TERMINAL_CATEGORIES = [
  { value: 'ברירת מחדל', label: 'ברירת מחדל' },
  { value: 'מכונות ממכר', label: 'מכונות ממכר' },
  { value: 'שרות עצמי', label: 'שרות עצמי' },
  { value: 'סחר אלקטרוני', label: 'סחר אלקטרוני' },
  { value: 'MPOS', label: 'MPOS' },
];

const TERMINAL_TYPES = [
  { value: 'אין דרישות מיוחדות', label: 'אין דרישות מיוחדות' },
  { value: 'מסוף דלק', label: 'מסוף דלק' },
];

const BLOCKED_FILE_SIZES = [
  { value: '99000', label: '99000' },
  { value: '50000', label: '50000' },
  { value: '25000', label: '25000' },
];

const DEPOSIT_TYPES = [
  { value: 1, label: 'הפקדה אוטומטית' },
  { value: 2, label: 'הפקדה ידנית' },
  { value: 3, label: 'ללא הפקדה' },
  { value: 4, label: 'הפקדה מתוזמנת' },
];

export const BusinessDetailsSection: React.FC<BusinessDetailsSectionProps> = ({
  register,
  watch,
  errors,
  depositType,
}) => {
  return (
    <DetailsGrid>
      <Input
        label="שם מלא של בית העסק"
        type="text"
        placeholder="הכנס שם מלא"
        {...register('BusinessName', {
          required: 'שם מלא של בית העסק הוא שדה חובה',
        })}
        error={errors.BusinessName?.message}
      />

      <Input
        label="כתובת מלאה : רח' ומספר"
        type="text"
        placeholder="הכנס כתובת מלאה"
        {...register('BusinessName', {
          required: 'כתובת מלאה היא שדה חובה',
        })}
        error={errors.BusinessName?.message}
      />

      <Input
        label="ישוב"
        type="text"
        placeholder="הכנס ישוב"
        {...register('BusinessName', {
          required: 'ישוב הוא שדה חובה',
        })}
        error={errors.BusinessName?.message}
      />

      <Input
        label="מיקוד"
        type="text"
        placeholder="הכנס מיקוד"
        {...register('BusinessNumber')}
      />

      <TwoColumnGrid>
        <Select
          label="מס' טלפון - קידומת"
          options={PHONE_PREFIXES}
          {...register('BusinessNumber' as any)}
        />
        <Input
          label="מס' טלפון"
          type="tel"
          placeholder="מספר טלפון"
          {...register('BusinessNumber')}
        />
      </TwoColumnGrid>

      <TwoColumnGrid>
        <Select
          label="מס' טלפון נייד - קידומת"
          options={MOBILE_PREFIXES}
          {...register('BusinessNumber' as any)}
        />
        <Input
          label="מס' טלפון נייד"
          type="tel"
          placeholder="מספר נייד"
          {...register('BusinessNumber')}
        />
      </TwoColumnGrid>

      <Input
        label="איש קשר בבית העסק"
        type="text"
        placeholder="שם איש קשר"
        {...register('BusinessName')}
      />

      <Input
        label="שם ממלא הטופס"
        type="text"
        placeholder="שם ממלא הטופס"
        {...register('BusinessName', {
          required: 'שם ממלא הטופס הוא שדה חובה',
        })}
        error={errors.BusinessName?.message}
      />

      <Select
        label="סוג רשומת עדכון"
        options={UPDATE_RECORD_TYPES}
        {...register('BusinessNumber' as any)}
      />

      <Select
        label="סוג העסק"
        options={BUSINESS_TYPES}
        {...register('MastercardMCC')}
      />

      <Select
        label="קטגוריית מסוף"
        options={TERMINAL_CATEGORIES}
        {...register('BusinessNumber' as any)}
      />

      <Select
        label="סוג מסוף"
        options={TERMINAL_TYPES}
        {...register('BusinessNumber' as any)}
      />

      <Select
        label="גודל קובץ חסומים"
        options={BLOCKED_FILE_SIZES}
        {...register('BusinessNumber' as any)}
      />

      <Input
        label="קוד PIN PAD"
        type="text"
        placeholder="הכנס קוד PIN PAD"
        {...register('BusinessNumber')}
      />

      <CheckboxGroup>
        <CheckboxItem>
          <Checkbox
            label="EMV"
            {...register('AllowTokenization')}
          />
        </CheckboxItem>
        <CheckboxItem>
          <Checkbox
            label="מגנטי"
            {...register('AllowRefund')}
          />
        </CheckboxItem>
        <CheckboxItem>
          <Checkbox
            label="CTL"
            {...register('Allow3DS')}
          />
        </CheckboxItem>
      </CheckboxGroup>
    </DetailsGrid>
  );
};

