<script lang="ts">
    import {ComponentProps} from 'react';

    export interface CardPropsType extends ComponentProps<"div"> {
        className?: string;
    }
    const props: CardPropsType = $props();
</script>


    <div class={`card ${className}`} {...props}>
        {@render props.children()}
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