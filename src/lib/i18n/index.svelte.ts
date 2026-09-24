import { id } from './id';
import { en } from './en';

export type Locale = 'id' | 'en';

const dictionaries = { id, en };
const STORAGE_KEY = 'locale';

class I18n {
	locale = $state<Locale>('id');

	get t() {
		return dictionaries[this.locale];
	}

	/** Dipanggil sekali di browser: baca pilihan tersimpan atau bahasa browser. */
	init() {
		let saved: string | null = null;
		try {
			saved = localStorage.getItem(STORAGE_KEY);
		} catch {
			// storage bisa diblokir; abaikan
		}
		if (saved === 'id' || saved === 'en') {
			this.locale = saved;
		} else if (!navigator.language.toLowerCase().startsWith('id')) {
			this.locale = 'en';
		}
	}

	set(locale: Locale) {
		this.locale = locale;
		try {
			localStorage.setItem(STORAGE_KEY, locale);
		} catch {
			// abaikan
		}
	}
}

export const i18n = new I18n();
