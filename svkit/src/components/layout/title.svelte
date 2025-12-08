<script lang="ts">
    import type { HTMLAttributes } from 'svelte/elements';
    import type { Snippet } from 'svelte';

    interface TitlePropsType extends HTMLAttributes<HTMLHeadingElement> { 
        text: Snippet;
        className?: string;
    }

    let props: TitlePropsType = $props();
</script>

<h1 {...props} class={`flex cursor-pointer ${props.className}`} >
    <span id={`${props.id}-text`} class="title">{@render props.text()}</span>
</h1>

<style lang="scss">
    .title {
        font-size: 4rem; 
        font-weight: 750;
        text-align: center;
        &-icon {
            visibility: hidden;
            &:hover {
                visibility: visible;
            }
        }
    }
</style>
