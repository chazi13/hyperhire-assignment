import { Menu } from '@/types';
import Dropdown from '../molecules/Dropdown';
import NavigationItem from '../molecules/NavigationItem';

const menus: Menu[] = [
  {
    label: '채용',
    href: '#',
    subMenus: [
      { label: '채용', href: '#', isHeading: true },
      { label: '해외 개발자 원격 채용', href: '#' },
      { label: '외국인 원격 채용 (비개발 직군)', href: '#' },
      { label: '한국어 가능 외국인 채용', href: '#', isFooter: true },
    ],
  },
  {
    label: '해외 개발자 활용 서비스',
    href: '#',
  },
];

export default function NavigationMenu() {
  return (
    <div className="flex items-center gap-x-4.5">
      {menus.map((menu, index) => {
        if (menu.subMenus?.length) {
          return <Dropdown key={index} label={menu.label} items={menu.subMenus} />;
        }

        return <NavigationItem key={index} menu={menu} />;
      })}
    </div>
  );
}
