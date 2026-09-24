<script lang="ts">
	import Section from '$lib/components/Section.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Services from '$lib/components/Services.svelte';
	import Process from '$lib/components/Process.svelte';
	import Faq from '$lib/components/Faq.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import { i18n } from '$lib/i18n/index.svelte';

	// Section yang belum dibuat (tahap 5); warna latar bergantian sesuai PRD.
	const pending = [
		{ id: 'about', key: 'about', tone: 'bone' },
		{ id: 'skills', key: 'skills', tone: 'blue' }
	] as const;
</script>

<Hero />

{#each pending as s}
	<Section id={s.id} tone={s.tone} title={i18n.t.sections[s.key]}>
		<p class="neo-card inline-block px-4 py-2 font-mono text-sm">{i18n.t.placeholder}</p>
	</Section>
{/each}

<Projects />
<Services />
<Process />
<Faq />
<Contact />
