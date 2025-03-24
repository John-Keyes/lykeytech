import {ComponentProps, useEffect, useRef} from 'react';


interface CircleProps extends ComponentProps<"div"> {
    className?: string;
    index: number;
    selectedCarouselIndex: number;
    group: string;
    setCarouselIndex: React.Dispatch<React.SetStateAction<number>>;
}

const Circle = ({className, index, setCarouselIndex, selectedCarouselIndex, group, ...props}: CircleProps) => {
    const radioInput = useRef<HTMLInputElement>(null);
    const circleSpan = useRef<HTMLSpanElement>(null);
    useEffect(() => {
        const radio: HTMLInputElement | null = radioInput.current;
        const circle: HTMLSpanElement | null = circleSpan.current;
        if(radio && circle) {
            circle.style.color = radio.checked ? "#FFFFFF" : "#444444";
        }
    }, [selectedCarouselIndex]);
    return (
        <>
            <span ref={circleSpan} {...props} className={`fa-solid fa-circle fa-2xs ${className}`} onClick={() => setCarouselIndex(index)}/>
            <input ref={radioInput} type="radio" id={`${props.id}-radio`} style={{display: "none"}} name={group} readOnly checked={index === selectedCarouselIndex}/>
        </>
    );
}

export default Circle;