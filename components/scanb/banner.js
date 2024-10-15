import React from 'react';

const ScanbBanner = ({ data }) => {
  return (
    <>
      <div className="m-auto d-block text-center mr-topinnerpagescan mt-0" data-bs-ride="carousel" id="carouselExampleIndicators">
        {/* <div className="carousel-indicators">
        <button aria-label="Slide 1" className="active" data-bs-slide-to="0" data-bs-target="#carouselExampleIndicators" type="button"></button>
        <button aria-label="Slide 2" data-bs-slide-to="1" data-bs-target="#carouselExampleIndicators" type="button"></button>
      </div> */}
        {/* Desktop Banner */}
        <div
          className="d-block text-center m-auto img-height img-fluid d-lg-block d-md-block d-none desktop-banB"
          style={{ background: `url('${data?.content?.scanb_banner_media_id?.file_path}') no-repeat center`, backgroundSize: 'cover',  }}
        >
          <a href={data?.content?.scanb_button_link_1} target="_blank" style={{ textDecoration: 'none' }}>
            <button id="watch-video">{data?.content?.scanb_button_text_1}</button>
          </a>

          <a href={data?.content?.scanb_button_link_2} target="_blank" style={{ textDecoration: 'none' }} data-bs-toggle="modal" data-bs-target="#modelDownload">
            <button id="brouchure">{data?.content?.scanb_button_text_2}</button>
          </a>
        </div>

        {/* Mobile Banner */}

        <div
          className="d-lg-none d-md-none d-block img-fluid"
          style={{ background: `url(${data?.content?.scanb_mobile_banner_media_id?.file_path}) no-repeat`, backgroundSize: 'cover', height: '488px' }}
        >
          <a href={data?.content?.scanb_button_link_1} target="_blank" style={{ textDecoration: 'none' }}>
            <button id="watch-video">{data?.content?.scanb_button_text_1}</button>
          </a>
          <a href={data?.content?.scanb_button_link_2} target="_blank" style={{ textDecoration: 'none' }} data-bs-toggle="modal" data-bs-target="#modelDownload">
            <button id="brouchure">{data?.content?.scanb_button_text_2}</button>
          </a>
        </div>

        {/* Image for Desktop */}

      </div>

      <div id="button-video-brou">
        <a href={data?.content?.scanb_button_link_1} target="_blank" style={{ textDecoration: 'none' }}><button id="watch-video1" fdprocessedid="dbo1sj">{data?.content?.scanb_button_text_1}</button></a>
        <a href={data?.content?.scanb_button_link_2} target="_blank" style={{ textDecoration: 'none' }}>
          <button id="brouchure1" fdprocessedid="cn92ps">{data?.content?.scanb_button_text_2}</button></a>
      </div>

    </>

    // <div className="banner-container">
    //   <div className="desktop-banner">
    //     <img
    //       src="/img/banners/Component%203%20(2.html).jpg"
    //       alt="Desktop Banner"
    //       className="img-fluid"
    //     />
    //     <div className="overlay">
    //       <a href={data?.content?.scanb_button_link_1} target="_blank" rel="noopener noreferrer">
    //         <button className="banner-button">{data?.content?.scanb_button_text_1}</button>
    //       </a>
    //       <a href={data?.content?.scanb_button_link_2} target="_blank" rel="noopener noreferrer">
    //         <button className="banner-button">{data?.content?.scanb_button_text_2}</button>
    //       </a>
    //     </div>
    //   </div>
    //   <img
    //     src="/img/scanb/banners/MOB_Banner_fINAL.jpg"
    //     alt="Mobile Banner"
    //     className="mobile-banner img-fluid"
    //   />
    // </div>
  );
};

export default ScanbBanner;
