<script lang="ts">
	import { i18n } from '$lib/i18n/index.svelte';
	import { reveal } from '$lib/actions/reveal';
	import Section from './Section.svelte';

	const p = $derived(i18n.t.process);
</script>

<Section id="process" tone="bone" title={i18n.t.sections.process}>
	<p class="-mt-4 mb-10 max-w-2xl text-lg">{p.lead}</p>
	<ol class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
		{#each p.steps as step, i (i)}
			<li class="flex" use:reveal={(i % 3) * 90}>
				<article class="neo-card flex w-full gap-4 p-5">
					<span
						class="neo-border grid size-12 shrink-0 place-items-center bg-accent font-mono text-xl font-extrabold shadow-neo"
						aria-hidden="true">{i + 1}</span
					>
					<div>
						<h3 class="text-lg font-extrabold tracking-tight">{step.title}</h3>
						<p class="mt-1 text-sm">{step.text}</p>
					</div>
				</article>
			</li>
		{/each}
	</ol>
</Section>
