import React, { ReactNode } from 'react';
import Card, { CardPropsType } from '../card';

interface SamplePropsType extends CardPropsType {
    cardMedia: ReactNode;
    sampleTitle: ReactNode;
    flexDesktopDirection: "row" | "reverse";
}

const Sample = (props: SamplePropsType) => (
    <>
        <Card className={`flex flex-center fit-width sample-desktop sample-flex-${props.flexDesktopDirection || "row"} ${props.className}`}>
            {props.cardMedia}
            <div className="space-above flex flex-column text-end width-half">
                {props.sampleTitle}
                {props.children}
            </div>
        </Card>
        <Card className={`flex flex-center fit-width sample-mobile ${props.className}`}>
            <div className="space-above flex flex-column text-center fit-width">
                {props.sampleTitle}
                {props.cardMedia}
                {props.children}
            </div>
        </Card>
    </>
);

export default Sample;