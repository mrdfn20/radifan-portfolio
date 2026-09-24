<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { onMount } from 'svelte';
	import { i18n } from '$lib/i18n/index.svelte';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();

	onMount(() => i18n.init());

	$effect(() => {
		document.documentElement.lang = i18n.locale;
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Muhamad Radifan Azman — Web Developer</title>
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
