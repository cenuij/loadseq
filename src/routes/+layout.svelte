<script lang="ts">
	import '../reset.css';
	import { page } from '$app/stores';
</script>

<ul>
	<li class:active={$page.url.pathname === '/'}>
		<a href="/">/</a>
	</li>
	<li class:active={$page.url.pathname === '/a'}>
		<a href="/a">a</a>
	</li>
	<li class:active={$page.url.pathname === '/a/b'}>
		<a href="/a/b">b</a>
	</li>
	<li class:active={$page.url.pathname === '/a/b/c'}>
		<a href="/a/b/c">c</a>
	</li>
</ul>

<hr />

<slot />

<style>
	ul {
		display: flex;
		list-style: none;
		gap: 1em;
	}
	.active {
		font-weight: bold;
		text-decoration: underline;
	}
	a {
		text-decoration: none;
	}
</style>
