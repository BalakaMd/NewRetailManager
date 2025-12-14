import styled from 'styled-components';
import { Button } from '../ui/Button';
import { HiBell, HiUser } from 'react-icons/hi';

const HeaderContainer = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background.primary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.light};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.lg};
  direction: rtl;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`;

const SearchBar = styled.input`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-family: ${({ theme }) => theme.typography.fontFamily.hebrew};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  min-width: 300px;
  direction: rtl;
  text-align: right;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary.main};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.tertiary};
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`;

const NotificationIcon = styled.div`
  position: relative;
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.sm};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSize.xl};

  svg {
    width: 24px;
    height: 24px;
  }
`;

const NotificationBadge = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.notification.badge};
  color: ${({ theme }) => theme.colors.text.inverse};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  min-width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 4px;
`;

const UserSection = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  cursor: pointer;
`;

const UserIcon = styled.div`
  width: 32px;
  height: 32px;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  background-color: ${({ theme }) => theme.colors.primary.main};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text.inverse};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
`;

const UserName = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.text.primary};
  direction: rtl;
`;

interface HeaderProps {
  onAddTerminal?: () => void;
  onSearch?: (value: string) => void;
  notificationCount?: number;
  userName?: string;
}

export const Header: React.FC<HeaderProps> = ({
  onAddTerminal,
  onSearch,
  notificationCount = 0,
  userName = 'ישראל',
}) => {
  return (
    <HeaderContainer>
      <LeftSection>
        <Button variant="primary" size="md" onClick={onAddTerminal}>
          + הוספת מסוף
        </Button>
        <SearchBar
          type="text"
          placeholder="חיפוש דוח, מסוף, תקלה, פעולה..."
          onChange={(e) => onSearch?.(e.target.value)}
        />
      </LeftSection>
      <RightSection>
        <NotificationIcon>
          <HiBell />
          {notificationCount > 0 && (
            <NotificationBadge>{notificationCount}</NotificationBadge>
          )}
        </NotificationIcon>
        <UserSection>
          <UserIcon>
            <HiUser />
          </UserIcon>
          <UserName>בוקר טוב, {userName}</UserName>
        </UserSection>
      </RightSection>
    </HeaderContainer>
  );
};

