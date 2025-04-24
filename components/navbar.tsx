'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from './theme-toggle';
import { Button } from './ui/button';
import { Monitor } from 'lucide-react';

export default function Navbar() {
  const t = useTranslations('navigation');
  const pathname = usePathname();
  const locale = pathname.split('/')[1];

  const navigation = [
    { name: t('home'), href: `/${locale}` },
    { name: t('about'), href: `/${locale}/about` },
    { name: t('services'), href: `/${locale}/services` },
    { name: t('contact'), href: `/${locale}/contact` },
  ];

  return (
    <nav className="border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href={`/${locale}`} className="flex items-center">
              <Monitor className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold">TechConsult</span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {/* Change locale from pathname */}
            <Link href={pathname.replace(/^\/[^/]+/, '/en')}>
              <Button variant="ghost" size="sm">EN</Button>
            </Link>
            <Link href={pathname.replace(/^\/[^/]+/, '/de')}>
              <Button variant="ghost" size="sm">DE</Button>
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
