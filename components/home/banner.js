import React, { useEffect } from 'react'

function Banner() {
    useEffect(() => {
        // This ensures Bootstrap's JavaScript is loaded and initialized
        const carouselElement = document.querySelector('#carouselExampleIndicators');
       
    }, []);
    return (
        <div className="carousel slide mrhometop homebanner" data-bs-ride="carousel" id="carouselExampleIndicators">
            <div className="carousel-indicators">
                <button aria-label="Slide 1" className="active" data-bs-slide-to="0" data-bs-target="#carouselExampleIndicators" type="button"></button>
                <button aria-label="Slide 2" data-bs-slide-to="1" data-bs-target="#carouselExampleIndicators" type="button"></button>
                <button aria-label="Slide 3" data-bs-slide-to="2" data-bs-target="#carouselExampleIndicators" type="button"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <a href="case-studies.html"><img alt="..." className="d-block img-fluid d-lg-block d-md-block d-none" src="img/banners/b1.gif" /></a>
                    <a href="case-studies.html"><img alt="..." className="d-block img-fluid d-lg-none d-md-none d-block" src="img/banners/m1.gif" /></a>
                </div>
                <div className="carousel-item">
                    <a href="aboutus.html"><img alt="..." className="d-block w-100 img-fluid d-lg-block d-md-block d-none" src="img/banners/b2.gif" /></a>
                    <a href="aboutus.html"><img alt="..." className="d-block w-100 img-fluid d-lg-none d-md-none d-block" src="img/banners/m2.gif" /></a>
                </div>
                <div className="carousel-item">
                    <a href="aboutus.html"><img alt="..." className="d-block w-100 img-fluid d-lg-block d-md-block d-none" src="img/banners/b3.gif" /></a>
                    <a href="aboutus.html"><img alt="..." className="d-block w-100 img-fluid d-lg-none d-md-none d-block" src="img/banners/m3.gif" /></a>
                </div>
            </div>
        </div>
    );
}

export default Banner
