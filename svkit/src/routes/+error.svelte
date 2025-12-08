<script lang="ts">
    import PageError from "src/components/pageError.svelte";
    import Loading from "src/components/layout/loading.svelte";
    import {page} from '$app/stores';
    //error.message = error?.message || "An unexpected error occurred.";
</script>

<div id="page-error-container" aria-label="Page Error Container" class="flex flex-center content-container">
    <PageError statusCode={page.status} details={page.message}/>
</div>
