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

export interface Job {
  id: number;
  icon: ReactNode;
  name: string;
}

export interface Employee {
  id: number;
  name: string;
  position: string;
  experience: string;
  imageSrc: string;
  flagImageSrc: string;
  sallary: string;
  skills: string[];
}
