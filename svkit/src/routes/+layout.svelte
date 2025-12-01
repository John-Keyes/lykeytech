<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
    import Seo from '../components/seo.svelte';

	let { children } = $props();
</script>

<Seo/>

{@render children?.()}




