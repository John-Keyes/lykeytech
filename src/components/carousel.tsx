import { ComponentProps, ReactElement, ReactNode, useEffect, useRef, useState } from 'react';
import Circle from './circle';

interface CarouselProps extends CarouselSlidesProps { 
    className?: string;
};

interface CarouselSlidesProps extends ComponentProps<"div"> { 
    slides: {imageUrl: string, dom: ReactNode}[];
    selectedCarouselIndex: number;
}

const Carousel = (props: CarouselProps) => {
    const [carouselIndex, setCarouselIndex] = useState<number>(0);
    const carouselDiv = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const carousel: HTMLDivElement | null = carouselDiv?.current;
        if(carousel) {
            carousel.style.backgroundImage = `url("${props.slides[props.selectedCarouselIndex].imageUrl}")`;
        }
    }, [props.selectedCarouselIndex]);

    /*const HandleCarouselIndexOperation = (value: number, operationCondition: boolean): void => {
        if(operationCondition) {
            setCarouselIndex(carouselIndex + value);
        }
    }

    const RemoveItem = (): void => {
        props.slides = props.slides.filter(item => props.slides[carouselIndex] != item);
    }*/

    return (
        <div {...props} className={`carousel ${props.className}`}>
            <div ref={carouselDiv} className="carousel-slides">
                {props.slides[props.selectedCarouselIndex].dom}
            </div>
            <div className="flex flex-column">
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
                <div className="flex flex-center carousel-slides">
                    <Circle id="circle-0" index={0} setCarouselIndex={setCarouselIndex} selectedCarouselIndex={carouselIndex} group="carousel" />
                    {props.slides.map((element, index) => <Circle id={`circle-${index}`} index={index} setCarouselIndex={setCarouselIndex} selectedCarouselIndex={carouselIndex} group="carousel" className="carousel-circle-space-infront"/>)}
                </div>
            </div>
        </div>
    );
}

export default Carousel;