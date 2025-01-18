export interface Menu {
  label: string;
  href: string;
  subMenus?: (Omit<Menu, 'subMenus'> & { isHeading?: boolean; isFooter?: boolean })[];
}
