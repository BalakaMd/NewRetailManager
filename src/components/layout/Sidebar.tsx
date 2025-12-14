import styled from 'styled-components';
import { theme } from '../../theme';
import {
  HiHome,
  HiCalculator,
  HiUsers,
  HiChartBar,
  HiDocumentText,
  HiCamera,
  HiChatAlt,
  HiSparkles,
} from 'react-icons/hi';
import type { IconType } from 'react-icons';

const SidebarContainer = styled.aside`
  width: 250px;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background.primary};
  border-left: 1px solid ${({ theme }) => theme.colors.border.light};
  padding: ${({ theme }) => theme.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
  direction: rtl;
`;

const Logo = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.primary.main};
  padding-bottom: ${({ theme }) => theme.spacing.lg};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.light};
  direction: rtl;
  text-align: right;
`;

const NavList = styled.nav`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const NavItem = styled.div<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.default};
  direction: rtl;
  text-align: right;

  background-color: ${({ theme, $isActive }) =>
    $isActive ? `${theme.colors.primary.main}15` : 'transparent'};
  color: ${({ theme, $isActive }) =>
    $isActive ? theme.colors.primary.main : theme.colors.text.primary};

  &:hover {
    background-color: ${({ theme, $isActive }) =>
      $isActive
        ? `${theme.colors.primary.main}15`
        : theme.colors.background.tertiary};
  }
`;

const NavIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  flex-shrink: 0;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const NavLabel = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

const Separator = styled.div`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.border.light};
  margin: ${({ theme }) => theme.spacing.md} 0;
`;

interface NavMenuItem {
  id: string;
  label: string;
  icon: IconType;
  onClick?: () => void;
}

interface SidebarProps {
  activeItem?: string;
  onItemClick?: (itemId: string) => void;
}

const menuItems: NavMenuItem[] = [
  { id: 'home', label: 'בית', icon: HiHome },
  { id: 'terminals', label: 'מסופים', icon: HiCalculator },
  { id: 'customers', label: 'לקוחות', icon: HiUsers },
  { id: 'reports', label: 'דוחות', icon: HiChartBar },
  { id: 'charges', label: 'חיובים', icon: HiDocumentText },
];

const bottomMenuItems: NavMenuItem[] = [
  { id: 'knowledge', label: 'מרכז ידע', icon: HiCamera },
  { id: 'support', label: 'תמיכה', icon: HiChatAlt },
  { id: 'premium', label: 'Arena premium', icon: HiSparkles },
];

export const Sidebar: React.FC<SidebarProps> = ({
  activeItem = 'customers',
  onItemClick,
}) => {
  return (
    <SidebarContainer>
      <Logo>Shva Arena</Logo>
      <NavList>
        {menuItems.map((item) => (
          <NavItem
            key={item.id}
            $isActive={activeItem === item.id}
            onClick={() => {
              onItemClick?.(item.id);
              item.onClick?.();
            }}
          >
            <NavIcon>
              <item.icon />
            </NavIcon>
            <NavLabel>{item.label}</NavLabel>
          </NavItem>
        ))}
        <Separator />
        {bottomMenuItems.map((item) => (
          <NavItem
            key={item.id}
            $isActive={activeItem === item.id}
            onClick={() => {
              onItemClick?.(item.id);
              item.onClick?.();
            }}
          >
            <NavIcon>
              <item.icon />
            </NavIcon>
            <NavLabel>{item.label}</NavLabel>
          </NavItem>
        ))}
      </NavList>
    </SidebarContainer>
  );
};

