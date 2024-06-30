<script>
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { logout } from './pulseboard/spotify-api-handler';
</script>

<AppShell>
	<svelte:fragment slot="header">
		<section id="header" class="bg-black fixed z-50 left-0 top-0 w-full">
			<div class="flex items-center justify-between w-full max-w-screen-xl mx-auto p-4">
			  <div class="flex items-center">
				<h2 class="text-4xl text-white animate-fade animate-delay-[500ms]">Tune<span style="color: rgb(20, 220, 80);">Pulse</span></h2>
				<h3 class="text-xl text-green-500 animate-fade animate-delay-[600ms]">V2 (Beta)</h3>
			  </div>
			  <div id="logout" class="bg-green-500 rounded-md p-2 transition duration-500 hover:bg-red-500 hover:cursor-pointer animate-fade animate-delay-[700ms]">
				<a class="text-white text-lg font-semibold hover:cursor-pointer" href="/" rel="noreferrer" on:click={logout}>
				  Log out
				</a>
			  </div>
			</div>
		</section>
	</svelte:fragment>
	<div class="pt-16 pb-16"> <!-- Add padding to avoid overlap with fixed header and footer -->
		<slot />
	</div>
	<svelte:fragment slot="footer">
		<!-- Footer Section -->
		<section id="footer" class="inset-x-0 bottom-0 z-50">
		  <div class="flex items-center justify-center p-4">
			<div class="brand">
			  <h4 class="text-3xl text-white">Tune<span style="color: rgb(20, 220, 80);">Pulse</span></h4>
			</div>
		  </div>
		</section>
	</svelte:fragment>
</AppShell>
