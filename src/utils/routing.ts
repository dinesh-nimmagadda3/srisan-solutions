import { navigationItems } from '@/data/company';

/**
 * Get route path from navigation item ID
 * Centralized routing logic to avoid duplication
 */
export const getRouteFromId = (id: string): string => {
  const item = navigationItems.find(nav => nav.id === id);
  return item?.href || '/';
};

/**
 * Check if current pathname matches the route for given nav ID
 */
export const isActiveRoute = (id: string, pathname: string): boolean => {
  const route = getRouteFromId(id);
  return pathname === route;
};

/**
 * Navigate to a route and scroll to top
 * Common navigation behavior
 */
export const navigateWithScroll = (
  navigate: (path: string) => void,
  path: string,
  delay: number = 100
): void => {
  navigate(path);
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, delay);
};
