// Data kontak tunggal — dipakai Hero, Contact, dan (nanti) Layanan.
export const contact = {
	whatsappNumber: '6287783798810', // format internasional untuk wa.me
	phoneDisplay: '0877-8379-8810',
	email: 'radifan.azman@gmail.com',
	github: 'https://github.com/mrdfn20',
	linkedin: 'https://id.linkedin.com/in/mradifanazman',
	instagram: 'https://www.instagram.com/radifanazman/'
} as const;

/** Link chat WhatsApp dengan pesan terisi otomatis. */
export function waLink(message: string): string {
	return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
