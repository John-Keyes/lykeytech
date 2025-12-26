<script lang="ts">
    import type { HTMLAttributes } from 'svelte/elements';
    let props: HTMLAttributes<HTMLDivElement> = $props();
</script>


    <div {...props} id="loading-container" aria-label="Loading Container" class="flex flex-center fit-width loading">
        <span id="loading-arrow-0" aria-label="Loading Arrow 0" class="fa-duotone fa-solid fa-chevron-right fa-beat-fade loading-arrow text-lighter-purple"></span>
        <span id="loading-arrow-1" aria-label="Loading Arrow 1" class="fa-duotone fa-solid fa-chevron-right fa-beat-fade loading-arrow text-lighter-purple"></span>
        <span id="loading-arrow-2" aria-label="Loading Arrow 2" class="fa-duotone fa-solid fa-chevron-right fa-beat-fade loading-arrow text-lighter-purple"></span>
        <span id="loading-arrow-3" aria-label="Loading Arrow 3" class="fa-duotone fa-solid fa-chevron-right fa-beat-fade loading-arrow text-lighter-purple"></span>
    </div>


<style lang="scss">
    .loading {
        margin-top: 300px;
        &-arrow {
            font-size: 5rem;
        }
    }
</style>