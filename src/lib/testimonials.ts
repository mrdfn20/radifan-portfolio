// Belum ada testimoni asli. Selama daftar ini kosong, section Testimoni tidak ditampilkan.
// Tambahkan seperti ini saat sudah ada:
// { name: 'Nama Klien', role: 'Pemilik Usaha X', quote: { id: '...', en: '...' } }
export type Testimonial = {
	name: string;
	role: string;
	quote: { id: string; en: string };
};

export const testimonials: Testimonial[] = [];
