import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  let messages;
  switch (locale) {
    case 'de':
      messages = (await import('../messages/de.json')).default;
      break;
    case 'en':
    default:
      messages = (await import('../messages/en.json')).default;
      break;
  }
  return {
    locale: locale || 'en',
    messages,
  };
});