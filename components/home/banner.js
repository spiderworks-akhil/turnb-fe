import Image from 'next/image';
import React, { useEffect } from 'react'

function Banner({ data }) {

    const buttonLength =  data?.home_banner_slider?.desktop?.photos?.length

    return (
        <div className="carousel slide mrhometop homebanner" data-bs-ride="carousel" id="carouselExampleIndicators">
            <div className="carousel-indicators">
                {Array.from({ length: buttonLength }, (_, index) => (
                    <button key={index} aria-label={`Slide ${index + 1}`} className={index == 0 ? 'active' : ''} data-bs-slide-to={index} data-bs-target="#carouselExampleIndicators" type="button"></button>
                ))}
                {/* <button aria-label="Slide 2" data-bs-slide-to="1" data-bs-target="#carouselExampleIndicators" type="button"></button>
                <button aria-label="Slide 3" data-bs-slide-to="2" data-bs-target="#carouselExampleIndicators" type="button"></button> */}
            </div>
            <div className="carousel-inner">
                {
                    data?.home_banner_slider?.desktop?.photos?.map((obj, index) => (
                        <div key={index} className="carousel-item active">
                            <a ><Image width={1500} height={850} alt={obj?.url?.alt_text} className="d-block img-fluid d-lg-block d-md-block d-none" src={obj?.url?.file_path} /></a>
                            <a ><Image width={1500} height={850} alt={data?.home_banner_slider?.mobile?.photos[index]?.url?.alt_text} className="d-block img-fluid d-lg-none d-md-none d-block" src={data?.home_banner_slider?.mobile?.photos[index]?.url?.file_path} /></a>
                        </div>
                    ))
                }
                {/* <div className="carousel-item">
                    <a href="aboutus.html"><img alt="..." className="d-block w-100 img-fluid d-lg-block d-md-block d-none" src="img/banners/b2.gif" /></a>
                    <a href="aboutus.html"><img alt="..." className="d-block w-100 img-fluid d-lg-none d-md-none d-block" src="img/banners/m2.gif" /></a>
                </div>
                <div className="carousel-item">
                    <a href="aboutus.html"><img alt="..." className="d-block w-100 img-fluid d-lg-block d-md-block d-none" src="img/banners/b3.gif" /></a>
                    <a href="aboutus.html"><img alt="..." className="d-block w-100 img-fluid d-lg-none d-md-none d-block" src="img/banners/m3.gif" /></a>
                </div> */}
            </div>
        </div>
    );
}

export default Banner
