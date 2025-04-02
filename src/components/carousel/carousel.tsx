import { ComponentProps, ReactElement, ReactNode, useEffect, useRef, useState } from 'react';
import Circle from './circle';

interface CarouselProps extends ComponentProps<"div"> { 
    className?: string;
    slides: ReactNode[];
    selectedCarouselIndex: number;
};

const Carousel = (props: CarouselProps) => {
    const [slideId, setSlideId] = useState<string>("carousel-slide-0");

    return (
            <div {...props} className={`carousel-slides flex-row flex-center`}>
                {props.slides.map((slide, index) => (
                    <div id={`carousel-slide-${index}`} className="">{slide}</div>
                ))}
                <div className="flex flex-center carousel-circle">
                    {props.slides.map((element, index) => <Circle id={`carousel-circle-${index}`} index={index} className="text-light-gray" slideId={slideId} setSlideId={setSlideId}/>)}
                </div>
            </div>
    );
}

export default Carousel;