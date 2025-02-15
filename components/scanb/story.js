import Image from 'next/image';
import React from 'react';

const ProductTell = ({ data }) => {
  return (
    <div className="paralx clearfix">
      <div className="d-block pt-lg-0 pt-md-0 pt-2 pb-lg-5 pb-md-5 pb-4 mb-lg-5 mb-md-5 mb-4 position-relative clearfix">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-md-10 col-12">
              <div className="product-tell clearfix">
                <div className="row">
                  <div className="col-lg-1 col-md-1 col-12">
                    <div
                      className="linev-p d-lg-block d-md-block d-none mt-lg-5 mt-md-5 mt-3"
                      data-aos="fade-in"
                      data-aos-duration="3000"
                    />
                  </div>
                  <div className="col-lg-7 col-md-7 col-12 scanbpdd mt-lg-5 mt-md-5 mt-3">
                    <div
                      className="prodscanb-cont mt-lg-4 mt-md-4 mt-3 clearfix"
                      data-aos="fade-left"
                      data-aos-duration="3000"
                    >
                      <h4 dangerouslySetInnerHTML={{ __html: data?.content?.scanb_section_4_text_1 }} />
                      {/* Let products tell their story and help
                        <br />
                        you make decisions on the go!
                      </h4> */}
                      <div className="boxgraydsc mt-lg-4 mt-md-4 mt-3 clearfix">
                        <p className="m-0 text-white" dangerouslySetInnerHTML={{ __html: data?.content?.scanb_section_4_text_2 }} />
                        {/* ScanB translates barcodes into product performance insights with just a scan
                        </p> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-12 p-0" data-aos="fade-left">
                    <Image
                      height={100}
                      width={400}
                      src={data?.content?.scanb_section_4_media_id?.file_path}
                      alt={data?.content?.scanb_section_4_media_id?.alt_text}
                      className="img-fluid m-apple mt-lg-5 mt-md-5 mt-3"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="scan-struct clearfix">
          <Image
            width={100}
            height={100}
            src="/img/scanb/line-struct.png"
            alt="Line Structure"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductTell;
