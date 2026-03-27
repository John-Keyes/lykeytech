<script lang="ts">
    import Header from '../components/nav/header.svelte';
    import Seo from '../components/seo.svelte';

	let { children } = $props();
</script>

<Seo/>

<main class="fit-width fit-height">
    <Header/>
	{@render children?.()}
</main>