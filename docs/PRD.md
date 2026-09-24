# PRD — Portofolio Muhamad Radifan Azman

Status: draf untuk disetujui · Tanggal: 2026-09-24

## 1. Tujuan

Halaman portofolio satu halaman untuk **freelance web developer** yang membangun kepercayaan calon klien (terutama UMKM yang baru mau online) dan mengarahkan mereka menghubungi lewat **WhatsApp**.

**Ukuran sukses**
- Jumlah klik tombol WhatsApp (event Google Analytics)
- Jumlah pengunjung (Google Analytics)

## 2. Target pengguna

Pemilik UMKM / bisnis kecil di Indonesia yang butuh website, landing page, atau sistem internal. Sekunder: klien berbahasa Inggris (karena ada dua bahasa).

## 3. Keputusan yang sudah dikunci

| Hal | Keputusan |
|---|---|
| Nama tampil | Muhamad Radifan Azman |
| Sudut pandang teks | "Saya" (personal) |
| Stack | SvelteKit 5 + Tailwind CSS, situs statis (`adapter-static`) |
| Gaya | Neobrutalism, playful (token di `src/app.css`) |
| Bahasa | ID + EN, satu URL, tombol ganti bahasa, default ID |
| Tema | Satu tema, **tanpa dark mode** |
| Deploy | Vercel / Netlify / Cloudflare Pages, domain bawaan dulu |
| Kontak utama | WhatsApp 0877-8379-8810 (`wa.me/62877…`) dengan pesan otomatis per konteks |
| Kontak lain | Email `radifan.azman@gmail.com`, GitHub `mrdfn20`, LinkedIn, Instagram `radifanazman` |
| Analytics | Google Analytics 4 + banner persetujuan cookie. ID lewat env var, tanpa ID = nonaktif |
| Visual | Placeholder neobrutalism dulu (belum ada foto dan screenshot) |

## 4. Struktur halaman (urutan atas ke bawah)

1. **Hero** — nama, tagline, CTA WhatsApp, animasi masuk (satu momen orchestrated)
2. **About + Kenapa pilih saya** — akses penuh (lepas kunci), video panduan, dukungan lanjutan
3. **Skills** — Expert / Hard / Mid / Newbie sesuai brief
4. **Projects** — sistem galon CV Anugrah (frontend + backend) sebagai featured + studi kasus kualitatif ("manual ke otomatis"); 6 proyek lain sebagai kartu; cerita evolusi GAS ke stack modern
5. **Layanan & Harga** — 3 paket jasa, pilihan A (hosting bersama) dan B (lepas kunci), estimasi domain & hosting, upsell (SEO, Meta/Google Ads, All-in)
6. **Proses kerja** — 5 langkah (Konsultasi, DP 30%, Pengerjaan 1-2 minggu, Revisi maks. 2x, Serah terima)
7. **FAQ** — 5 pertanyaan dari brief
8. **Testimoni** — komponen jadi, **disembunyikan** sampai ada testimoni asli
9. **Contact** — WhatsApp, email, GitHub, LinkedIn, Instagram

## 5. Konten inti

**Harga (belum termasuk domain & hosting)**
- Landing Page / Profil Bisnis: Rp800.000 – Rp1.500.000. Tampil label "Promo klien pertama: mulai Rp800.000" (1-2 klien pertama)
- Website Multi-Halaman + SEO Dasar: Rp2.500.000 – Rp4.000.000
- Sistem / Web App Custom: Rp8.000.000 ke atas
- Maintenance bulanan (pilihan A): Rp150.000 – Rp300.000/bulan
- Harga final didiskusikan sesuai kebutuhan proyek

**Garansi:** garansi bug/error teknis **30 hari** setelah serah terima. Fitur baru di luar scope dihitung pekerjaan tambahan.

**Aturan konten**
- Tidak boleh ada angka hasil (traffic, before-after) yang dikarang. Studi kasus kualitatif dulu.
- Catatan internal dari brief ("Yoga", "pecah telur", "di video") **tidak** masuk halaman.
- Nama klien asli boleh ditampilkan (CV Anugrah Gemilang, Fasih Foundation, SMP YKTB).
- Link proyek: repo GitHub dari `mrdfn20`, demo kalau ada. Proyek belum di GitHub dan repo privat: tanpa link.

**Pesan WhatsApp otomatis (contoh)**
- Tombol hero: "Halo Radifan, saya ingin konsultasi soal website."
- Kartu paket: "Halo Radifan, saya tertarik dengan paket {nama paket}."

## 6. Di luar scope (tidak dikerjakan sekarang)

- Formulir kontak / backend / server
- Blog / CMS
- Halaman detail per proyek
- Dark mode dan multi-tema
- URL terpisah per bahasa (`/en`)
- Domain `.com` (dipasang setelah launch)

## 7. Persyaratan non-fungsional

- **Aksesibilitas:** kontras teks 4.5:1, fokus keyboard terlihat, target sentuh minimal 44×44px, `prefers-reduced-motion` dihormati, alt text pada gambar
- **Responsive:** 375, 768, 1024, 1440px, tanpa scroll horizontal
- **Performa:** situs statis, font dimuat dengan `display=swap`, gambar dioptimasi dan tidak menyebabkan layout shift
- **Animasi:** satu momen di hero; elemen lain muncul sekali saat di-scroll
- **SEO dasar:** judul, deskripsi, gambar preview link (OG), sitemap, `lang` mengikuti bahasa
- **Privasi:** GA aktif hanya setelah persetujuan cookie
- **Ikon:** SVG, tanpa emoji sebagai ikon

## 8. Tahap pengerjaan

1. Fondasi (setup, token, font, i18n, kerangka halaman)
2. Hero + Contact (cek gaya)
3. Projects
4. Layanan & Harga + Proses + FAQ
5. About, Skills, Testimoni
6. Poles: responsive, animasi, aksesibilitas, SEO, GA, deploy

Setelah tiap tahap: kamu cek hasilnya, saya revisi, lalu commit.

## 9. Kriteria selesai

- Semua section (kecuali Testimoni yang tersembunyi) tampil di ID dan EN
- Setiap tombol WhatsApp membuka chat dengan pesan yang benar dan tercatat sebagai event GA
- Lolos pemeriksaan aksesibilitas dasar dan tampil benar di 4 lebar layar
- `npm run build` sukses dan hasil deploy bisa dibuka publik

## 10. Data yang masih ditunggu dari pemilik

- Measurement ID Google Analytics
- Foto profil dan screenshot proyek (sementara placeholder)
- Testimoni klien (saat sudah ada)
- Angka hasil nyata untuk studi kasus (opsional)
