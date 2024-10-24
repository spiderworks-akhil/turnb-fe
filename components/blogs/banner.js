import Image from 'next/image';

const BlogBanner = ({data}) => {
    return (
        <div className="banner-container">
            <Image
                  style={{width:'100%'}}
                alt={data?.content?.blog_banner_media_id?.alt_path || data?.name}
                className="d-block text-center m-auto img-height img-fluid d-lg-block d-md-block d-none"
                src={data?.content?.blog_banner_media_id?.file_path}
                width={1600} // Add appropriate width
                height={500}  // Add appropriate height
            />
            
            <Image
                alt={data?.content?.blog_mobile_banner_media_id?.alt_path || data?.name}
                className="d-block img-fluid d-lg-none d-md-none d-block abt-mob-banner"
                src={data?.content?.blog_mobile_banner_media_id?.file_path}
                width={500}  // Add appropriate width
                height={300}  // Add appropriate height
            />
        </div>
    );
};

export default BlogBanner;
