<script lang="ts">
    import { onMount } from 'svelte';
    import Header from '../components/nav/header.svelte';
    import Seo from '../components/seo.svelte';
    import Loading from '../components/layout/loading.svelte';

	let { children } = $props();
    let loading = $state(true);

    onMount(() => {
        loading = false;
    })
</script>

<Seo/>

{#if loading}
    <Loading/>
{:else}
    <main class="fit-width fit-height">
        <Header/>
        {@render children?.()}
    </main>
{/if}