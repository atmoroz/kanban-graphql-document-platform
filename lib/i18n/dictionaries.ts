import type { Locale } from './config';

export type Dictionary = Record<string, string>;

const dictionaries: Record<Locale, Dictionary> = {
  en: {},
  ua: {},
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale];
}
