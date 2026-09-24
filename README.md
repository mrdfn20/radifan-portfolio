<div align="center">

# Radifan Portfolio

**Portofolio satu halaman untuk web developer freelance, dibuat untuk membangun kepercayaan calon klien dan mengarahkan mereka ke WhatsApp.**

![SvelteKit](https://img.shields.io/badge/SvelteKit-2-FF3E00?style=for-the-badge&logo=svelte&logoColor=white)
![Svelte](https://img.shields.io/badge/Svelte-5-FF3E00?style=for-the-badge&logo=svelte&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)

<br />

<img src="docs/screenshots/hero-desktop.png" alt="Tampilan hero portofolio di desktop" width="900" />

</div>

<br />

## Tentang proyek

Situs portofolio milik **Muhamad Radifan Azman**, web developer freelance. Sasarannya jelas: calon klien (terutama UMKM yang baru mau online) bisa melihat karya nyata, memahami harga dan cara kerja, lalu langsung menghubungi lewat WhatsApp.

Gaya visualnya **neobrutalism** yang playful: border tebal, bayangan solid, warna flat, dan tipografi tebal.

## Fitur

- **Satu halaman, sembilan section:** Hero, Tentang, Skill, Proyek, Layanan & Harga, Proses Kerja, FAQ, Testimoni, dan Kontak.
- **Dua bahasa (ID/EN):** tombol ganti bahasa, pilihan diingat, dan default mengikuti bahasa browser.
- **CTA WhatsApp kontekstual:** setiap tombol membuka chat dengan pesan yang sudah terisi sesuai konteks, misalnya paket yang diminati.
- **Harga transparan:** paket jasa, dua pilihan pengelolaan (hosting bersama atau lepas kunci), estimasi domain dan hosting, serta layanan tambahan.
- **Studi kasus proyek unggulan:** sistem manajemen galon (frontend + backend) beserta cerita evolusinya dari Google Apps Script ke stack modern.
- **Analytics yang menghormati privasi:** Google Analytics 4 hanya aktif setelah pengunjung menyetujui cookie, dan klik WhatsApp dicatat sebagai event.
- **Aksesibilitas:** navigasi keyboard, fokus terlihat, tautan "Skip to content", target sentuh minimal 44px, dan `prefers-reduced-motion` dihormati.
- **Animasi terarah:** satu momen masuk di hero, elemen lain muncul sekali saat di-scroll.
- **Statis dan ringan:** di-prerender jadi file statis, siap di-host di mana saja.

## Tampilan

<table>
  <tr>
    <td width="60%"><img src="docs/screenshots/projects-desktop.png" alt="Section proyek di desktop" /></td>
    <td width="40%"><img src="docs/screenshots/hero-mobile.png" alt="Hero di layar HP" /></td>
  </tr>
  <tr>
    <td align="center"><sub>Proyek unggulan dan kartu proyek</sub></td>
    <td align="center"><sub>Responsif di layar HP</sub></td>
  </tr>
  <tr>
    <td><img src="docs/screenshots/services-desktop.png" alt="Section layanan dan harga di desktop" /></td>
    <td><img src="docs/screenshots/services-mobile.png" alt="Section layanan dan harga di HP" /></td>
  </tr>
  <tr>
    <td align="center"><sub>Layanan &amp; harga</sub></td>
    <td align="center"><sub>Layanan &amp; harga di HP</sub></td>
  </tr>
</table>

## Tech stack

| Bagian | Teknologi |
|---|---|
| Framework | [SvelteKit](https://svelte.dev/docs/kit) 2 + [Svelte 5](https://svelte.dev) (runes) |
| Styling | [Tailwind CSS](https://tailwindcss.com) 4 dengan design token sendiri |
| Bahasa | TypeScript |
| Build | [Vite](https://vite.dev) 8, `adapter-static` (prerender penuh) |
| Font | Sora dan IBM Plex Mono (Google Fonts) |
| Analytics | Google Analytics 4 (opsional, dengan persetujuan cookie) |

## Struktur proyek

```text
src/
├── app.css                 # Design token neobrutalism + kelas komponen + animasi
├── routes/
│   ├── +layout.svelte      # Header, footer, meta/SEO, banner cookie
│   └── +page.svelte        # Menyusun semua section
└── lib/
    ├── components/         # Hero, About, Skills, Projects, Services, Process, Faq, Testimonials, Contact, ...
    ├── i18n/               # Kamus teks id.ts dan en.ts
    ├── actions/reveal.ts   # Efek muncul sekali saat di-scroll
    ├── analytics.ts        # Google Analytics + persetujuan cookie
    ├── config.ts           # Data kontak dan pembuat link WhatsApp
    ├── projects.ts         # Data proyek
    ├── skills.ts           # Data skill per level
    └── testimonials.ts     # Daftar testimoni (kosong = section disembunyikan)
docs/
└── PRD.md                  # Tujuan, batasan, dan kriteria selesai
```

## Memulai

Prasyarat: Node.js 20.19 atau lebih baru (atau 22.12+).

```sh
git clone https://github.com/mrdfn20/radifan-portfolio.git
cd radifan-portfolio
npm install
npm run dev        # http://localhost:5173
```

| Perintah | Fungsi |
|---|---|
| `npm run dev` | Server pengembangan |
| `npm run check` | Type check dengan `svelte-check` |
| `npm run build` | Build statis ke folder `build/` |
| `npm run preview` | Pratinjau hasil build |

## Konfigurasi

**Google Analytics (opsional).** Salin `.env.example` ke `.env`, lalu isi Measurement ID:

```sh
VITE_GA_ID=G-XXXXXXXXXX
```

Tanpa ID, analytics dan banner cookie nonaktif.

**Mengubah konten.** Semua isi ada di satu tempat per jenis:

| Yang diubah | File |
|---|---|
| Nomor WhatsApp, email, dan tautan sosial | `src/lib/config.ts` |
| Teks halaman (ID dan EN) | `src/lib/i18n/id.ts`, `src/lib/i18n/en.ts` |
| Daftar proyek dan link repo | `src/lib/projects.ts` |
| Daftar skill | `src/lib/skills.ts` |
| Testimoni (section tampil otomatis begitu terisi) | `src/lib/testimonials.ts` |
| Warna, font, dan bayangan | `@theme` di `src/app.css` |

## Deploy

Hasil build adalah situs statis, jadi bisa di-host di Vercel, Netlify, Cloudflare Pages, atau server statis biasa.

- **Build command:** `npm run build`
- **Output directory:** `build`
- **Environment variable:** `VITE_GA_ID` (kalau memakai analytics)

## Dokumentasi

Tujuan, keputusan desain, batasan (apa yang sengaja tidak dikerjakan), dan kriteria selesai tercatat di [`docs/PRD.md`](docs/PRD.md).

## Kontak

**Muhamad Radifan Azman**, web developer freelance

[![WhatsApp](https://img.shields.io/badge/WhatsApp-0877--8379--8810-25D366?style=flat-square&logo=whatsapp&logoColor=white)](https://wa.me/6287783798810)
[![Email](https://img.shields.io/badge/Email-radifan.azman@gmail.com-EA4335?style=flat-square&logo=gmail&logoColor=white)](mailto:radifan.azman@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-mradifanazman-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://id.linkedin.com/in/mradifanazman)
[![Instagram](https://img.shields.io/badge/Instagram-@radifanazman-E4405F?style=flat-square&logo=instagram&logoColor=white)](https://www.instagram.com/radifanazman/)
[![GitHub](https://img.shields.io/badge/GitHub-mrdfn20-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/mrdfn20)
