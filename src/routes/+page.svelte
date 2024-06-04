<script>
	import { getContext } from 'svelte';
	import ChainSwitch from '../lib/components/chain-switch.svelte';

	const chainStore = getContext('chain');

	$: chain = $chainStore;
</script>

<ChainSwitch />
