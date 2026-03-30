<script lang="ts">
    import Button, { type ButtonPropsType } from './button.svelte';
    import Fa from 'svelte-fa';
    import { faDownload } from '@fortawesome/free-solid-svg-icons';

    interface DownloadIconPropsType extends ButtonPropsType {
        href: string, 
        className?: string
    }
    let props: DownloadIconPropsType = $props();
    let downloadLink: HTMLAnchorElement | null = null;
    const HandleButtonClick = () => {
        downloadLink?.click();
    }
</script>
                    <Button onclick={HandleButtonClick} className={props.className || ""} {...props}>
                        <Fa icon={faDownload} color="white"/>
                        <span class="space-infront">
                            {@render props.children?.()}
                        </span>
                    </Button>
                    <a id={`${props.id}-link`} bind:this={downloadLink} aria-label={`${props["aria-label"]}-link`} href={props.href || "#"} style="display: none;" download></a>
<style lang="scss"></style>
                
