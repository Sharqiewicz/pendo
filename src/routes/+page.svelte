<script>
	import { getContext } from 'svelte';
	import ChainSwitch from '../lib/components/chain-switch.svelte';

	// Retrieve the store from the context
	const chainStore = getContext('chain');

	// Directly subscribe using the $ syntax for automatic reactivity
	$: chain = $chainStore;
</script>

<h1>Current chain: {chain}</h1>
<ChainSwitch />
