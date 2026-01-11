import { getRequestConfig } from 'next-intl/server';
import { routing, Locale } from './routing';
import { LocaleNotSupportedError } from './errors';

async function getConfiguration(locale: string) {
  if (!routing.locales.includes(locale as any)) {
    throw new LocaleNotSupportedError(locale);
  }

  return {
    locale: locale as Locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
}

export default getRequestConfig(async params => {
  const activeLocale = (await params.requestLocale) || routing.defaultLocale;
  return await getConfiguration(activeLocale);
});
