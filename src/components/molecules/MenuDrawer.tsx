import { Fragment } from 'react';
import NavigationItem from './NavigationItem';
import { cn } from '@/lib/utils';

interface Props {
  open: boolean;
}

const menus = [
  { label: '채용', href: '#', isHeading: true },
  { label: '해외 개발자 원격 채용', href: '#' },
  { label: '외국인 원격 채용 (비개발 직군)', href: '#' },
  { label: '한국어 가능 외국인 채용', href: '#', isFooter: true },
];

export default function MenuDrawer({ open }: Props) {
  return (
    <div
      className={cn(
        'z-[100] h-screen w-0 translate-x-[100vw] overflow-hidden bg-white transition-all duration-300',
        open && 'w-[80vw] translate-x-[20vw]',
      )}>
      {menus.map((item, index) => {
        if (item.isHeading) {
          <span key={index} className="px-4 py-3">
            {item.label}
          </span>;
        }

        return (
          <Fragment key={index}>
            {item.isFooter && <hr />}
            <NavigationItem
              menu={item}
              className="text-neutral w-full justify-start rounded-none py-3 font-normal hover:bg-slate-300/25"
            />
          </Fragment>
        );
      })}
    </div>
  );
}
