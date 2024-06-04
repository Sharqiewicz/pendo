<script>
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { Chains } from '$lib/types';

	const chain = writable(Chains.PENDULUM);
	setContext('chain', chain);
</script>

<main class="body background-dark-yellow p-5">
	<nav>
		<div>
			<h1>Pendo</h1>
			<p>Pendulum and Amplitude referendum monitoring</p>
		</div>
	</nav>
	<slot />
	<footer class="mt-5">
		<a
			href="https://szarkiewicz.com"
			target="_blank"
			rel="noreferrer"
			class="flex justify-center align-center"
		>
			<img src="logos/sharqi.svg" alt="Kacper Szarkiewicz logo" width={50} height={50} />
			<p>Implemented by Kacper Szarkiewicz</p>
		</a>
	</footer>
</main>
