import Image from 'next/image';
import React from 'react';

const ScanRetailSection = ({ data }) => {
  return (
    <div className="paralx clearfix">
      <div className="container">
        <div className="scanb-growth d-block mt-lg-5 mt-md-5 mt-3 p-4 pb-0 clearfix mb-lg-0 mb-md-0 mb-0">
          <div className="row justify-content-center">
            <div className="col-lg-11 col-md-11 col-12">
              <div className="">
                <h1>{data?.content?.scanb_section_2_title}</h1>
                <p className="intro-texts text-center mt-lg-4 mt-md-4 mt-3">
                  {data?.content?.scanb_section_2_short_description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="scanb-growth d-block mt-lg-3 mt-md-3 mt-3 p-4 pt-0 clearfix mb-lg-5 mb-md-5 mb-4">
          <div className="row justify-content-center">
            <div className="col-lg-12 col-md-12 col-12">
              <div className="">
                <h1 className="mb-lg-5 mb-md-5 mb-3" style={{ fontSize: '25px' }}>
                  {data?.content?.scanb_section_2_sub_title}
                </h1>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">

            {
              data?.content?.listing_id_scanb?.list?.map((obj, index) => (
                <div key={index} className="col-lg-3 col-md-3 col-12">
                  <div className="retalilersc text-center mt-lg-0 mt-md-0 mt-3" data-aos="zoom-in-down" data-aos-duration="500">
                    <Image width={100} height={100} src={obj?.media_id?.file_path} alt={obj?.media_id?.file_path}  className="d-block m-auto mb-3" />
                    <h3>{obj?.title}</h3>
                    <p dangerouslySetInnerHTML={{__html:obj?.short_description}} className="mb-lg-0 mb-md-0 mb-4"  />
                  </div>
                </div>
              ))
            }
            {/* <div className="col-lg-3 col-md-3 col-12">
              <div className="retalilersc text-center mt-lg-0 mt-md-0 mt-3" data-aos="zoom-in-down" data-aos-duration="500">
                <img src="/img/scanb/icons/sr1.png" alt="Visibility" className="d-block m-auto mb-3" />
                <h3>Visibility</h3>
                <p className="mb-lg-0 mb-md-0 mb-4">
                  to holistic <br /> business insights
                </p>
              </div>
            </div> */}

            {/* <div className="col-lg-3 col-md-3 col-12">
              <div className="retalilersc text-center" data-aos="zoom-in-down" data-aos-duration="1000">
                <img src="/img/scanb/icons/sr2.png" alt="Accessibility" className="d-block m-auto mb-3" />
                <h3>Accessibility</h3>
                <p className="mb-lg-0 mb-md-0 mb-4">
                  to insights <br /> across all roles
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-12">
              <div className="retalilersc text-center" data-aos="zoom-in-down" data-aos-duration="1500">
                <img src="/img/scanb/icons/sr3.png" alt="Scalability" className="d-block m-auto mb-3" />
                <h3>Scalability</h3>
                <p className="mb-lg-0 mb-md-0 mb-4">
                  to accommodate <br /> growing data insights
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-12">
              <div className="retalilersc text-center" data-aos="zoom-in-down" data-aos-duration="2000">
                <img src="/img/scanb/icons/sr4.png" alt="Flexibility" className="d-block m-auto mb-3" />
                <h3>Flexibility</h3>
                <p className="mb-0">
                  to see <br /> multidimensional insights
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScanRetailSection;
