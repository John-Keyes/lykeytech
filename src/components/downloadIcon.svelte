<script lang="ts">
    //import { type Snippet } from 'svelte';
    import Button, { type ButtonPropsType } from './button.svelte';

    interface DownloadIconPropsType extends ButtonPropsType {
        href: string, 
        className?: string
    }
    let props: DownloadIconPropsType = $props();
    const downloadLink = document.getElementById(`${props.id}-link`);
    const HandleButtonClick = () => {
        downloadLink?.click();
    }
</script>
                    <Button onclick={HandleButtonClick} className={props.className || ""} {...props}>
                        <span class="fa-solid fa-download"></span>
                        <span class="space-infront">
                            {@render props.children?.()}
                        </span>
                    </Button>
                    <a id={`${props.id}-link`} aria-label={`${props["aria-label"]}-link`} href={props.href || "#"} style="display: none;" download></a>
                
