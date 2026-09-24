<script lang="ts">
	import { i18n } from '$lib/i18n/index.svelte';
	import { contact, waLink } from '$lib/config';
	import Section from './Section.svelte';
	import Icon from './Icon.svelte';

	const c = $derived(i18n.t.contact);

	const channels = $derived([
		{ icon: 'mail', label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
		{ icon: 'github', label: 'GitHub', value: 'mrdfn20', href: contact.github },
		{ icon: 'linkedin', label: 'LinkedIn', value: 'mradifanazman', href: contact.linkedin },
		{ icon: 'instagram', label: 'Instagram', value: '@radifanazman', href: contact.instagram }
	] as const);
</script>

<Section id="contact" tone="bone" title={i18n.t.sections.contact}>
	<div class="grid gap-10 lg:grid-cols-[1fr_1fr]">
		<div>
			<p class="max-w-md text-lg">{c.lead}</p>
			<a
				href={waLink(i18n.t.waMessages.contact)}
				class="neo-btn mt-6 !px-6 !py-3 text-lg"
				target="_blank"
				rel="noopener noreferrer"
			>
				<Icon name="whatsapp" />
				{c.cta}
			</a>
			<p class="mt-3 font-mono text-sm">WhatsApp {contact.phoneDisplay}</p>
		</div>

		<ul class="grid gap-4 sm:grid-cols-2">
			{#each channels as ch}
				<li>
					<a
						href={ch.href}
						class="neo-card flex min-h-11 items-center gap-3 p-4 transition-[transform,box-shadow] duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_var(--color-ink)]"
						target={ch.href.startsWith('mailto:') ? undefined : '_blank'}
						rel={ch.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
					>
						<Icon name={ch.icon} />
						<span class="min-w-0">
							<span class="block text-sm font-semibold">{ch.label}</span>
							<span class="block truncate font-mono text-sm">{ch.value}</span>
						</span>
					</a>
				</li>
			{/each}
		</ul>
	</div>
</Section>
