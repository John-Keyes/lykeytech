import React, { ReactNode, useState } from 'react';
import Card, { CardPropsType } from '../card';

interface SamplePropsType extends CardPropsType {
    cardMedia: ReactNode;
    sampleTitle: ReactNode;
    flexDesktopDirection: "row" | "reverse";
}

const Sample = (props: SamplePropsType) => {

    const textAlign : "text-end" | "text-start" = props.flexDesktopDirection == "row" ? "text-end" : "text-start";
    return (
    <>
        <Card className={`sample-desktop flex-center fit-width sample-${props.flexDesktopDirection} ${props.className}`} id={`${props.id}-desktop`} aria-label={`${props["aria-label"]}-desktop`}>
            <span className="sample-padding">
                {props.cardMedia}
            </span>
            <div className={`space-above flex flex-column text-end width-half sample-padding`}>
                <span className={textAlign}>
                    {props.sampleTitle}
                    {props.children}
                </span>
            </div>
        </Card>
        <Card className={`sample-mobile flex-center fit-width ${props.className}`} id={`${props.id}-mobile`} aria-label={`${props["aria-label"]}-mobile`}>
            <div className="space-above flex flex-column text-center fit-width sample-padding">
                {props.sampleTitle}
                {props.cardMedia}
                {props.children}
            </div>
        </Card>
    </>
    );
};

export default Sample;