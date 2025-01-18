import { ReactNode } from 'react';

export interface Menu {
  label: string;
  href: string;
  subMenus?: (Omit<Menu, 'subMenus'> & { isHeading?: boolean; isFooter?: boolean })[];
}

export interface Service {
  icon: ReactNode;
  labe: string;
}
