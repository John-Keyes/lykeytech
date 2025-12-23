<script lang="ts">
    import Header from 'src/components/nav/header.svelte';
    import Seo from '../components/seo.svelte';
    import '../styles/app.scss';

	let { children } = $props();
</script>

<Seo/>

<main class="fit-width fit-height">
    <Header/>
	{@render children?.()}
</main>




