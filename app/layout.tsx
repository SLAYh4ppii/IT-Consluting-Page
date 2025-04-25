import { Inter } from 'next/font/google';
import './globals.css';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TechConsult - IT Consulting & Digital Transformation',
  description: 'Your trusted partner in digital transformation and IT consulting.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // DO NOT wrap with <html> or <body> here! Let [locale]/layout.tsx handle it.
  return <>{children}</>;
}