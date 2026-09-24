<script lang="ts">
	import { i18n } from '$lib/i18n/index.svelte';

	const links = ['about', 'skills', 'projects', 'services', 'process', 'faq', 'contact'] as const;
	let open = $state(false);
</script>

<header class="sticky top-0 z-50 border-b-[3px] border-ink bg-accent text-ink">
	<div class="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
		<a href="#top" class="inline-flex min-h-11 items-center text-xl font-extrabold tracking-tight">{i18n.t.brand}<span class="text-blue">.</span></a>

		<nav class="hidden items-center gap-1 text-sm font-semibold lg:flex" aria-label="Utama">
			{#each links as key}
				<a href="#{key}" class="inline-flex min-h-11 items-center px-2.5 underline-offset-4 hover:underline">{i18n.t.nav[key]}</a>
			{/each}
		</nav>

		<div class="flex items-center gap-2">
			<div class="neo-border flex overflow-hidden bg-bone font-mono text-sm font-semibold" role="group" aria-label="Bahasa / Language">
				{#each ['id', 'en'] as const as code}
					<button
						type="button"
						class="min-h-10 min-w-11 cursor-pointer px-3 uppercase {i18n.locale === code ? 'bg-ink text-bone' : 'hover:bg-accent-2'}"
						aria-pressed={i18n.locale === code}
						onclick={() => i18n.set(code)}
					>
						{code}
					</button>
				{/each}
			</div>
			<button
				type="button"
				class="neo-border grid min-h-11 min-w-11 cursor-pointer place-items-center bg-bone lg:hidden"
				aria-expanded={open}
				aria-controls="mobile-nav"
				aria-label="Menu"
				onclick={() => (open = !open)}
			>
				<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" aria-hidden="true">
					{#if open}
						<path d="M5 5l14 14M19 5L5 19" />
					{:else}
						<path d="M4 7h16M4 12h16M4 17h16" />
					{/if}
				</svg>
			</button>
		</div>
	</div>

	{#if open}
		<nav id="mobile-nav" class="border-t-[3px] border-ink bg-bone lg:hidden" aria-label="Utama">
			<ul class="mx-auto flex max-w-6xl flex-col px-4 py-2 sm:px-6">
				{#each links as key}
					<li>
						<a href="#{key}" class="block min-h-11 py-3 font-semibold" onclick={() => (open = false)}>{i18n.t.nav[key]}</a>
					</li>
				{/each}
			</ul>
		</nav>
	{/if}
</header>
