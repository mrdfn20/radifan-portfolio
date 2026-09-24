// Skill dari GitHub, dikelompokkan sesuai design brief. `detail` = kunci di i18n skills.details.
export type Level = 'expert' | 'hard' | 'mid' | 'newbie';

export const skillLevels: {
	level: Level;
	filled: 1 | 2 | 3 | 4; // panjang meter kotak
	items: { name: string; detail?: string }[];
}[] = [
	{ level: 'expert', filled: 4, items: [{ name: 'HTML / CSS / JavaScript', detail: 'html' }] },
	{
		level: 'hard',
		filled: 3,
		items: [
			{ name: 'Express.js', detail: 'express' },
			{ name: 'SvelteKit 5', detail: 'sveltekit' },
			{ name: 'MySQL', detail: 'mysql' },
			{ name: 'CI/CD & Deployment', detail: 'cicd' }
		]
	},
	{
		level: 'mid',
		filled: 2,
		items: [
			{ name: 'Node.js' },
			{ name: 'Tailwind CSS' },
			{ name: 'SCSS' },
			{ name: 'WordPress', detail: 'wordpress' },
			{ name: 'Google Apps Script' },
			{ name: 'Vitest' }
		]
	},
	{ level: 'newbie', filled: 1, items: [{ name: 'Firebase' }] }
];
