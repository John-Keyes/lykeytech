import {ComponentProps, useEffect, useRef} from 'react';

interface CircleProps extends ComponentProps<"div"> {
    className?: string;
    index: number;
    slideId: string;
    setSlideId: React.Dispatch<React.SetStateAction<string>>;
}

const Circle = ({className, index, setSlideId, slideId, ...props}: CircleProps) => {
    const radioInput = useRef<HTMLAnchorElement>(null);
    const circleSpan = useRef<HTMLSpanElement>(null);
    const slideIndex = `carousel-slide-${index}`;
    useEffect(() => {
        const radio: HTMLAnchorElement | null = radioInput.current;
        const circle: HTMLSpanElement | null = circleSpan.current;
        if(radio && circle) {
            circle.style.color = slideIndex === slideId ? "#FFFFFF" : "#444444";
        }
    }, [slideId]);
    return (
        <>
            <span ref={circleSpan} {...props} className={`fa-solid fa-circle fa-2xs ${className}`} onClick={() => setSlideId(`carousel-slide-${index}`)}/>
            <a ref={radioInput} href={`carousel-slide-${index}`} style={{display: "none"}}/>
        </>
    );
}

export default Circle;