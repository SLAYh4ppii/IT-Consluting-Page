"use client"

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const t = useTranslations('navigation');
  const pathname = usePathname();
  const locale = pathname.split('/')[1];

  return (
    <footer className="border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">TechConsult</h3>
            <p className="text-sm text-muted-foreground">
              Your trusted partner in digital transformation and IT consulting.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('navigation')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}`} className="text-sm hover:underline">
                  {t('home')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/about`} className="text-sm hover:underline">
                  {t('about')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/services`} className="text-sm hover:underline">
                  {t('services')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contact`} className="text-sm hover:underline">
                  {t('contact')}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="text-sm not-italic">
              <p>TechConsult GmbH</p>
              <p>Techstrasse 1</p>
              <p>1010 Vienna</p>
              <p>Austria</p>
            </address>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}/imprint`} className="text-sm hover:underline">
                  {t('imprint')}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t">
          <p className="text-sm text-center text-muted-foreground">
            © {new Date().getFullYear()} TechConsult GmbH. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}