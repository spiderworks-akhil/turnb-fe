import Image from 'next/image';

const LifeBanner = ({ data }) => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide mr-topinnerpage" data-bs-ride="carousel">
      {/* Carousel Indicators (commented out) */}
      {/* 
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      </div> 
      */}

      <div className="carousel-inner">
        <div className="carousel-item active">
          {/* Desktop Image */}
          <Image
            alt={data?.content?.life_at_banner_media_id?.alt_text || data?.name}
            src={data?.content?.life_at_banner_media_id?.file_path}
            className="d-block text-center m-auto img-height img-fluid d-lg-block d-md-block d-none w-100"
            width={1200} // Adjust width and height based on your image
            height={600}
            layout="responsive"
          />
          {/* Mobile Image */}
          <Image
            alt={data?.content?.life_at_mobile_banner_media_id?.alt_text || data?.name}
            src={data?.content?.life_at_mobile_banner_media_id?.file_path}
            className="d-block w-100 img-fluid d-lg-none d-md-none d-block"
            width={800} // Adjust width and height based on your image
            height={400}
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
};

export default LifeBanner;
