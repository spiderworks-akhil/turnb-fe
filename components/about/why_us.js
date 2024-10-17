import React, { useEffect } from 'react';

const AboutWhyUsBanner = ({ data }) => {

  console.log(data);
  
  

  return (
    <div style={{background:`url(${data?.content?.why_us_banner_media_id?.file_path})`,backgroundSize:'cover',position:'relative'}} className="why-us-banner clearfix">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12">
            <h2 className="text-white ft-wt3 mb-3" >{data?.content?.title_2}</h2>
            <div className="bg-image-sec text-white why-us-about" dangerouslySetInnerHTML={{ __html: data?.content?.description_2 }} />
          </div>
        </div>
        <div className="row">
          {
            data?.content?.listing_id_why_us?.map((obj, index) => (
              <div key={index} className="col-lg-3 col-md-3 col-12">
                <div className="box-exp2 clearfix mt-3 pb-3" data-aos="fade-down">
                  <div className="rect-box2 text-center clearfix">
                    <h3 className="text-center minett pt-lg-4 pt-md-4 pt-2 pb-lg-3 pb-md-3 pb-2 ft-wt">{obj?.title}</h3>
                    <p className="mt-0 mb-0 clr-blck font-txt pb-lg-5 pb-md-5 pb-3">
                      {obj?.short_description}
                    </p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>

        <div className="bg-image-sec">
          <p className="text-white mb-0 mt-lg-4 mt-md-4 mt-3">
            {data?.content?.description_3}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutWhyUsBanner;
