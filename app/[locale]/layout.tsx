// --- Server Layout ---
import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/navbar'; 
import Footer from '@/components/footer'; 
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'de' }];
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = await params;

  // DEBUG: Log locale to server console
  console.log('[locale]/layout.tsx loaded with locale:', locale);
  console.log('Loading messages for locale:', locale);

  let messages;
  try {
    // Verbesserte Fehlerbehandlung beim Laden der Übersetzungen
    messages = (await import(`../../messages/${locale}.json`)).default;
    console.log('Translation keys loaded:', Object.keys(messages));
    
    // Überprüfen, ob der services-Namespace vorhanden ist
    if (!messages.services) {
      console.error('Services translations missing for locale:', locale);
    }
  } catch (error) {
    console.error('Error loading translations:', error);
    notFound();
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Navbar />
        <main className="flex-grow min-h-screen">{children}</main>
        <Footer />
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
