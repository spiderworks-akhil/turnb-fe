import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react'

function Banner({ data }) {
    
    const buttonLength =  data?.other_sections?.home_banner_slider?.desktop?.photos?.length

    return (
        <div className="carousel slide mrhometop homebanner" data-bs-ride="carousel" id="carouselExampleIndicators">
            <div className="carousel-indicators">
                {Array.from({ length: buttonLength }, (_, index) => (
                    <button 
                        key={index} 
                        aria-label={`Slide ${index + 1}`} 
                        className={index === 0 ? 'active' : ''} 
                        data-bs-slide-to={index} 
                        data-bs-target="#carouselExampleIndicators" 
                        type="button">
                    </button>
                ))}
            </div>
            <div className="carousel-inner">
                {data?.other_sections?.home_banner_slider?.desktop?.photos?.map((obj, index) => (
                    <div 
                        key={index} 
                        className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                        <Link href={obj?.meta_data?.button1_url || '#'} ><Image 
                            width={1920} 
                            height={1080} 
                            alt={obj?.url?.alt_text} 
                            className="d-block img-fluid d-lg-block d-md-block d-none" 
                            src={obj?.url?.file_path} 
                        /></Link>
                        <Link href={data?.other_sections?.home_banner_slider?.mobile?.photos[index]?.meta_data?.button1_url || '#'}><Image 
                            width={1500} 
                            height={850} 
                            alt={data?.other_sections?.home_banner_slider?.mobile?.photos[index]?.url?.alt_text} 
                            className="d-block img-fluid d-lg-none d-md-none d-block" 
                            src={data?.other_sections?.home_banner_slider?.mobile?.photos[index]?.url?.file_path} 
                        /></Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Banner
