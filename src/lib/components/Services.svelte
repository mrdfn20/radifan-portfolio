<script lang="ts">
	import { i18n } from '$lib/i18n/index.svelte';
	import { waLink } from '$lib/config';
	import { track } from '$lib/analytics';
	import { reveal } from '$lib/actions/reveal';
	import Section from './Section.svelte';
	import Icon from './Icon.svelte';

	const s = $derived(i18n.t.services);
	const packageIds = ['landing', 'multi', 'system'] as const;
	const upsellIds = ['seo', 'ads', 'allin'] as const;

	const msg = (tpl: string, name: string) => waLink(tpl.replace('{name}', name));
</script>

<Section id="services" tone="blue" title={i18n.t.sections.services}>
	<p class="-mt-4 max-w-2xl text-lg">{s.lead}</p>

	<!-- Rumus harga: Biaya jasa + Domain + Hosting = Total -->
	<ol class="mt-8 flex flex-wrap items-center gap-2 font-mono text-sm font-semibold text-ink" aria-label="Formula">
		{#each s.formula as part, i}
			<li class="neo-border bg-bone px-3 py-1.5 shadow-neo {i === s.formula.length - 1 ? '!bg-accent' : ''}">{part}</li>
			{#if i < s.formula.length - 2}
				<li aria-hidden="true" class="text-bone">+</li>
			{:else if i === s.formula.length - 2}
				<li aria-hidden="true" class="text-bone">=</li>
			{/if}
		{/each}
	</ol>

	<!-- Paket jasa -->
	<div class="mt-12">
		<h3 class="text-2xl font-extrabold">{s.packagesTitle}</h3>
		<p class="mt-1 font-mono text-sm">{s.packagesNote}</p>
		<ul class="mt-6 grid gap-6 lg:grid-cols-3">
			{#each packageIds as id, i (id)}
				{@const pkg = s.packages[id]}
				<li class="flex" use:reveal={i * 90}>
					<article class="neo-card flex w-full flex-col p-6">
						<p class="font-mono text-sm font-semibold">{pkg.scope}</p>
						<h4 class="mt-1 text-xl font-extrabold tracking-tight">{pkg.name}</h4>
						<p class="mt-4 text-2xl font-extrabold text-blue">{pkg.price}</p>
						{#if pkg.promo}
							<p class="neo-tag mt-3 self-start">{pkg.promo}</p>
						{/if}
						<p class="mt-4 flex-1 text-sm">{pkg.desc}</p>
						<a
							href={msg(i18n.t.waMessages.package, pkg.name)}
							class="neo-btn mt-6 self-start"
							target="_blank"
							rel="noopener noreferrer"
							onclick={() => track('whatsapp_click', { source: `package:${id}` })}
						>
							<Icon name="whatsapp" size={20} />
							{s.ask}
						</a>
					</article>
				</li>
			{/each}
		</ul>
	</div>

	<!-- Dua pilihan pengelolaan -->
	<div class="mt-16">
		<h3 class="text-2xl font-extrabold">{s.managementTitle}</h3>
		<ul class="mt-6 grid gap-6 md:grid-cols-2">
			{#each ['a', 'b'] as const as key, i (key)}
				{@const m = s.management[key]}
				<li class="flex" use:reveal={i * 90}>
					<article class="neo-card w-full p-6 {key === 'b' ? '!bg-accent' : ''}">
						<span class="neo-tag bg-bone">{m.tag}</span>
						<h4 class="mt-3 text-xl font-extrabold tracking-tight">{m.name}</h4>
						<ul class="mt-4 space-y-2">
							{#each m.points as point}
								<li class="flex gap-2">
									<span class="mt-2 size-2.5 shrink-0 border-2 border-ink bg-blue" aria-hidden="true"></span>
									<span>{point}</span>
								</li>
							{/each}
						</ul>
					</article>
				</li>
			{/each}
		</ul>
	</div>

	<!-- Estimasi domain & hosting -->
	<div class="neo-card mt-16 p-6" use:reveal>
		<h3 class="text-xl font-extrabold">{s.hostingTitle}</h3>
		<p class="mt-1 font-mono text-sm">{s.hostingNote}</p>
		<dl class="mt-4 divide-y-[3px] divide-ink border-y-[3px] border-ink">
			{#each s.hosting as row}
				<div class="grid gap-1 py-3 sm:grid-cols-[1fr_auto] sm:gap-6">
					<dt class="font-semibold">{row.label}</dt>
					<dd class="font-mono text-sm">{row.price}</dd>
				</div>
			{/each}
		</dl>
	</div>

	<!-- Layanan tambahan -->
	<div class="mt-16">
		<h3 class="text-2xl font-extrabold">{s.upsellTitle}</h3>
		<p class="mt-1 font-mono text-sm">{s.upsellNote}</p>
		<ul class="mt-6 grid gap-6 md:grid-cols-3">
			{#each upsellIds as id, i (id)}
				{@const u = s.upsell[id]}
				<li class="flex" use:reveal={i * 90}>
					<article class="neo-card flex w-full flex-col p-5">
						<h4 class="text-lg font-extrabold">{u.name}</h4>
						<p class="mt-2 flex-1 text-sm">{u.desc}</p>
						<a
							href={msg(i18n.t.waMessages.upsell, u.name)}
							class="neo-btn mt-4 self-start bg-bone"
							target="_blank"
							rel="noopener noreferrer"
							onclick={() => track('whatsapp_click', { source: `upsell:${id}` })}
						>
							{s.ask}
							<Icon name="external" size={18} />
						</a>
					</article>
				</li>
			{/each}
		</ul>
	</div>
</Section>
