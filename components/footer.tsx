"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();
  const locale = pathname.split('/')[1];

  const footerLinks = [
    { name: 'On-Premise', href: `/${locale}/services/on-premise` },
    { name: 'Microsoft 365', href: `/${locale}/services/microsoft-365` },
    { name: 'Web-Hosting', href: `/${locale}/services/web-hosting` },
    { name: 'IT-Beratung', href: `/${locale}/services/consulting` },
    { name: 'Terms', href: `/${locale}/terms` },
    { name: 'Privacy', href: `/${locale}/privacy` },
    { name: 'Imprint', href: `/${locale}/imprint` },
  ];
  
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4">
        {/* Top navigation links */}
        <div className="flex justify-center mb-14">
          <div className="flex flex-wrap justify-center gap-x-8">
            {footerLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href}
                className="text-sm text-white hover:text-gray-300 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        
        {/* Copyright text */}
        <div className="text-center text-gray-400 text-sm">
          TechConsult GmbH. All rights reserved. © {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
}