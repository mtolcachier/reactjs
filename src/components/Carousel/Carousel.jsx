import React from 'react'
import Adidas from './img/adidas-banner.jpg'
import Converse from './img/converse-banner.png'
import Puma from './img/puma-banner.png'
import Reebok from './img/reebok-banner.png'
import Nike from './img/nike-banner.png'
import './Carousel.css'

const Carousel = () => (
    <div className='px-0'>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={Adidas} className="d-block w-100" alt="Adidas Banner" />
                </div>
                <div className="carousel-item">
                    <img src={Converse} className="d-block w-100" alt="Converse Banner"/>
                </div>
                <div className="carousel-item">
                    <img src={Nike} className="d-block w-100" alt="Nike Banner"/>
                </div>
                <div className="carousel-item">
                    <img src={Puma} className="d-block w-100" alt="Puma Banner"/>
                </div>
                <div className="carousel-item">
                    <img src={Reebok} className="d-block w-100" alt="Reebok Banner"/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
)

export default Carousel