import React, {useEffect, useState} from 'react';
import './Hero_Slider.css';
import {slider_images} from './database';

const Hero_Slider = () => {
    const [slideimage, setSlideImage] = useState(slider_images[0]);
    const [imagecounter, setImageCounter] = useState(1)

    useEffect(() => {
        start_Slider();
    }, []);

    const start_Slider = () => {
        setInterval(() => {
            console.log('Slider image change', imagecounter);
            setSlideImage(slider_images[imagecounter]);
            if (imagecounter + 1 === slider_images.length)
               return setImageCounter(0)
            setImageCounter(imagecounter + 1);
        }, '1000')
    }

    return (
        <div className="slider-wrapper">
            <div className="slides">
                <img src={slideimage} alt={`slider image`}/>
                {/*<img src={slideimage} alt={`slider image`}/>*/}
                {/*{
                        slider_images.map((slide, index) => {
                            console.log("slide image: ", slide);
                            return <img src={slide} alt={`slider image ${index + 1}`}/>
                        })
                    }*/}
            </div>
        </div>
    );
}

export default Hero_Slider;