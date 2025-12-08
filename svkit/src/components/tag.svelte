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
.tag {
    padding: 0.5rem;
    &-blue {
        color: theme-color("light-blue");
        border: 2px solid theme-color("light-blue");
        background-color: theme-color("dark-gray");
        &:hover {
            color: white;
            border: 2px solid theme-color("clear-blue");
            background-color: theme-color("clear-blue");
            box-shadow: 0 0px 10px theme-color("clear-blue");
        }
    }
    &-purple {
        color: theme-color("light-purple");
        border: 2px solid theme-color("light-purple");
        background-color: theme-color("dark-purple");
        &:hover {
            color: white;
            border: 2px solid theme-color("lighter-purple");
            background-color: theme-color("lighter-purple");
            box-shadow: 0 0px 10px theme-color("lighter-purple");
        }
    }
    &-p {
        line-height: 50px;
    }
}

</style>