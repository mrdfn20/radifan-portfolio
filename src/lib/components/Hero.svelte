<script lang="ts">
	import { i18n } from '$lib/i18n/index.svelte';
	import { waLink } from '$lib/config';
	import { track } from '$lib/analytics';
	import Icon from './Icon.svelte';

	const h = $derived(i18n.t.hero);
</script>

<section id="hero" class="overflow-x-clip border-b-[3px] border-ink bg-blue text-bone">
	<div class="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1.15fr_0.85fr]">
		<div>
			<p class="enter-left neo-tag mb-5" style="--d: 0ms">{h.eyebrow}</p>
			<h1 class="enter-left text-5xl leading-[1.05] font-extrabold tracking-tight sm:text-6xl lg:text-7xl" style="--d: 80ms">
				{h.headline}
			</h1>
			<p class="enter-left mt-6 max-w-xl text-lg" style="--d: 160ms">{h.sub}</p>

			<div class="enter-up mt-8 flex flex-wrap gap-4" style="--d: 420ms">
				<a
					href={waLink(i18n.t.waMessages.hero)}
					class="neo-btn"
					target="_blank"
					rel="noopener noreferrer"
					onclick={() => track('whatsapp_click', { source: 'hero' })}
				>
					<Icon name="whatsapp" />
					{h.ctaPrimary}
				</a>
				<a href="#projects" class="neo-btn bg-bone">
					{h.ctaSecondary}
					<Icon name="arrow" />
				</a>
			</div>

			<ul class="enter-up mt-8 flex flex-wrap gap-2" style="--d: 520ms">
				{#each h.trust as item}
					<li class="neo-border bg-bone px-3 py-1 text-sm font-semibold text-ink shadow-neo">{item}</li>
				{/each}
			</ul>
		</div>

		<!-- Ilustrasi dekoratif: jendela browser bergaya neobrutalism -->
		<div class="enter-right relative mx-auto w-full max-w-md" style="--d: 240ms" aria-hidden="true">
			<div class="neo-border bg-bone text-ink shadow-neo-lg">
				<div class="flex items-center gap-2 border-b-[3px] border-ink bg-accent px-3 py-2">
					<span class="size-3 rounded-full border-2 border-ink bg-accent-2"></span>
					<span class="size-3 rounded-full border-2 border-ink bg-bone"></span>
					<span class="size-3 rounded-full border-2 border-ink bg-blue"></span>
				</div>
				<div class="space-y-3 p-5">
					<div class="h-8 w-3/4 rounded-neo border-[3px] border-ink bg-blue"></div>
					<div class="h-3 w-full rounded-neo bg-ink/15"></div>
					<div class="h-3 w-5/6 rounded-neo bg-ink/15"></div>
					<div class="grid grid-cols-2 gap-3 pt-2">
						<div class="neo-border h-20 bg-accent-2"></div>
						<div class="neo-border h-20 bg-accent"></div>
					</div>
					<div class="neo-border h-10 w-32 bg-ink"></div>
				</div>
			</div>
			<span class="neo-tag absolute -top-4 -right-2 rotate-6 bg-accent text-sm shadow-neo">&lt;/&gt;</span>
			<span class="neo-tag absolute -bottom-4 -left-2 -rotate-3 bg-bone text-sm shadow-neo">SvelteKit</span>
		</div>
	</div>
</section>
