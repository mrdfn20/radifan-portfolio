<script lang="ts">
	import { onMount } from 'svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import { analyticsEnabled, getConsent, loadAnalytics, setConsent } from '$lib/analytics';

	let visible = $state(false);

	onMount(() => {
		if (!analyticsEnabled) return;
		const consent = getConsent();
		if (consent === 'granted') loadAnalytics();
		else if (consent === null) visible = true;
	});

	function choose(value: 'granted' | 'denied') {
		setConsent(value);
		visible = false;
	}
</script>

{#if visible}
	<div
		role="region"
		aria-label={i18n.t.consent.title}
		class="neo-card fixed inset-x-3 bottom-3 z-50 mx-auto flex max-w-2xl flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between"
	>
		<p class="text-sm"><strong>{i18n.t.consent.title}.</strong> {i18n.t.consent.text}</p>
		<div class="flex shrink-0 gap-2">
			<button type="button" class="neo-btn bg-bone" onclick={() => choose('denied')}>{i18n.t.consent.decline}</button>
			<button type="button" class="neo-btn" onclick={() => choose('granted')}>{i18n.t.consent.accept}</button>
		</div>
	</div>
{/if}
