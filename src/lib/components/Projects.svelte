<script lang="ts">
	import { i18n } from '$lib/i18n/index.svelte';
	import { featured, projects } from '$lib/projects';
	import { reveal } from '$lib/actions/reveal';
	import { waLink } from '$lib/config';
	import { track } from '$lib/analytics';
	import Section from './Section.svelte';
	import Icon from './Icon.svelte';

	const p = $derived(i18n.t.projects);
</script>

<Section id="projects" tone="bone" title={i18n.t.sections.projects}>
	<p class="-mt-4 mb-10 max-w-2xl text-lg">{p.lead}</p>

	<!-- Proyek unggulan: frontend + backend sebagai satu sistem -->
	<article class="neo-card grid overflow-hidden lg:grid-cols-[0.9fr_1.1fr]" use:reveal>
		<div class="hidden items-center border-b-[3px] border-ink bg-blue p-8 lg:flex lg:border-r-[3px] lg:border-b-0" aria-hidden="true">
			<div class="neo-border w-full bg-bone shadow-neo-lg">
				<div class="flex gap-1.5 border-b-[3px] border-ink bg-accent px-3 py-2">
					<span class="size-2.5 rounded-full border-2 border-ink bg-bone"></span>
					<span class="size-2.5 rounded-full border-2 border-ink bg-bone"></span>
				</div>
				<div class="grid grid-cols-[5rem_1fr] gap-3 p-3">
					<div class="space-y-2">
						<div class="h-3 rounded-neo bg-ink"></div>
						<div class="h-3 rounded-neo bg-ink/20"></div>
						<div class="h-3 rounded-neo bg-ink/20"></div>
						<div class="h-3 rounded-neo bg-ink/20"></div>
					</div>
					<div class="space-y-3">
						<div class="grid grid-cols-3 gap-2">
							<div class="neo-border h-12 bg-accent"></div>
							<div class="neo-border h-12 bg-accent-2"></div>
							<div class="neo-border h-12 bg-blue"></div>
						</div>
						<div class="space-y-1.5">
							{#each [0, 1, 2, 3] as row (row)}
								<div class="h-3 rounded-neo bg-ink/15"></div>
							{/each}
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="p-6 sm:p-8">
			<div class="flex flex-wrap gap-2">
				<span class="neo-tag">{p.featuredBadge}</span>
				<span class="neo-tag bg-bone">{p.kind.client}</span>
			</div>
			<h3 class="mt-4 text-2xl font-extrabold tracking-tight sm:text-3xl">{p.featuredTitle}</h3>
			<p class="mt-3">{p.featuredDesc}</p>

			<ul class="mt-5 space-y-2">
				{#each p.highlights as item}
					<li class="flex gap-2">
						<span class="mt-2 size-2.5 shrink-0 border-2 border-ink bg-accent" aria-hidden="true"></span>
						<span>{item}</span>
					</li>
				{/each}
			</ul>

			<div class="mt-6 border-t-[3px] border-dashed border-ink pt-5">
				<h4 class="font-mono text-sm font-semibold uppercase">{p.evolutionTitle}</h4>
				<ol class="mt-3 grid gap-3 sm:grid-cols-[1fr_auto_1fr] sm:items-stretch">
					<li class="neo-border bg-bone p-3 text-sm">
						<span class="block font-mono font-semibold">{p.evolution[0].label}</span>
						{p.evolution[0].text}
					</li>
					<li class="grid place-items-center" aria-hidden="true">
						<span class="rotate-90 sm:rotate-0"><Icon name="arrow" /></span>
					</li>
					<li class="neo-border bg-accent p-3 text-sm">
						<span class="block font-mono font-semibold">{p.evolution[1].label}</span>
						{p.evolution[1].text}
					</li>
				</ol>
			</div>

			<ul class="mt-5 flex flex-wrap gap-2" aria-label="Tech stack">
				{#each featured.tags as tag}
					<li class="neo-tag">{tag}</li>
				{/each}
			</ul>

			<div class="mt-6 flex flex-wrap gap-3">
				<a href={featured.frontendRepo} class="neo-btn" target="_blank" rel="noopener noreferrer">
					<Icon name="github" size={20} />
					{p.frontend}
				</a>
				<a href={featured.backendRepo} class="neo-btn bg-bone" target="_blank" rel="noopener noreferrer">
					<Icon name="github" size={20} />
					{p.backend}
				</a>
			</div>
		</div>
	</article>

	<!-- Proyek lain -->
	<ul class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{#each projects as project, i (project.id)}
			{@const item = p.items[project.id]}
			<li class="flex" use:reveal={(i % 3) * 90}>
				<article class="neo-card flex w-full flex-col overflow-hidden">
					<div
						class="grid h-32 place-items-center border-b-[3px] border-ink text-5xl font-extrabold {project.bg}"
						aria-hidden="true"
					>
						<span class="font-mono">{project.mark}</span>
					</div>
					<div class="flex flex-1 flex-col p-5">
						{#if project.kind}
							<span class="neo-tag mb-3 self-start bg-bone">{p.kind[project.kind]}</span>
						{/if}
						<h3 class="text-xl font-extrabold tracking-tight">{item.title}</h3>
						<p class="mt-2 flex-1 text-sm">{item.desc}</p>
						<ul class="mt-4 flex flex-wrap gap-2" aria-label="Tech stack">
							{#each project.tags as tag}
								<li class="neo-tag">{tag}</li>
							{/each}
						</ul>
						{#if project.repo}
							<a href={project.repo} class="neo-btn mt-5 self-start bg-bone" target="_blank" rel="noopener noreferrer">
								{p.repo}
								<Icon name="external" size={18} />
							</a>
						{:else}
							<p class="mt-5 font-mono text-sm text-ink/70">{p.noRepo}</p>
						{/if}
					</div>
				</article>
			</li>
		{/each}
		<li class="flex" use:reveal={(projects.length % 3) * 90}>
			<article class="neo-card flex w-full flex-col justify-between bg-accent p-6">
				<div>
					<h3 class="text-2xl font-extrabold tracking-tight">{p.cta.title}</h3>
					<p class="mt-2">{p.cta.text}</p>
				</div>
				<a
					href={waLink(i18n.t.waMessages.projects)}
					class="neo-btn mt-6 self-start bg-bone"
					target="_blank"
					rel="noopener noreferrer"
					onclick={() => track('whatsapp_click', { source: 'projects' })}
				>
					<Icon name="whatsapp" size={20} />
					{p.cta.button}
				</a>
			</article>
		</li>
	</ul>
</Section>
