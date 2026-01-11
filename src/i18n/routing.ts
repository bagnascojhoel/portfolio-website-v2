import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

export enum Locale {
  EN = 'en',
  PT_BR = 'pt-br',
}

export const LOCALES = [Locale.EN, Locale.PT_BR] as const;
export const DEFAULT_LOCALE = Locale.EN;

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: LOCALES,

  // Used when no locale matches
  defaultLocale: DEFAULT_LOCALE,
  localePrefix: 'as-needed',
});

export const localeNames: Record<Locale, string> = {
  [Locale.EN]: '🇺🇸 EN',
  [Locale.PT_BR]: '🇧🇷 PT',
};

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);
