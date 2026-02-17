<script lang="ts">
    import type { HTMLAttributes } from 'svelte/elements';
    import Fa from 'svelte-fa';
    import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
    let props: HTMLAttributes<HTMLDivElement> = $props();

        
    const loadingArrow = "font-size: 5rem;";
</script>


    <div {...props} id="loading-container" aria-label="Loading Container" class="flex flex-center fit-width loading">
        <Fa icon={faChevronRight} id="loading-arrow-0" color="var(--lighter-purple)" size="5x" style={loadingArrow}/>
        <Fa icon={faChevronRight} id="loading-arrow-1" color="var(--lighter-purple)" size="5x" style={loadingArrow}/>
        <Fa icon={faChevronRight} id="loading-arrow-2" color="var(--lighter-purple)" size="5x" style={loadingArrow}/>
        <Fa icon={faChevronRight} id="loading-arrow-3" color="var(--lighter-purple)" size="5x" style={loadingArrow}/>
    </div>


<style lang="scss">
    .loading {
        margin-top: 300px;
        &-arrow {
            font-size: 5rem;
        }
    }
</style>