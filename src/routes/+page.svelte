<script lang="ts">
	import Section from '$lib/components/Section.svelte';
	import { i18n } from '$lib/i18n/index.svelte';

	// Urutan dan warna latar bergantian (biru/bone) sesuai PRD.
	const sections = [
		{ id: 'hero', key: 'hero', tone: 'blue' },
		{ id: 'about', key: 'about', tone: 'bone' },
		{ id: 'skills', key: 'skills', tone: 'blue' },
		{ id: 'projects', key: 'projects', tone: 'bone' },
		{ id: 'services', key: 'services', tone: 'blue' },
		{ id: 'process', key: 'process', tone: 'bone' },
		{ id: 'faq', key: 'faq', tone: 'blue' },
		{ id: 'contact', key: 'contact', tone: 'bone' }
	] as const;
</script>

{#each sections as s}
	<Section id={s.id} tone={s.tone} title={i18n.t.sections[s.key]}>
		<p class="neo-card inline-block px-4 py-2 font-mono text-sm">{i18n.t.placeholder}</p>
	</Section>
{/each}
