'use client';

import { Fragment, useState } from 'react';
import Icons from '../atoms/Icons';
import { cn } from '@/lib/utils';
import { Menu } from '@/types';
import Button from '../atoms/Button';
import NavigationItem from './NavigationItem';
import { useAutoAnimate } from '@formkit/auto-animate/react';

interface Props {
  label: string;
  items: Menu['subMenus'];
}

export default function Dropdown({ label, items = [] }: Props) {
  const [parentRef] = useAutoAnimate({
    duration: 200,
  });

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div ref={parentRef} className="relative">
      <Button
        variant="ghost"
        className="gap-2 px-4 text-white"
        onClick={toggleDropdown}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}>
        {label} <Icons.chevronDown className={cn('transition-transform', isOpen ? 'rotate-180' : '')} />
      </Button>
      {isOpen && (
        <div
          className="absolute left-0 top-[90%] z-10 mt-1 flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}>
          {items.map((item, index) => {
            if (item.isHeading) {
              return (
                <span key={index} className="px-4 py-2.5">
                  {item.label}
                </span>
              );
            }

            return (
              <Fragment key={index}>
                {item.isFooter && <hr />}
                <NavigationItem
                  menu={item}
                  className="text-neutral w-full justify-start rounded-none py-2.5 font-normal hover:bg-slate-300/25"
                />
              </Fragment>
            );
          })}
        </div>
      )}
    </div>
  );
}
