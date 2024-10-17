import Image from 'next/image';

const BlogDetailBanner = ({data}) => {
  return (
    <div className="mr-topinnerpage">
      <div className="banner-container">
        {/* Image for large screens */}
        <Image 
        style={{marginTop:'90px'}}
          alt={data?.banner_image?.alt_text}
          src={data?.banner_image?.file_path}
          className="d-block img-fluid d-lg-block d-md-block d-none"
          layout="responsive"
          width={1920} // You can adjust these values based on the image's aspect ratio
          height={1080} // Adjust height accordingly
        />

        {/* Image for smaller screens */}
        <Image
          alt={data?.banner_image?.alt_text}
          src={data?.banner_image?.file_path}
          className="d-block img-fluid d-lg-none d-md-none d-block abt-mob-banner"
          layout="responsive"
          width={1920} // Same width
          height={1080} // Same height, adjusted for smaller screens
        />
      </div>
    </div>
  );
};

export default BlogDetailBanner;
