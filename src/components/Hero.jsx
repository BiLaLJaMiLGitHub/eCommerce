import React, {useEffect, useState} from 'react';
import banner_image from '../assets/img/hero/banner.jpg';
import {categories} from '../utils/database';
import Hero_Slider from "./Hero_Slider";

const Hero = () => {
    const [hideCatList, setHideCatList] = useState(false)

    return <section className="hero">
        <div className="container">
            <div className="row">
               {/* <div className="col-lg-3">
                    <div className={`hero__categories ${hideCatList ? 'show' : ''}`}>
                        <div className="hero__categories__all" onClick={() => setHideCatList(!hideCatList)}>
                            <i className="fa fa-bars"></i>
                            <span>All Categories</span>
                        </div>
                        <ul>
                            {categories && categories.map(({code, name}) => {
                                return <li key={code}><a href="#"> {name} </a></li>
                            })}
                        </ul>
                    </div>
                </div>*/}
                <div className="col-lg-9">
                    <Hero_Slider/>
                    {/*<div className="hero__item set-bg" data-setbg={banner_image}>*/}
                    {/*    <div className="hero__text">*/}
                    {/*        <span>All Brand's Tools</span>*/}
                    {/*        <h2>Tools <br/>100% Original</h2>*/}
                    {/*        <p>Free Delivery Available</p>*/}
                    {/*        <a href="#" className="primary-btn">SHOP NOW</a>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    </section>
}
export default Hero;