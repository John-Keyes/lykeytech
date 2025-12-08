<script lang="ts">
    import type { HTMLAttributes } from 'svelte/elements';
    export interface CardPropsType extends HTMLAttributes<HTMLDivElement> {
        className?: string;
    }
    let props: CardPropsType = $props();
</script>


    <div class={`card ${props.className}`} {...props}>
        {@render props.children?.()}
    </div>

<style lang="scss">
    .card {
        padding: 0.75rem;
        &-purple {
            border-top: 5px solid theme-color("light-purple");
        }
        &-blue {
            border-top: 5px solid theme-color("light-blue");
            background-color: theme-color("dark-gray");
        }
        &-img-blur {
            filter: blur(2px);
        }
        &-divider {
            gap: 1rem;
        }
        &-space-above {
            margin-top: 4rem;
        }
    }
</style>