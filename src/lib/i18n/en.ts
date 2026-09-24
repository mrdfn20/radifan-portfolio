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
		testimonials: 'Testimonials',
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
	about: {
		greeting: "Hi, I'm Radifan.",
		p1: "I'm Muhamad Radifan Azman, a freelance web developer. I build websites and systems for businesses: from simple landing pages to apps with login, a database, and an admin dashboard.",
		p2: 'I handle the interface, backend, database, and deployment, so you only deal with one person from start to launch.',
		photoNote: 'Photo coming soon',
		whyTitle: 'Why work with me',
		why: [
			{ title: 'Full access is yours', text: 'Domain, hosting, and admin access are handed over to you (full handover package). Nothing is locked.' },
			{ title: 'Video guide', text: 'You get a video on how to manage your website yourself, so you never have to depend on me.' },
			{ title: 'Support after launch', text: '30-day bug warranty, and you can still reach me for help or maintenance.' },
			{ title: 'Transparent pricing', text: 'Price ranges and cost components are laid out openly above, with no surprises later.' }
		]
	},
	skills: {
		lead: 'Grouped honestly by how deeply I know each one.',
		levels: {
			expert: { label: 'Expert', note: 'The foundation used in every project' },
			hard: { label: 'Advanced', note: 'Used in client systems' },
			mid: { label: 'Intermediate', note: 'Comfortable using on real projects' },
			newbie: { label: 'Still learning', note: 'Currently studying' }
		},
		details: {
			html: 'The foundation, used in every project',
			express: 'Backend with JWT auth, role-based access control (Admin/Editor/Driver), transaction handling, audit logging',
			sveltekit: 'Admin dashboards with infinite scroll, autosuggest, and custom state management',
			mysql: 'Connection pooling and complex queries for reporting',
			cicd: 'GitHub Actions, PM2, nginx reverse proxy, separate staging and production environments',
			wordpress: 'WordPress with custom plugins'
		}
	},
	testimonials: { lead: 'What clients say about working with me.' },
	waMessages: {
		package: 'Hello Radifan, I am interested in the {name} package.',
		upsell: 'Hello Radifan, I would like to ask about the {name} service.',
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
	services: {
		lead: 'Transparent pricing: you can see every component. The final price is discussed first based on your project, and the figures below are a starting point, not a fixed price.',
		formula: ['Service fee', 'Domain', 'Hosting', 'Total'],
		packagesTitle: 'Service packages',
		packagesNote: 'Domain and hosting not included.',
		ask: 'Ask about this package',
		packages: {
			landing: {
				name: 'Landing Page / Business Profile',
				scope: '1 page',
				price: 'Rp800,000 – Rp1,500,000',
				promo: 'First-client promo: from Rp800,000',
				desc: 'Great for a business that is just getting online.'
			},
			multi: {
				name: 'Multi-Page Website + Basic SEO',
				scope: 'Several pages',
				price: 'Rp2,500,000 – Rp4,000,000',
				promo: '',
				desc: 'Great for a business that needs a few pages: profile, services, contact, and more.'
			},
			system: {
				name: 'Custom System / Web App',
				scope: 'Login, database, admin dashboard',
				price: 'Rp8,000,000 and up',
				promo: '',
				desc: 'Depends on complexity. Great for internal systems: attendance, data management, operations dashboards.'
			}
		},
		managementTitle: 'Two ways to manage it',
		management: {
			a: {
				name: 'A. Hosted with me',
				tag: 'Cheaper upfront',
				points: [
					'Lower service fee because it uses my hosting package',
					'Monthly maintenance Rp150,000 – Rp300,000: content updates, backups, small fixes',
					'Great if you do not want to deal with technical work'
				]
			},
			b: {
				name: 'B. Full handover',
				tag: 'Full control in your hands',
				points: [
					'You hold every credential: domain, hosting, and admin access',
					'A video guide on how to manage the website yourself',
					'One-time payment, no monthly commitment',
					'Great if you want full control or have your own IT team'
				]
			}
		},
		hostingTitle: 'Domain & hosting estimates',
		hostingNote: 'Market prices, discussed based on your needs.',
		hosting: [
			{ label: '.com domain', price: '± Rp150,000 – Rp250,000 / year' },
			{ label: 'Shared hosting (static sites)', price: '± Rp300,000 – Rp600,000 / year' },
			{ label: 'Small VPS (systems with a database)', price: '± Rp50,000 – Rp100,000 / month' }
		],
		upsellTitle: 'Add-on services',
		upsellNote: 'Can be bundled as a monthly package.',
		upsell: {
			seo: { name: 'SEO', desc: 'Monthly contract, starting at 3–6 months.' },
			ads: { name: 'Meta Ads / Google Ads', desc: 'Monthly ad management for faster traffic.' },
			allin: {
				name: 'All-in Package',
				desc: 'Website + SEO + Ads + Social Media Management. Special pricing, discussed.'
			}
		}
	},
	process: {
		lead: 'A clear flow from the first chat to handover.',
		steps: [
			{ title: 'Initial consultation', text: 'We discuss your needs over WhatsApp or a meeting (online/offline), then decide the package and price estimate.' },
			{ title: 'Down payment', text: 'At least 30% of the total cost before work begins.' },
			{ title: 'Development', text: 'Estimated 1–2 weeks, depending on the package complexity.' },
			{ title: 'Revisions', text: 'Up to 2 revisions are included in the package price. The 3rd revision onward has an extra fee (confirmed first).' },
			{ title: 'Handover', text: 'Final payment, then credentials/access are handed over (per option A or B) along with the video guide.' }
		]
	},
	faq: [
		{ q: 'How long does building a website take?', a: 'About 1–2 weeks on average, depending on complexity and how fast the client responds (content, revisions, approvals).' },
		{ q: 'Can I request a custom design?', a: 'Yes. Discuss it at the start of the consultation so time and cost can be estimated.' },
		{ q: 'Who fills in the website content (text, photos, etc.)?', a: 'It can be provided by the client, or we can put it together during the consultation (extra fee if full research or copywriting is needed).' },
		{ q: 'Is there a warranty after the website is finished?', a: 'There is a 30-day warranty for technical bugs/errors after handover. Adding new features outside the original scope is counted as extra work.' },
		{ q: 'What if I choose full handover but need help later?', a: 'You can still contact me for further help or maintenance, billed as a separate service.' }
	],
	footer: 'Built by Muhamad Radifan Azman'
};
