<script lang="ts">
	import { getContext } from 'svelte';
	import { Chains } from '$lib/types';
	import type { Writable } from 'svelte/store';
	import { capitalize } from 'lodash';

	let chain: Writable<Chains> = getContext('chain');

	const switchChain = () => {
		chain.update((currentChain: Chains) =>
			currentChain === Chains.PENDULUM ? Chains.AMPLITUDE : Chains.PENDULUM
		);
	};

	let chainValue: string;

	chain.subscribe((value) => {
		chainValue = capitalize(value);
	});
</script>

<div>
	<button on:click={switchChain}>{chainValue}</button>
	<ul>
		<li><a href="/pendulum">Pendulum</a></li>
		<li><a href="/amplitude">Amplitude</a></li>
	</ul>
</div>

<style>
	div {
		background: var(--color-dark-gray);
		cursor: pointer;
		padding: 0.5rem 2.5rem;
		width: fit-content;
	}

	button {
		background: transparent;
		border: none;
		cursor: pointer;
	}

	div:hover ul {
		display: flex;
		justify-content: center;
		flex-direction: column;
	}

	ul {
		display: none;
		list-style-type: none;
		padding: 0;
		margin: 0;
	}

	li {
		padding: 0;
		margin: 0;
	}

	a {
		text-decoration: none;
		color: var(--color-primary);
	}

	a:hover {
		text-decoration: underline;
	}
</style>
