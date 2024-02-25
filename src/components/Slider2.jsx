import React, { useState, useEffect } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
} from 'reactstrap';
import axios from 'axios';

export default function Slider2() {
    const [items, setItems] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://dummyjson.com/products");
                const productsData = response.data;
                
                // Check if productsData has the expected structure
                if (Array.isArray(productsData.products)) {
                    const sliderItems = productsData.products.map((product, index) => ({
                        id: index,
                        altText: product.description,
                        caption: product.description,
                        imageUrl: product.thumbnail
                    }));
                    setItems(sliderItems);
                } else {
                    setError("Error fetching slider items: Invalid data format");
                }
            } catch (error) {
                setError("Error fetching slider items: " + error.message);
            }
        };
        
    
        fetchData();
    }, []);    

    const next = () => {
        if (animating) return;
        const nextIndex = (activeIndex + 1) % items.length;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = (activeIndex - 1 + items.length) % items.length;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = items.map((item) => (
        <CarouselItem
            className="custom-tag slider"
            tag="div"
            key={item.id}
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
        >
            <img src={item.imageUrl} alt={item.altText} className='slider-img' />
            <CarouselCaption
                className="text-light"
                captionText={item.caption}
                captionHeader={item.caption}
            />
        </CarouselItem>
    ));

    return (
        <div>
            <style>
                {`.custom-tag {
                    max-width: 100%;
                    height: 500px;
                    background: black;
                }`}
            </style>
            {error && <div>Error: {error}</div>}
            {!error && (
                <Carousel activeIndex={activeIndex} next={next} previous={previous}>
                    <CarouselIndicators
                        items={items}
                        activeIndex={activeIndex}
                        onClickHandler={goToIndex}
                    />
                    {slides}
                    <CarouselControl
                        direction="prev"
                        directionText="Previous"
                        onClickHandler={previous}
                    />
                    <CarouselControl
                        direction="next"
                        directionText="Next"
                        onClickHandler={next}
                    />
                </Carousel>
            )}
        </div>
    );
}
