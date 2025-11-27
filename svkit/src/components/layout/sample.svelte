<script lang="ts">
    import Card, { CardPropsType } from '../card';

    interface SamplePropsType extends CardPropsType {
        cardMedia: ReactNode;
        sampleTitle: ReactNode;
        flexDesktopDirection: "row" | "reverse";
    }
    let props: ButtonTypeProps = $props();

    const textAlign : "text-end" | "text-start" = props.flexDesktopDirection == "row" ? "text-end" : "text-start";
</script>

        <Card className={`sample-desktop flex-center fit-width sample-${props.flexDesktopDirection} ${props.className}`} id={`${props.id}-desktop`} aria-label={`${props["aria-label"]}-desktop`}>
            <span class="sample-padding">
                {props.cardMedia}
            </span>
            <div class="space-above flex flex-column text-end width-half sample-padding">
                <span class={textAlign}>
                    {props.sampleTitle}
                    {props.children}
                </span>
            </div>
        </Card>
        <Card className={`sample-mobile flex-center fit-width ${props.className}`} id={`${props.id}-mobile`} aria-label={`${props["aria-label"]}-mobile`}>
            <div class="space-above flex flex-column text-center fit-width sample-padding">
                {props.sampleTitle}
                {props.cardMedia}
                {props.children}
            </div>
        </Card>

<style lang="scss">
    .sample {
        &-mobile {
            display: none;
            flex-direction: column;
            justify-content: space-evenly;
            @media screen and (max-width: device-max("sm")) {
                display: flex;
            }
        }
        &-desktop {
            display: flex;
            justify-content: space-between;
            @media screen and (max-width: device-max("sm")) {
                display: none;
            }
        }
        &-row {
            flex-direction: row;
        }
        &-reverse {
            flex-direction: row-reverse;
        }
        &-padding {
            padding: 0.5rem;
        }
    }
</style>