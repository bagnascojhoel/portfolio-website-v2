'use client';

import { useLocale as useNextIntlLocale } from 'next-intl';
import { useRouter, usePathname } from './routing';
import { Locale } from '@/core/domain/Locale';

/**
 * Hook for managing locale in the application.
 * Note: Initial locale detection happens in middleware.ts for root path visits.
 * This hook is for getting the current locale and switching between locales.
 */
export const useLocale = () => {
  const currentLocale = useNextIntlLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();

  const changeLocale = (newLocale: Locale) => {
    // Save to cookie so middleware can use it for future visits
    document.cookie = `locale=${newLocale}; path=/; max-age=${365 * 24 * 60 * 60}`;
    // Navigate to the new locale
    router.push(pathname, { locale: newLocale });
  };

  return { locale: currentLocale, changeLocale };
};
