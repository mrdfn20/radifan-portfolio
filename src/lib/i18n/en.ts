import type { id } from './id';

export const en: typeof id = {
	brand: 'Radifan',
	nav: {
		about: 'About',
		skills: 'Skills',
		projects: 'Projects',
		services: 'Services',
		process: 'Process',
		faq: 'FAQ',
		contact: 'Contact'
	},
	sections: {
		hero: 'Hero',
		about: 'About Me',
		skills: 'Skills',
		projects: 'Projects',
		services: 'Services & Pricing',
		process: 'How I Work',
		faq: 'FAQ',
		contact: 'Contact'
	},
	hero: {
		eyebrow: 'Web Developer · Freelance',
		headline: 'Websites that make your business trusted.',
		sub: "I'm Muhamad Radifan Azman. I build landing pages, websites, and custom systems for small businesses ready to grow online.",
		ctaPrimary: 'Chat on WhatsApp',
		ctaSecondary: 'See projects',
		trust: ['Full access is yours', 'Video guide included', '30-day bug warranty']
	},
	contact: {
		lead: 'Have an idea for a website or system? Tell me what you need and I will help estimate the package and cost.',
		cta: 'Chat on WhatsApp'
	},
	waMessages: {
		hero: 'Hello Radifan, I would like to talk about a website.',
		contact: 'Hello Radifan, I would like to talk about my project.'
	},
	projects: {
		lead: 'Systems used by real businesses, from static pages to apps with login and a database.',
		featuredBadge: 'Featured project',
		featuredTitle: 'CV Anugrah Gemilang — Water Gallon Management System',
		featuredDesc:
			'An admin dashboard and REST API for a refill-gallon business: customers, transactions & receivables, gallon stock, fleet, and reports with CSV/PDF export.',
		highlights: [
			'Separate roles for Admin, Editor, and Driver',
			'Atomic financial transactions: automatic rollback if any step fails',
			'Audit log for every data change',
			'Deployed with separate staging and production (GitHub Actions, PM2, nginx)'
		],
		evolutionTitle: 'From manual to system',
		evolution: [
			{ label: 'First version', text: 'Gallon input system built with Google Apps Script' },
			{ label: 'Now', text: 'Express + MySQL + SvelteKit with login, roles, and reports' }
		],
		frontend: 'Frontend repo',
		backend: 'Backend repo',
		repo: 'View repo',
		noRepo: 'Repo not public',
		kind: { client: 'Client project', practice: 'Practice' },
		items: {
			fasih: {
				title: 'Fasih Foundation — Arabic Camp',
				desc: 'A static website for an Arabic language course institute, with an interactive carousel to showcase programs.'
			},
			seaweed: {
				title: 'Seaweed',
				desc: 'An information platform for the seaweed business: trading, export, and import.'
			},
			presensi: {
				title: 'Attendance System — SMP YKTB',
				desc: 'Digital student attendance replacing manual record keeping.'
			},
			notesApi: {
				title: 'Notes API',
				desc: 'A CRUD REST API in plain Node.js with no framework, including database migrations and a Postman test collection.'
			},
			notesFirebase: {
				title: 'Notes App — Firebase',
				desc: 'A practice project integrating Firebase as the backend of a notes app.'
			}
		}
	},
	placeholder: 'Coming soon',
	footer: 'Built by Muhamad Radifan Azman'
};
