export const id = {
	brand: 'Radifan',
	nav: {
		about: 'Tentang',
		skills: 'Skill',
		projects: 'Proyek',
		services: 'Layanan',
		process: 'Proses',
		faq: 'FAQ',
		contact: 'Kontak'
	},
	sections: {
		hero: 'Hero',
		about: 'Tentang Saya',
		skills: 'Skill',
		projects: 'Proyek',
		services: 'Layanan & Harga',
		process: 'Proses Kerja',
		faq: 'Pertanyaan Umum',
		contact: 'Kontak'
	},
	hero: {
		eyebrow: 'Web Developer · Freelance',
		headline: 'Website yang bikin bisnismu dipercaya.',
		sub: 'Saya Muhamad Radifan Azman. Saya bangun landing page, website, sampai sistem custom untuk UMKM dan bisnis yang mau tumbuh online.',
		ctaPrimary: 'Chat via WhatsApp',
		ctaSecondary: 'Lihat proyek',
		trust: ['Akses penuh jadi milikmu', 'Video panduan', 'Garansi bug 30 hari']
	},
	contact: {
		lead: 'Punya ide website atau sistem untuk bisnismu? Ceritakan kebutuhanmu, saya bantu hitung paket dan estimasinya.',
		cta: 'Ngobrol di WhatsApp'
	},
	waMessages: {
		hero: 'Halo Radifan, saya ingin konsultasi soal website.',
		contact: 'Halo Radifan, saya ingin konsultasi soal proyek saya.'
	},
	projects: {
		lead: 'Sistem yang sudah dipakai bisnis nyata, dari halaman statis sampai aplikasi dengan login dan database.',
		featuredBadge: 'Proyek unggulan',
		featuredTitle: 'CV Anugrah Gemilang — Sistem Manajemen Galon',
		featuredDesc:
			'Dashboard admin dan REST API untuk bisnis galon isi ulang: pelanggan, transaksi & piutang, stok galon, armada, dan laporan dengan export CSV/PDF.',
		highlights: [
			'Peran berbeda untuk Admin, Editor, dan Driver',
			'Transaksi keuangan atomic: otomatis rollback kalau ada langkah yang gagal',
			'Audit log untuk setiap perubahan data',
			'Deployment dengan staging dan production terpisah (GitHub Actions, PM2, nginx)'
		],
		evolutionTitle: 'Dari manual ke sistem',
		evolution: [
			{ label: 'Versi awal', text: 'Sistem Input Galon dengan Google Apps Script' },
			{ label: 'Sekarang', text: 'Express + MySQL + SvelteKit dengan login, peran, dan laporan' }
		],
		frontend: 'Repo frontend',
		backend: 'Repo backend',
		repo: 'Lihat repo',
		noRepo: 'Repo tidak dipublikasikan',
		kind: { client: 'Proyek klien', practice: 'Latihan' },
		items: {
			fasih: {
				title: 'Fasih Foundation — Arabic Camp',
				desc: 'Website statis untuk lembaga kursus bahasa Arab, dengan carousel interaktif untuk menampilkan program.'
			},
			seaweed: {
				title: 'Seaweed',
				desc: 'Platform informasi untuk bisnis rumput laut: trading, ekspor, dan impor.'
			},
			presensi: {
				title: 'Sistem Presensi — SMP YKTB',
				desc: 'Presensi digital siswa yang menggantikan pencatatan manual.'
			},
			notesApi: {
				title: 'Notes API',
				desc: 'REST API CRUD dengan Node.js murni tanpa framework, lengkap dengan database migration dan koleksi test Postman.'
			},
			notesFirebase: {
				title: 'Notes App — Firebase',
				desc: 'Latihan integrasi Firebase sebagai backend aplikasi catatan.'
			}
		}
	},
	placeholder: 'Segera hadir',
	footer: 'Dibuat oleh Muhamad Radifan Azman'
};
