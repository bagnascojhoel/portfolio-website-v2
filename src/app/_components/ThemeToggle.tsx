'use client';

import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useTheme } from '../_lib/useTheme';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const t = useTranslations('Common');

  return (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 flex items-center justify-center bg-card border border-border text-foreground rounded-lg transition-all hover:border-primary hover:bg-muted shadow-sm"
      aria-label={t('toggleTheme')}
    >
      {theme === 'light' ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export default ThemeToggle;
