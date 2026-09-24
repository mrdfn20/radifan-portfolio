<script lang="ts">
	import { i18n } from '$lib/i18n/index.svelte';
	import { skillLevels } from '$lib/skills';
	import { reveal } from '$lib/actions/reveal';
	import Section from './Section.svelte';

	const sk = $derived(i18n.t.skills);
	const detail = (key: string) => sk.details[key as keyof typeof sk.details];
</script>

<Section id="skills" tone="blue" title={i18n.t.sections.skills}>
	<p class="-mt-4 mb-10 max-w-2xl text-lg">{sk.lead}</p>

	<ul class="grid gap-6 md:grid-cols-2">
		{#each skillLevels as group, i (group.level)}
			{@const info = sk.levels[group.level]}
			<li class="flex" use:reveal={(i % 2) * 90}>
				<article class="neo-card w-full p-6">
					<div class="flex items-center justify-between gap-4">
						<h3 class="text-xl font-extrabold">{info.label}</h3>
						<!-- Meter kotak; teks label sudah menyampaikan level, jadi meter dekoratif -->
						<span class="flex gap-1" aria-hidden="true">
							{#each [1, 2, 3, 4] as n (n)}
								<span class="size-4 border-[3px] border-ink {n <= group.filled ? 'bg-accent-2' : 'bg-bone'}"></span>
							{/each}
						</span>
					</div>
					<p class="mt-1 font-mono text-sm">{info.note}</p>

					<ul class="mt-4 flex flex-wrap gap-x-2 gap-y-3">
						{#each group.items as skill (skill.name)}
							<li class={skill.detail ? 'w-full' : ''}>
								<span class="neo-tag bg-accent">{skill.name}</span>
								{#if skill.detail}
									<p class="mt-1 text-sm">{detail(skill.detail)}</p>
								{/if}
							</li>
						{/each}
					</ul>
				</article>
			</li>
		{/each}
	</ul>
</Section>
