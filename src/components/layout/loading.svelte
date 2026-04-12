<script lang="ts">
    import type { HTMLAttributes } from 'svelte/elements';

    let props: HTMLAttributes<HTMLSpanElement> = $props();
</script>


    <span {...props} id="loading-container" aria-label="Loading Container" class="loading"> 
    </span>


<style lang="scss">
    .loading {
        margin-top: 300px;
        height: 50px;
        width: 50px;
        border: 5px solid var(--light-purple);
        border-bottom-color: var(--lighter-purple);
        border-radius: 50%;
        display: flex;
        align-self: center;
        justify-self:center;
        animation: rotation 1s linear infinite;
        @keyframes rotation {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
    }
</style>