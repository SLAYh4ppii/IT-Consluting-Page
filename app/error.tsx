'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">Something went wrong</h2>
      <p className="text-muted-foreground mb-8 max-w-md">
        We apologize for the inconvenience. An unexpected error has occurred.
      </p>
      <Button
        onClick={reset}
        className="px-6 py-2 bg-primary hover:bg-primary/90 text-primary-foreground"
      >
        Try again
      </Button>
    </div>
  );
}
