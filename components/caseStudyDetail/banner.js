import Image from 'next/image';

const CaseStudyDetailBanner = ({ data }) => {
  
  return (
    <div className="banner-container">
      <div className="image-container-large d-none d-sm-block ">
        <Image width={1600} height={900} alt={data?.content?.case_study_banner_media_id?.alt_text || data?.name} className="d-block text-center m-auto img-height img-fluid d-lg-block d-md-block d-none"
          src={data?.content?.case_study_banner_media_id?.file_path} data-aos="fade-right" />
      </div>

      <div className="image-container-small   d-block d-sm-none">
        <Image
          src={data?.content?.case_study_mobile_banner_media_id?.file_path}
          alt={data?.content?.case_study_mobile_banner_media_id?.alt_text || data?.name}
          layout="responsive"
          width={1600}
          height={900}
          className="img-fluid"
        />
      </div>
    </div>
  );
};

export default CaseStudyDetailBanner;
