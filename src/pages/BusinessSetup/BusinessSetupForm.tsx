import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../../components/ui';
import { SupplierSection } from './SupplierSection';
import { AcquiringMatrix } from './AcquiringMatrix';
import { BusinessDetailsSection } from './BusinessDetailsSection';
import { CreateTerminalRequest } from '../../types/terminal';
import { useAuthStore } from '../../store/authStore';
import {
  FormContainer,
  Section,
  SectionTitle,
  ActionsFooter,
  ErrorMessage,
  SuccessMessage,
} from './BusinessSetupForm.styles';

export const BusinessSetupForm: React.FC = () => {
  const user = useAuthStore((state) => state.user);
  const [submitError, setSubmitError] = React.useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<CreateTerminalRequest>({
    defaultValues: {
      RetailerUserName: user?.userName || '',
      KidometMefic: user?.kidometMefic || '',
      HPMefic: user?.hpMefic || '',
      DepositType: 1,
      AllowRefund: true,
      AllowTokenization: true,
      AllowSMS: false,
      Allow3DS: true,
      EnableRavMutav: false,
    },
  });

  const depositType = watch('DepositType');

  const onSubmit = async (data: CreateTerminalRequest) => {
    setSubmitError(null);
    setSubmitSuccess(false);
    setIsSubmitting(true);

    try {
      // TODO: Call CreateTerminal API
      console.log('Form data:', data);
      
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      setSubmitSuccess(true);
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : 'שגיאה בעת שליחת הטופס'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClear = () => {
    // Reset form
    window.location.reload();
  };

  const handleDownloadEMV = () => {
    // TODO: Implement EMV certificate download
    console.log('Download EMV certificate');
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      {submitError && <ErrorMessage>{submitError}</ErrorMessage>}
      {submitSuccess && (
        <SuccessMessage>הטופס נשלח בהצלחה!</SuccessMessage>
      )}

      {/* Block A: Supplier Data */}
      <Section>
        <SectionTitle>בלוק א': נתוני ספק</SectionTitle>
        <SupplierSection register={register} errors={errors} />
      </Section>

      {/* Block B: Acquiring Matrix */}
      <Section>
        <SectionTitle>בלוק ב': מטריצת אקוויירינג</SectionTitle>
        <AcquiringMatrix register={register} control={control} errors={errors} />
      </Section>

      {/* Block C: Business Details */}
      <Section>
        <SectionTitle>בלוק ג': פרטי עסק והגדרות</SectionTitle>
        <BusinessDetailsSection
          register={register}
          watch={watch}
          errors={errors}
          depositType={depositType}
        />
      </Section>

      {/* Actions Footer */}
      <ActionsFooter>
        <Button
          type="button"
          variant="secondary"
          onClick={handleDownloadEMV}
        >
          הורדת תעודה EMV
        </Button>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Button type="button" variant="outline" onClick={handleClear}>
            ניקוי מסך
          </Button>
          <Button type="submit" variant="primary" isLoading={isSubmitting}>
            שליחה
          </Button>
        </div>
      </ActionsFooter>
    </FormContainer>
  );
};

