import React, { useState, useEffect } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
} from 'reactstrap';
import axios from 'axios';

export default function Slider() {
    const [items, setItems] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    useEffect(() => {
        // Memuat data slider dari API
        const fetchData = async () => {
            try {
                const response = await axios.get("https://fakestoreapi.com/products");
                // Mengambil data produk dari respons API
                const products = response.data;
                // Membuat item slider dari data produk
                const sliderItems = products.map((product, index) => ({
                    id: index,
                    altText: product.title,
                    caption: product.title,
                    imageUrl: product.image
                }));
                setItems(sliderItems);
            } catch (error) {
                console.error("Error fetching slider items:", error);
            }
        };

        fetchData();
    }, []);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = items.map((item) => {
        return (
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
        );
    });

    return (
        <div>
            <style>
                {`.custom-tag {
                  max-width: 100%;
                  height: 500px;
                  background: black;
                }`}
            </style>
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
        </div>
    );
}
