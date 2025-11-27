<style lang="ts">
    //import type { HTMLH1Element } from 'svelte/elements';
    interface TitlePropsType extends ComponentProps<"h1"> { 
        text: string | Snippet;
        className?: string;
    }

    let props: TitlePropsType = $props();
</style>

        <h1 {...props} className={`flex cursor-pointer ${props.className}`} >
            <span id={`${props.id}-text`} className="title">{@render props.text()}</span>
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
