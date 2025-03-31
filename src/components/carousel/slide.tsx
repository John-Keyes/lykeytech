import { ComponentProps, ReactElement, ReactNode, useEffect, useRef, useState } from 'react';
import Circle from './circle';

interface SlideProps extends ComponentProps<"div"> { 
    
}

const Slide = (props: SlideProps) => {
    const [carouselIndex, setCarouselIndex] = useState<number>(0);
    const [slideId, setSlideId] = useState<string>("carousel-circle-0");
    const carouselDiv = useRef<HTMLDivElement>(null);
    /*useEffect(() => {
        const carousel: HTMLDivElement | null = carouselDiv?.current;
        if(carousel) {
            carousel.style.backgroundImage = `url("${props.slides[props.selectedCarouselIndex].imageUrl}")`;
        }
    }, [props.selectedCarouselIndex]);*/

    return (
        <div {...props} className={`${props.className}`}>
        </div>
    );
}

export default Slide;