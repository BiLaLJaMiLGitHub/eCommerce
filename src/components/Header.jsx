import React from 'react';
import lang_image from '../assets/img/language.png'
import logo_image from '../assets/img/logo.png'

const Header = () => {
    return <header className="header">
        <div className="header__top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="header__top__left">
                            <ul>
                                <li><i className="fa fa-envelope"></i> Sales@jamalbazar.com</li>
                                <li>Free Shipping for all Order of 5000</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="header__top__right">
                            <div className="header__top__right__social">
                                <a href="#">FaceBook</a>
                                <a href="#">Twitter</a>
                                <a href="#">Linkedin</a>
                                <a href="#">Pinterest</a>
                            </div>
                            <div className="header__top__right__language">
                                <img src={lang_image} alt="" />
                                    <div>English</div>
                                    <span className="arrow_carrot-down"></span>
                                    <ul>
                                        <li><a href="#">Spanis</a></li>
                                        <li><a href="#">English</a></li>
                                    </ul>
                            </div>
                            <div className="header__top__right__auth">
                                <a href="#"><i className="fa fa-user"></i> Login</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="header_logo">
                        <span>JAMAL BAZAR</span>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="header_search">
                        <div className="header_search_components">
                                <input type="text" placeholder="What do yo u need?" />
                                <button>Search</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="header__cart">
                        <ul>
                            <li><a href="#"><i className="fa fa-heart"></i> <span>1</span></a></li>
                            <li><a href="#"><i className="fa fa-shopping-bag"></i> <span>3</span></a></li>
                        </ul>
                        <div className="header__cart__price">item: <span>$150.00</span></div>
                    </div>
                </div>
            </div>
            <div className="humberger__open">
                <i className="fa fa-bars"></i>
            </div>
        </div>
    </header>
}

export default Header;