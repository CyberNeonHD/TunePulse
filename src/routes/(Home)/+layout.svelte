<script>
	import '../../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar background="bg-primary-500">
			<svelte:fragment slot="lead">
				<strong class=" text-4xl pl-12 text-surface-500 animate-fade animate-delay-[1000ms]">TunePulse</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a class="font-semibold btn variant-filled animate-fade animate-delay-[1500ms]"
					href="#home"
					on:click|preventDefault={() => {
						const homeElement = document.getElementById('home');
						if (homeElement) {
							homeElement.scrollIntoView({ behavior: 'smooth' });
						}
					}}
				>
					Home
				</a>
				<a
					class="font-semibold btn variant-filled animate-fade animate-delay-[1800ms]"
					href="#features"
					on:click|preventDefault={() => {
						const featuresElement = document.getElementById('features');
						if (featuresElement) {
							featuresElement.scrollIntoView({ behavior: 'smooth' });
						}
					}}
				>
					Features
				</a>
				<a
					class="font-semibold btn variant-filled animate-fade animate-delay-[2100ms]"
					href="#roadmap"
					on:click|preventDefault={() => {
						const roadmapElement = document.getElementById('roadmap');
						if (roadmapElement) {
							roadmapElement.scrollIntoView({ behavior: 'smooth' });
						}
					}}
				>
					Roadmap
				</a>
				<a
					class="font-semibold btn variant-filled animate-fade animate-delay-[2500ms]"
					href="/pulseboard"
					rel="noreferrer"
				>
					Login
				</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<slot />
</AppShell>
