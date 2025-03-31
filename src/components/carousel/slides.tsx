import { ComponentProps, ReactElement, ReactNode, useEffect, useRef, useState } from 'react';
import Circle from './circle';

interface CarouselProps extends ComponentProps<"div"> { 
    className?: string;
    slides: ReactNode[];
    selectedCarouselIndex: number;
};

const Slides = (props: CarouselProps) => {
    const [carouselIndex, setCarouselIndex] = useState<number>(0);
    const [slideId, setSlideId] = useState<string>("carousel-slide-0");
    const carouselDiv = useRef<HTMLDivElement>(null);
    /*useEffect(() => {
        const carousel: HTMLDivElement | null = carouselDiv?.current;
        if(carousel) {
            carousel.style.backgroundImage = `url("${props.slides[props.selectedCarouselIndex].imageUrl}")`;
        }
    }, [props.selectedCarouselIndex]);*/

    return (
        <div {...props} className={`carousel flex flex-column ${props.className}`}>
            <div ref={carouselDiv} className="carousel-slides flex-row flex-center">
                {props.slides.map((slide, index) => (
                    <div id={`carousel-slide-${index}`}>{slide}</div>
                ))}
            </div>
            {/*<div className="flex flex-column">*/}
                {/*<Button onClick={() => RemoveItem()}>
                        <span className="fa-solid fa-x"/>
                    </Button>*/}
                {/*<div className="flex-row carousel-arrows">
                    <Button onClick={() => HandleCarouselIndexOperation(-1, carouselIndex > 0)}>
                        <span className="fa-solid fa-chevron-left"/>
                    </Button>
                    <Button onClick={() => HandleCarouselIndexOperation(1, carouselIndex < (props.slides.length - 1))}>
                        <span className="fa-solid fa-chevron-right"/>
                    </Button>
                </div>*/}
                <div className="flex flex-center">
                    <Circle id="carousel-circle-0" index={0} slideId={slideId} setSlideId={setSlideId}/>
                    {props.slides.map((element, index) => <Circle id={`carousel-circle-${index}`} index={index} slideId={slideId} setSlideId={setSlideId} className="carousel-circle-space-infront"/>)}
                </div>
            {/*</div>*/}
        </div>
    );
}

export default Slides;