import Image from 'next/image';
import React from 'react';

const BookDemoSection = ({data}) => {
  return (
    <div className="container mt-lg-5 mt-md-5 mt-4 mb-lg-0 mb-md-0 mb-0" data-aos="flip-down">
      <div className="row justify-content-center">
        <div className="col-lg-11 col-md-12 col-12">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="scanb-feature mt-lg-5 mt-md-5 mt-3 pt-lg-5 pt-md-5 pt-2">
                <div>
                  <h1 dangerouslySetInnerHTML={{__html:data?.content?.scanb_section_6_short_text}} className="mb-lg-5 mb-md-5 mb-3 text-left text-ready" />
                    {/* Ready to achieve <br />
                    insight-driven retail success? */}
                  {/* </h1> */}
                  <div className="book-a-demo clearfix">
                    <a href={data?.content?.scanb_section_6_button_link} data-bs-toggle="modal" data-bs-target="#exampleModal">{data?.content?.scanb_section_6_button_text}</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <Image width={300} height={400}  src={data?.content?.scanb_section_6_media_id_3?.file_path} className="img-fluid d-block m-auto text-center w-full-img" alt={data?.content?.scanb_section_6_media_id_3?.alt_text} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDemoSection;
