import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { defaultLocale } from '@/config';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">404</h2>
      <p className="text-xl font-medium mb-2">Page Not Found</p>
      <p className="text-muted-foreground mb-8 max-w-md">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Button asChild>
        <Link href={`/${defaultLocale}`}>
          Return to Home
        </Link>
      </Button>
    </div>
  );
}
