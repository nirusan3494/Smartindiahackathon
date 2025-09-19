import { Language, Translations } from '@/types/translations';
import { en } from './en';
import { hi } from './hi';
import { pa } from './pa';
import { te } from './te';

export const translations: Record<Language, Translations> = {
  en,
  hi,
  pa,
  te,
};

export const languages = [
  { code: 'en' as Language, name: 'English', nativeName: 'English' },
  { code: 'hi' as Language, name: 'Hindi', nativeName: 'हिंदी' },
  { code: 'pa' as Language, name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ' },
  { code: 'te' as Language, name: 'Telugu', nativeName: 'తెలుగు' },
];

export * from './en';
export * from './hi';
export * from './pa';
export * from './te';