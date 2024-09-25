import Image from 'next/image';

const BlogDetailBanner = () => {
  return (
    <div className="mr-topinnerpage">
      <div className="banner-container">
        {/* Image for large screens */}
        <Image
          alt="Ethical Banner"
          src="/img/banners/ethical-banner.jpg"
          className="d-lg-block d-md-block d-none"
          layout="responsive"
          width={1920} // You can adjust these values based on the image's aspect ratio
          height={1080} // Adjust height accordingly
        />

        {/* Image for smaller screens */}
        <Image
          alt="Ethical Banner"
          src="/img/banners/ethical-banner.jpg"
          className="d-lg-none d-md-none d-block"
          layout="responsive"
          width={1920} // Same width
          height={1080} // Same height, adjusted for smaller screens
        />
      </div>
    </div>
  );
};

export default BlogDetailBanner;
