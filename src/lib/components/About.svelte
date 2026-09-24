<script lang="ts">
	import { i18n } from '$lib/i18n/index.svelte';
	import { reveal } from '$lib/actions/reveal';
	import Section from './Section.svelte';

	const a = $derived(i18n.t.about);
</script>

<Section id="about" tone="bone" title={i18n.t.sections.about}>
	<div class="grid items-start gap-10 lg:grid-cols-[1.2fr_0.8fr]">
		<div class="space-y-4 text-lg">
			<p class="text-2xl font-extrabold">{a.greeting}</p>
			<p>{a.p1}</p>
			<p>{a.p2}</p>
		</div>

		<!-- Placeholder foto profil -->
		<figure class="mx-auto w-full max-w-xs" use:reveal>
			<div class="neo-border grid aspect-square place-items-center bg-accent shadow-neo-lg" aria-hidden="true">
				<span class="font-mono text-6xl font-extrabold">MRA</span>
			</div>
			<figcaption class="mt-3 text-center font-mono text-sm">{a.photoNote}</figcaption>
		</figure>
	</div>

	<h3 class="mt-16 text-2xl font-extrabold">{a.whyTitle}</h3>
	<ul class="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
		{#each a.why as item, i (i)}
			<li class="flex" use:reveal={i * 90}>
				<article class="neo-card w-full p-5 {i === 0 ? '!bg-accent' : ''}">
					<h4 class="text-lg font-extrabold tracking-tight">{item.title}</h4>
					<p class="mt-2 text-sm">{item.text}</p>
				</article>
			</li>
		{/each}
	</ul>
</Section>
