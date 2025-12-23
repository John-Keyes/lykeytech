<script lang="ts">
    import Header from '../components/nav/header.svelte';
    import Seo from '../components/seo.svelte';
    //import '../lib/styles/app.scss';

	let { children } = $props();
</script>

<Seo/>

<main class="fit-width fit-height">
    <Header/>
	{@render children?.()}
</main>




