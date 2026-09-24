// Data proyek non-teks (teks ID/EN ada di i18n). Link repo dari GitHub mrdfn20.
const gh = (repo: string) => `https://github.com/mrdfn20/${repo}`;

export const featured = {
	tags: ['SvelteKit 5', 'Tailwind CSS', 'Express.js', 'MySQL', 'JWT'],
	frontendRepo: gh('frontend-dashboard-admin-anugrahgemilang'),
	backendRepo: gh('cv-anugrah-admin-backend')
};

export type ProjectId = 'fasih' | 'seaweed' | 'presensi' | 'notesApi' | 'notesFirebase';

export const projects: {
	id: ProjectId;
	tags: string[];
	repo?: string;
	kind?: 'client' | 'practice';
	bg: string; // kelas warna latar thumbnail placeholder
	mark: string; // inisial di thumbnail
}[] = [
	{ id: 'fasih', tags: ['HTML', 'SCSS', 'Swiper.js'], repo: gh('Fasih-Foundation-Arabic-Camp'), kind: 'client', bg: 'bg-accent', mark: 'FF' },
	{ id: 'seaweed', tags: ['HTML', 'CSS', 'JavaScript'], repo: gh('seaweed'), kind: 'client', bg: 'bg-accent-2', mark: 'SW' },
	{ id: 'presensi', tags: ['Google Apps Script'], kind: 'client', bg: 'bg-blue text-bone', mark: 'PR' },
	{ id: 'notesApi', tags: ['Node.js', 'Migrations', 'Postman'], repo: gh('notes-api-back-end'), kind: 'practice', bg: 'bg-bone', mark: 'NA' },
	{ id: 'notesFirebase', tags: ['Firebase'], repo: gh('notesApp-webServer-firebase'), kind: 'practice', bg: 'bg-accent', mark: 'NF' }
];
