// Google Analytics 4 — hanya aktif kalau VITE_GA_ID diisi DAN pengunjung menyetujui cookie.
const GA_ID = import.meta.env.VITE_GA_ID as string | undefined;
const STORAGE_KEY = 'analytics-consent';

declare global {
	interface Window {
		dataLayer: unknown[];
		gtag: (...args: unknown[]) => void;
	}
}

export type Consent = 'granted' | 'denied' | null;

export const analyticsEnabled = Boolean(GA_ID);

let loaded = false;

export function getConsent(): Consent {
	try {
		const v = localStorage.getItem(STORAGE_KEY);
		return v === 'granted' || v === 'denied' ? v : null;
	} catch {
		return null;
	}
}

export function setConsent(value: Exclude<Consent, null>) {
	try {
		localStorage.setItem(STORAGE_KEY, value);
	} catch {
		// storage diblokir: pilihan hanya berlaku untuk sesi ini
	}
	if (value === 'granted') loadAnalytics();
}

export function loadAnalytics() {
	if (!GA_ID || loaded) return;
	loaded = true;

	window.dataLayer = window.dataLayer || [];
	window.gtag = function () {
		// GA membutuhkan objek `arguments`, bukan array biasa
		// eslint-disable-next-line prefer-rest-params
		window.dataLayer.push(arguments);
	};
	window.gtag('js', new Date());
	window.gtag('config', GA_ID);

	const script = document.createElement('script');
	script.async = true;
	script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_ID)}`;
	document.head.appendChild(script);
}

/** Catat event; tidak melakukan apa-apa kalau analytics belum aktif. */
export function track(event: string, params?: Record<string, string>) {
	if (!loaded) return;
	window.gtag('event', event, params);
}
