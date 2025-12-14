import { Header, Sidebar } from '../../components/layout';
import { BusinessSetupForm } from './BusinessSetupForm';
import {
  PageContainer,
  MainContent,
  ContentArea,
  PageTitle,
} from './BusinessSetup.styles';

export const BusinessSetup: React.FC = () => {
  return (
    <PageContainer>
      <Sidebar activeItem="terminals" />
      <MainContent>
        <Header />
        <ContentArea>
          <PageTitle>הגדרת עסק - פתיחת מסוף</PageTitle>
          <BusinessSetupForm />
        </ContentArea>
      </MainContent>
    </PageContainer>
  );
};

