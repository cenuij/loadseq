<script lang="ts">
	export let data: Record<string, [number, number]>;

	const t0 = Object.values(data).reduce((min, [start]) => Math.min(min, start), Infinity);
	const sorted = Object.entries(data).sort(([a], [b]) => a.localeCompare(b));
</script>

<ul>
	{#each sorted as [name, [start, end]]}
		<li style="--start: {start - t0}px; --width: {end - start}px;">{name}</li>
	{/each}
</ul>

<style>
	ul {
		font-family: monospace;
		font-size: small;
		list-style-type: none;
	}

	li {
		position: relative;

		margin: 0.5rem;
		padding: 0.5rem;
		white-space: nowrap;

		background-color: salmon;

		left: var(--start);
		width: var(--width);
	}
</style>
