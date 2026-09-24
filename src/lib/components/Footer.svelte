<script lang="ts">
	import { i18n } from '$lib/i18n/index.svelte';
</script>

<footer class="bg-ink py-8 text-bone">
	<div class="mx-auto w-full max-w-6xl px-4 font-mono text-sm sm:px-6">
		&copy; {new Date().getFullYear()} &middot; {i18n.t.footer}
	</div>
</footer>
