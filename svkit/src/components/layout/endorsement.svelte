<script lang="ts">
    import { HTMLAttributes } from 'svelte/elements';
    import Card from '../card.svelte';
    interface EndorsementPropsType extends HTMLAttributes<HTMLDivElement> {
        person: string;
        personLink: string;
        text: string;
        hoverColor: string;
        className?: string;
    }
    let props: EndorsementPropsType = $props();
</script>

    
                    <Card {...props} className={`endorsement ${props.class || ""}`}>
                        <h3 id={`${props.id}-author`} aria-label={`${props["aria-label"]}-author`}>
                            <a id={`${props.id}-author-link`} aria-label={`${props["aria-label"]} Author Link`} title={`${props["aria-label"]} Author Link`} href={props.personLink} class={`text-hover-${props.hoverColor}`} target="_blank" rel="noopener noreferrer">{props.person}</a>
                        </h3>
                        <p id={`${props.id}-message`} aria-label={`${props["aria-label"]}-message`} class="p fit-width">&quot;{props.text}&quot;</p>
                    </Card>
            

<style lang="scss">
    .endorsement {
        width: 100%;
        @media screen and (min-width: device-max("md")) {
            width: 50%;
        }
    }
</style>