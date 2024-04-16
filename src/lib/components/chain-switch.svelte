<script lang="ts">
	import { getContext } from 'svelte';
	import type { Chain } from '$lib/types';
	import { Chains } from '$lib/types';

	let chain = getContext('chain');

	console.log(chain);
	if (!chain) {
		console.error('Chain context not found');
	}

	const switchChain = () => {
		console.log('switching chain');
		// chain.update((currentChain: Chain) =>
		// 	currentChain === Chains.PENDULUM ? Chains.AMPLITUDE : Chains.PENDULUM
		// );
	};
</script>

<input class="toggle" />
<button on:click={switchChain} class="button">Switch Chain</button>
