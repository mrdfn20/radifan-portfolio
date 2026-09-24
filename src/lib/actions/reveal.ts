import type { Action } from 'svelte/action';

/**
 * Munculkan elemen sekali saat masuk viewport (tidak di-trigger ulang).
 * Tanpa JS elemen tetap terlihat; disembunyikan hanya setelah action jalan.
 */
export const reveal: Action<HTMLElement, number | undefined> = (node, delay = 0) => {
	if (typeof IntersectionObserver === 'undefined') return;

	node.style.setProperty('--d', `${delay}ms`);
	node.classList.add('reveal-hidden');

	const io = new IntersectionObserver(
		(entries) => {
			if (entries.some((e) => e.isIntersecting)) {
				node.classList.add('reveal-in');
				io.disconnect();
			}
		},
		{ threshold: 0.15 }
	);
	io.observe(node);

	return { destroy: () => io.disconnect() };
};
