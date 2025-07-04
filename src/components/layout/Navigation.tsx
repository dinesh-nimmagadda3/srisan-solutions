import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import type { NavItem } from '@/types';
import { getRouteFromId, isActiveRoute, navigateWithScroll } from '@/utils/routing';

interface NavigationRenderProps {
  item: NavItem;
  handleNavClick: (item: NavItem) => void;
  isActive: boolean;
}

interface NavigationProps {
  items: NavItem[];
  children: (props: NavigationRenderProps) => React.ReactNode;
  onItemClick?: () => void;
}

export const Navigation = ({
  items,
  children,
  onItemClick,
}: NavigationProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = useCallback(
    (item: NavItem) => {
      const route = getRouteFromId(item.id);
      navigateWithScroll(navigate, route);
      if (onItemClick) {
        onItemClick();
      }
    },
    [navigate, onItemClick]
  );

  return (
    <>
      {items.map(item =>
        children({
          item,
          handleNavClick,
          isActive: isActiveRoute(item.id, location.pathname),
        })
      )}
    </>
  );
};
