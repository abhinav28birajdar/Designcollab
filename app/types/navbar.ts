import { IconType } from 'react-icons';

export interface NavItem {
  title: string;
  description: string;
  icon: IconType;
}

export interface NavListMenuProps {
  items: NavItem[];
}

export interface NavListProps {
  items: NavItem[];
}

