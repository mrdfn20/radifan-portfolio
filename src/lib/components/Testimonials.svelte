<script lang="ts">
	import { i18n } from '$lib/i18n/index.svelte';
	import { testimonials } from '$lib/testimonials';
	import { reveal } from '$lib/actions/reveal';
	import Section from './Section.svelte';
</script>

<!-- Disembunyikan sampai ada testimoni asli (lihat src/lib/testimonials.ts) -->
{#if testimonials.length > 0}
	<Section id="testimonials" tone="bone" title={i18n.t.sections.testimonials}>
		<p class="-mt-4 mb-10 max-w-2xl text-lg">{i18n.t.testimonials.lead}</p>
		<ul class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each testimonials as t, i (t.name)}
				<li class="flex" use:reveal={(i % 3) * 90}>
					<figure class="neo-card flex w-full flex-col p-6">
						<blockquote class="flex-1 text-lg">&ldquo;{t.quote[i18n.locale]}&rdquo;</blockquote>
						<figcaption class="mt-4 border-t-[3px] border-ink pt-3">
							<span class="block font-extrabold">{t.name}</span>
							<span class="font-mono text-sm">{t.role}</span>
						</figcaption>
					</figure>
				</li>
			{/each}
		</ul>
	</Section>
{/if}
