<script lang="ts">
	import Section from '$lib/components/Section.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import { i18n } from '$lib/i18n/index.svelte';

	// Section yang belum dibuat (tahap 3-5); warna latar bergantian sesuai PRD.
	const before = [
		{ id: 'about', key: 'about', tone: 'bone' },
		{ id: 'skills', key: 'skills', tone: 'blue' },
		{ id: 'projects', key: 'projects', tone: 'bone' },
		{ id: 'services', key: 'services', tone: 'blue' },
		{ id: 'process', key: 'process', tone: 'bone' },
		{ id: 'faq', key: 'faq', tone: 'blue' }
	] as const;
</script>

<Hero />

{#each before as s}
	<Section id={s.id} tone={s.tone} title={i18n.t.sections[s.key]}>
		<p class="neo-card inline-block px-4 py-2 font-mono text-sm">{i18n.t.placeholder}</p>
	</Section>
{/each}

<Contact />
