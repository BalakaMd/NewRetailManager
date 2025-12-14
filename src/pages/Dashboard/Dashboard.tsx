import styled from 'styled-components';
import { Header, Sidebar } from '../../components/layout';

const DashboardContainer = styled.div`
  display: flex;
  min-height: 100vh;
  direction: rtl;
`;

const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background.secondary};
`;

const ContentArea = styled.div`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.xl};
`;

const PageTitle = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  direction: rtl;
`;

export const Dashboard: React.FC = () => {
  return (
    <DashboardContainer>
      <Sidebar activeItem="home" />
      <MainContent>
        <Header />
        <ContentArea>
          <PageTitle>דשבורד</PageTitle>
          <p>ברוכים הבאים למערכת Shva Arena</p>
        </ContentArea>
      </MainContent>
    </DashboardContainer>
  );
};

