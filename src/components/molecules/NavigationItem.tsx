import Link from 'next/link';
import Button, { ButtonProps } from '../atoms/Button';
import { Menu } from '@/types';
import { cn } from '@/lib/utils';

interface Props extends ButtonProps {
  menu: Omit<Menu, 'subMenus'>;
}

export default function NavigationItem({ className, menu, ...props }: Props) {
  return (
    <Link href={menu.href}>
      <Button variant="ghost" className={cn('px-4 text-white', className)} {...props}>
        {menu.label}
      </Button>
    </Link>
  );
}
