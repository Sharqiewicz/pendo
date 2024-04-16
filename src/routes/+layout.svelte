<script>
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { Chains } from '$lib/types';

	const chain = writable(Chains.PENDULUM);
	setContext('chain', chain);
</script>

<main class="body background-gray">
	<slot />
</main>

<style global>
	@import '../../node_modules/ovzocss/index.min.css';
	:global(body) {
		margin: 0;
		padding: 0;
	}
</style>
