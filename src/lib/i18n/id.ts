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
		package: 'Halo Radifan, saya tertarik dengan paket {name}.',
		upsell: 'Halo Radifan, saya ingin tanya soal layanan {name}.',
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
	services: {
		lead: 'Harga transparan: kamu bisa lihat sendiri komponennya. Harga final didiskusikan dulu sesuai kebutuhan proyek, angka di bawah adalah titik awal, bukan harga mati.',
		formula: ['Biaya jasa', 'Domain', 'Hosting', 'Total'],
		packagesTitle: 'Paket jasa',
		packagesNote: 'Belum termasuk domain dan hosting.',
		ask: 'Tanya paket ini',
		packages: {
			landing: {
				name: 'Landing Page / Profil Bisnis',
				scope: '1 halaman',
				price: 'Rp800.000 – Rp1.500.000',
				promo: 'Promo klien pertama: mulai Rp800.000',
				desc: 'Cocok untuk bisnis yang baru mau online.'
			},
			multi: {
				name: 'Website Multi-Halaman + SEO Dasar',
				scope: 'Beberapa halaman',
				price: 'Rp2.500.000 – Rp4.000.000',
				promo: '',
				desc: 'Cocok untuk bisnis yang butuh beberapa halaman: profil, layanan, kontak, dan lainnya.'
			},
			system: {
				name: 'Sistem / Web App Custom',
				scope: 'Login, database, dashboard admin',
				price: 'Rp8.000.000 ke atas',
				promo: '',
				desc: 'Tergantung kompleksitas. Cocok untuk sistem internal: presensi, manajemen data, dashboard operasional.'
			}
		},
		managementTitle: 'Dua pilihan pengelolaan',
		management: {
			a: {
				name: 'A. Hosting bersama saya',
				tag: 'Lebih hemat di awal',
				points: [
					'Biaya jasa lebih terjangkau karena memakai paket hosting saya',
					'Maintenance bulanan Rp150.000 – Rp300.000: update konten, backup, perbaikan kecil',
					'Cocok kalau kamu tidak mau pusing urusan teknis'
				]
			},
			b: {
				name: 'B. Lepas kunci penuh',
				tag: 'Kontrol penuh di tanganmu',
				points: [
					'Kamu pegang semua kredensial: domain, hosting, dan akses admin',
					'Dapat video panduan cara kelola website sendiri',
					'Sekali bayar, tanpa ikatan bulanan',
					'Cocok kalau kamu mau kontrol penuh atau punya tim IT sendiri'
				]
			}
		},
		hostingTitle: 'Estimasi domain & hosting',
		hostingNote: 'Harga pasar, akan didiskusikan sesuai kebutuhan.',
		hosting: [
			{ label: 'Domain .com', price: '± Rp150.000 – Rp250.000 / tahun' },
			{ label: 'Hosting shared (situs statis)', price: '± Rp300.000 – Rp600.000 / tahun' },
			{ label: 'VPS kecil (sistem dengan database)', price: '± Rp50.000 – Rp100.000 / bulan' }
		],
		upsellTitle: 'Layanan tambahan',
		upsellNote: 'Bisa digabung sebagai paket bulanan.',
		upsell: {
			seo: { name: 'SEO', desc: 'Kontrak bulanan, mulai 3–6 bulan.' },
			ads: { name: 'Meta Ads / Google Ads', desc: 'Manajemen iklan bulanan untuk traffic yang lebih cepat.' },
			allin: {
				name: 'Paket All-in',
				desc: 'Website + SEO + Ads + Social Media Management. Harga khusus, didiskusikan.'
			}
		}
	},
	process: {
		lead: 'Alur kerja yang jelas dari awal sampai serah terima.',
		steps: [
			{ title: 'Konsultasi awal', text: 'Diskusi kebutuhan lewat WhatsApp atau meeting (online/offline), lalu tentukan paket dan estimasi harga.' },
			{ title: 'DP (Down Payment)', text: 'Minimal 30% dari total biaya sebelum pengerjaan dimulai.' },
			{ title: 'Pengerjaan', text: 'Estimasi 1–2 minggu, tergantung kompleksitas paket.' },
			{ title: 'Revisi', text: 'Maksimal 2x revisi sudah termasuk dalam harga paket. Revisi ke-3 dan seterusnya dikenakan biaya tambahan (dikonfirmasi dulu).' },
			{ title: 'Serah terima', text: 'Pelunasan sisa pembayaran, lalu kredensial/akses diserahkan (sesuai pilihan A atau B) beserta video panduan.' }
		]
	},
	faq: [
		{ q: 'Berapa lama proses pengerjaan website?', a: 'Rata-rata 1–2 minggu, tergantung kompleksitas dan kecepatan respons dari sisi klien (konten, revisi, approval).' },
		{ q: 'Apakah bisa request desain custom?', a: 'Bisa. Diskusikan di awal konsultasi supaya estimasi waktu dan biayanya bisa dihitung.' },
		{ q: 'Siapa yang mengisi konten website (teks, foto, dll)?', a: 'Bisa disediakan klien, atau dibantu disusun bersama saat konsultasi (biaya tambahan jika perlu riset atau copywriting penuh).' },
		{ q: 'Apakah ada garansi setelah website selesai?', a: 'Ada garansi bug/error teknis selama 30 hari setelah serah terima. Penambahan fitur baru di luar scope awal dihitung sebagai pekerjaan tambahan.' },
		{ q: 'Bagaimana kalau saya pilih paket lepas kunci tapi butuh bantuan lagi?', a: 'Tetap bisa dihubungi untuk bantuan lanjutan atau maintenance, dihitung sebagai jasa terpisah.' }
	],
	placeholder: 'Segera hadir',
	footer: 'Dibuat oleh Muhamad Radifan Azman'
};
