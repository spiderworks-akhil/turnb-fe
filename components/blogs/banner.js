import Image from 'next/image';

const BlogBanner = () => {
    return (
        <div className="banner-container">
            <Image
                alt="Desktop Banner"
                className="d-block text-center m-auto img-height img-fluid d-lg-block d-md-block d-none"
                src="/img/blog/banner-desk.jpg"
                width={1600} // Add appropriate width
                height={600}  // Add appropriate height
            />
            <Image
                alt="Mobile Banner"
                className="d-block w-100 img-fluid d-lg-none d-md-none d-block"
                src="/img/blog/banner-mob.jpg"
                width={500}  // Add appropriate width
                height={300}  // Add appropriate height
            />
        </div>
    );
};

export default BlogBanner;
