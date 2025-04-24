// middleware.js or _middleware.js
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'de'],
  defaultLocale: 'en'
});

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'] // Excludes static assets and API routes
};
