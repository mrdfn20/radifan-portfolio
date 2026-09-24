<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { onMount } from 'svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import ConsentBanner from '$lib/components/ConsentBanner.svelte';

	let { children } = $props();

	onMount(() => i18n.init());

	$effect(() => {
		document.documentElement.lang = i18n.locale;
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>{i18n.t.meta.title}</title>
	<meta name="description" content={i18n.t.meta.description} />
	<meta name="theme-color" content="#2f55ff" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={i18n.t.meta.title} />
	<meta property="og:description" content={i18n.t.meta.description} />
	<meta property="og:locale" content={i18n.locale === 'id' ? 'id_ID' : 'en_US'} />
	<meta name="twitter:card" content="summary" />
</svelte:head>

<a
	href="#main"
	class="neo-btn fixed top-2 left-2 z-[60] -translate-y-20 focus:translate-y-0"
>
	Skip to content
</a>

<div id="top"></div>
<Header />
<main id="main">
	{@render children()}
</main>
<Footer />
<ConsentBanner />
