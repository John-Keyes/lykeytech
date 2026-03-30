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

<style lang="scss"></style>