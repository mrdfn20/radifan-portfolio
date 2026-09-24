# Portofolio — Muhamad Radifan Azman

Portofolio satu halaman (freelance web developer). SvelteKit 5 + Tailwind CSS v4, situs statis, dua bahasa (ID/EN), gaya neobrutalism.

Rencana dan batasan proyek ada di [`docs/PRD.md`](docs/PRD.md).

## Menjalankan

```sh
npm install
npm run dev        # http://localhost:5173
npm run check      # type check
npm run build      # hasil statis di build/
```

## Konfigurasi

- **Google Analytics (opsional):** salin `.env.example` ke `.env` lalu isi `VITE_GA_ID`. Tanpa ID, analytics dan banner cookie nonaktif.
- **Kontak:** `src/lib/config.ts`
- **Teks ID/EN:** `src/lib/i18n/`
- **Proyek, skill, testimoni:** `src/lib/projects.ts`, `src/lib/skills.ts`, `src/lib/testimonials.ts` (section Testimoni tampil otomatis begitu daftarnya terisi)

## Deploy

Hasil build (`build/`) adalah situs statis. Bisa di-deploy ke Vercel, Netlify, atau Cloudflare Pages (build command `npm run build`, output `build`). Isi `VITE_GA_ID` di environment variable platform kalau memakai analytics.
