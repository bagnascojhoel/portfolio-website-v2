"use client";

import React from "react";
import {usePathname, useRouter, LOCALES, localeNames, Locale} from '../i18n/routing';
import {useLocale} from 'next-intl';

const LanguageSelector = () => {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale() as Locale;

  const handleLocaleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value as Locale;
    router.replace(pathname, {locale: newLocale});
  };

  return (
    <select
      className="h-10 px-3 pr-8 border border-border rounded-lg bg-card text-foreground font-mono text-sm cursor-pointer transition-all hover:border-primary shadow-sm appearance-none select-chevron"
      aria-label="Select language"
      defaultValue={locale}
      onChange={handleLocaleChange}
    >
      {LOCALES.map((loc) => (
        <option key={loc} value={loc}>
          {localeNames[loc]}
        </option>
      ))}
    </select>
  );
};

export default LanguageSelector;
