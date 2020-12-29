import React from 'react';
import carousel1 from '../../images/carousel1.jpg';
import carousel2 from '../../images/carousel4.jpg';
import carousel3 from '../../images/carousel3.jpg';

const Carousel = () => {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src={carousel1} className="d-block w-100 carousel-image carousel-image1" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src={carousel2} className="d-block w-100 carousel-image carousel-image2" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src={carousel3} className="d-block w-100 carousel-image carousel-image3" alt="..."/>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
}

export default Carousel;
