<script lang="ts">
    import Button, { ButtonPropsType } from './button';

    interface DownloadIconPropsType extends ButtonPropsType {
        href?: Url, 
        className?: string,
        trigger: Snippet,
        body: Snippet
    }
    let props: DownloadIconPropsType = $props();
    const downloadLink = useRef<HTMLAnchorElement>(null);
    const HandleButtonClick = () => {
        downloadLink?.current?.click();
    }
</script>
                    <Button onClick={HandleButtonClick} className={props.className || ""} {...props}>
                        <span class="fa-solid fa-download"></span>
                        <span class="space-infront">
                            {@render props.children()}
                        </span>
                    </Button>
                    <a ref={downloadLink} href={props.href || "#"} style={{display: "none"}} download></a>
                
