<script lang="ts">
	import { i18n } from '$lib/i18n/index.svelte';
	import Section from './Section.svelte';
</script>

<Section id="faq" tone="blue" title={i18n.t.sections.faq}>
	<div class="max-w-3xl space-y-4">
		{#each i18n.t.faq as item, i (i)}
			<details class="neo-card group">
				<summary
					class="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 p-4 font-semibold [&::-webkit-details-marker]:hidden"
				>
					<span>{item.q}</span>
					<span
						class="neo-border grid size-8 shrink-0 place-items-center bg-accent text-xl leading-none transition-transform duration-200 group-open:rotate-45"
						aria-hidden="true">+</span
					>
				</summary>
				<p class="border-t-[3px] border-ink p-4">{item.a}</p>
			</details>
		{/each}
	</div>
</Section>
