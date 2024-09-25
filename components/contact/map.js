import Image from 'next/image';
import React from 'react';

const ContactMap = ({ data }) => {
  return (
    <div className="container">
      <div className="row mt-lg-5 mt-md-5 mt-3 pb-5">
        <div className="col-lg-6 col-md-6 col-12">
          <div className="map-one mt-lg-5 mt-md-5 mt-3 clearfix">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">

                <Image
                  width={500}
                  height={700}
                  src={data?.content?.contact_us_map_media_id_1?.file_path}
                  alt={data?.content?.contact_us_map_media_id_1?.alt_text}
                  className="img-fluid aos-init aos-animate"
                  data-aos="fade-down"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="aos-init aos-animate" data-aos="fade-up">
                  <div className="map-contact mt-lg-4 mt-md-4 mt-3 clearfix">
                    <span className="loc-i">
                      <Image width={35} height={100}  src="/img/loc.png" alt="Location Icon" className="img-fluid" />
                    </span>
                    <p className="loc-con">
                      {data?.content?.contact_us_add_1}
                    </p>
                  </div>
                  <div className="map-contact mt-lg-3 mt-md-3 mt-3 clearfix">
                    <span className="loc-i">
                      <Image width={35} height={100} src="/img/email.png" alt="Email Icon" className="img-fluid" />
                    </span>
                    <p className="loc-con clr-ab">
                      <a
                        href="mailto:reachus@turnb.com"
                        className="clr-ab"
                        style={{ textDecoration: 'none' }}
                      >
                        {data?.content?.contact_us_email_1}
                      </a>
                    </p>
                  </div>
                  <Image
                    width={600}
                    height={200}
                    src={data?.content?.contact_us_map_media_id_2?.file_path}
                    alt={data?.content?.contact_us_map_media_id_2?.alt_text}
                    className="img-fluid mt-2 mb-2 d-block text-center m-auto wdth-b"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-12">
          <div className="map-one mt-lg-5 mt-md-5 mt-3 clearfix">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
                <Image
                  width={500}
                  height={700}
                  src={data?.content?.contact_us_map_media_id_3?.file_path}
                  alt={data?.content?.contact_us_map_media_id_3?.alt_text}
                  className="img-fluid aos-init aos-animate"
                  data-aos="fade-down"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="aos-init aos-animate" data-aos="fade-up">
                  <div className="map-contact mt-lg-4 mt-md-4 mt-3 clearfix">
                    <span className="loc-i">
                      <Image width={35} height={100}  src="/img/loc.png" alt="Location Icon" className="img-fluid" />
                    </span>
                    <p className="loc-con">
                      {data?.content?.contact_us_add_2}
                    </p>
                  </div>
                  <div className="map-contact mt-lg-3 mt-md-3 mt-3 clearfix">
                    <span className="loc-i">
                      <Image width={35} height={100}  src="/img/email.png" alt="Email Icon" className="img-fluid" />
                    </span>
                    <p className="loc-con clr-ab">
                      <a
                        href="mailto:reachus@turnb.com"
                        className="clr-ab"
                        style={{ textDecoration: 'none' }}
                      >
                        {data?.content?.contact_us_email_2}
                      </a>
                    </p>
                  </div>
                  <Image
                     width={600}
                     height={200}
                     src={data?.content?.contact_us_map_media_id_4?.file_path}
                     alt={data?.content?.contact_us_map_media_id_4?.alt_text}
                    className="img-fluid mt-4 mb-2 d-block text-center m-auto wdth-b2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMap;
