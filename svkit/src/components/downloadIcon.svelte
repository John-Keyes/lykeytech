<script lang="ts">
    import Link from 'next/link';
    import React, { ReactNode, useRef } from 'react';
    import Button, { ButtonPropsType } from './button';
    import { Url } from 'next/dist/shared/lib/router/router';

    interface DownloadIconPropsType extends ButtonPropsType {
        href?: Url, 
        className?: string,
        trigger: Snippet,
        body: Snippet
    }
    const props: DownloadIconPropsType = $props();
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
                    <Link ref={downloadLink} href={props.href || "#"} style={{display: "none"}} download/>
                
