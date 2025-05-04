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
  console.log('Attempting to load messages for locale:', locale);

  let messages;
  try {
    // Only attempt to load valid locale files (en.json or de.json)
    if (locale === 'en' || locale === 'de') {
      messages = (await import(`../../messages/${locale}.json`)).default;
      console.log('Loaded keys:', messages ? Object.keys(messages).length : 0, 'for locale:', locale);
      
      // Verify if the services namespace exists
      if (!messages || !messages.services) { 
        console.error('Services translations missing or messages failed to load for locale:', locale);
        // Decide if notFound() is appropriate here or if fallback is okay
      }
    } else {
      console.error('Unsupported locale in layout:', locale);
      notFound();
    }
  } catch (error) {
    console.error(`Error loading translations for locale ${locale}:`, error);
    // Consider if notFound() is always the right action on error
    notFound(); 
  }

  // Ensure messages is at least an empty object if loading failed but we didn't call notFound()
  if (!messages) {
    console.warn(`Messages object is undefined for locale ${locale} before Provider. Using empty object.`);
    messages = {};
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
