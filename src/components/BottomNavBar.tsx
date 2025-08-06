'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Coffee, User } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', icon: Home, label: 'Home' },
  { href: '/menu', icon: Coffee, label: 'Menu' },
  { href: '/profile', icon: User, label: 'Profile' },
];

export function BottomNavBar() {
  const pathname = usePathname();

  return (
    <nav className="absolute bottom-0 left-0 right-0 h-16 border-t bg-background/80 backdrop-blur-sm">
      <div className="flex h-full items-center justify-around">
        {navItems.map((item) => {
          const isActive = (pathname === '/' && item.href === '/') || (pathname.startsWith(item.href) && item.href !== '/');
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex flex-col items-center gap-1 p-2 rounded-md transition-colors',
                isActive ? 'text-accent-foreground bg-primary/20' : 'text-muted-foreground hover:text-foreground'
              )}
            >
              <item.icon className="h-6 w-6" />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
