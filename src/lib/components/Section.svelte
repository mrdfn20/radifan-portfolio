<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		id,
		tone = 'bone',
		title,
		children
	}: { id: string; tone?: 'blue' | 'bone'; title: string; children?: Snippet } = $props();
</script>

<section
	{id}
	class="border-b-[3px] border-ink py-16 sm:py-24 {tone === 'blue' ? 'bg-blue text-bone' : 'bg-bone text-ink'}"
>
	<div class="mx-auto w-full max-w-6xl px-4 sm:px-6">
		<h2 class="section-title">{title}</h2>
		<div class="mt-8">
			{@render children?.()}
		</div>
	</div>
</section>
