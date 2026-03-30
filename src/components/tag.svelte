<script lang="ts">
    import Button from './button.svelte';
    import ButtonPropsType from "./button.svelte";

    interface TagPropsType extends ButtonPropsType {
        id: string,
        "aria-label": string,
        href: string,
        text: string, 
        className?: string
    }
    let props: TagPropsType = $props();
</script>


    <Button className={`tag rounded-md transition-fast ${props.className}`} {...props} id={`${props.id}-button`} aria-label={`${props["aria-label"]}-button`}>
        <span class="text-inherit">&#183; <a id={`${props.id}-link`} aria-label={`${props["aria-label"]} Link`} title={`${props["aria-label"]} Link`} class="text-inherit" target="_blank" rel="noopener noreferrer" href={props.href}>{props.text}</a> &#183;</span>
    </Button>
<style lang="scss">
    </style>