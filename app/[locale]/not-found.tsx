'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';

export default function LocaleNotFound() {
  const { locale } = useParams();
  const t = useTranslations('notFound');
  
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">404</h2>
      <p className="text-xl font-medium mb-2">
        {t('title', { fallback: 'Page Not Found' })}
      </p>
      <p className="text-muted-foreground mb-8 max-w-md">
        {t('description', { fallback: "The page you are looking for doesn't exist or has been moved." })}
      </p>
      <Button asChild>
        <Link href={`/${locale}`}>
          {t('returnHome', { fallback: 'Return to Home' })}
        </Link>
      </Button>
    </div>
  );
}
