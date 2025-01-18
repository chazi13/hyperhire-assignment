'use client';

import { useState } from 'react';
import Logo from '../atoms/Logo';
import Button from '../atoms/Button';
import NavigationMenu from './NavigationMenu';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import MenuDrawer from '../molecules/MenuDrawer';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="h-[60px] w-full">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between px-4">
        <Logo src="/white-logo.png" alt="Hyperhire logo" className="my-5" />

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <NavigationMenu />
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link href="/">
            <Button>문의하기</Button>
          </Link>
        </div>

        {/* Mobile Burger Icon */}
        <div className="md:hidden">
          <Button variant="ghost" className="px-2" onClick={toggleMobileMenu}>
            <div className="flex flex-col gap-[3px]">
              <div className="h-0.5 w-4 bg-white"></div>
              <div className="h-0.5 w-4 bg-white"></div>
              <div className="h-0.5 w-4 bg-white"></div>
            </div>
          </Button>
        </div>

        {/* Mobile Menu */}
      </div>
      <div
        className={cn(
          'absolute left-0 top-0 z-50 h-0 w-0 transition-all duration-0',
          isMobileMenuOpen && 'h-screen w-screen bg-slate-800/90',
        )}
        onClick={toggleMobileMenu}>
        <MenuDrawer open={isMobileMenuOpen} />
      </div>
    </header>
  );
}
