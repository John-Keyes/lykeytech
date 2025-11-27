<script lang="ts">

    interface SubTitlePropsType extends ComponentProps<"h2"> { 
        text: string | Snippet, 
        className?: string,
        sectionclassname?: string,
        body: Snippet,
    }
    let props: SubTitlePropsType = $props();
    

</script>
            <h2 {...props} class={`flex cursor-pointer ${props.className || ""}`}>
                <span id={`${props.id}-text`} class="sub-title text-hover-inherit text-align-inherit">{@render props.text()}</span>
            </h2>
            {#if props.body}
                <section id={`${props.id}-section-body`} aria-label={`${props["aria-label"]}-section-body`} class={props.sectionclassname || ""}>
                    {@render props.body()}
                </section>
            {/if}

<style lang="scss">
    .sub-title {
        font-size: 2.5rem;
        font-weight: 700;
        overflow: auto;
        &-link-align {
            padding-top: 15px;
        }
        &-icon {
            visibility: hidden;
            &:hover {
            visibility: visible;
            }
        }
    }
</style>