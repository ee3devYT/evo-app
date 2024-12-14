"use client"

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`relative group text-sm font-medium tracking-wide transition-colors duration-200 ${
        isActive ? 'text-[#C19A6B]' : 'text-white hover:text-[#C19A6B]'
      }`}
    >
      {children}
      <span
        className={`absolute -bottom-1 left-0 w-full h-0.5 bg-[#C19A6B] transform origin-left transition-transform duration-300 ${
          isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
        }`}
      />
    </Link>
  );
};

export default NavLink;