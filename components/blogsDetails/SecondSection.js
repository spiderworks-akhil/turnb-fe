import React from 'react';

const SecondSection = ({data}) => {
  console.log(data);
  
  return (
    <div className="bg-real clearfix" data-aos="fade-up" data-aos-duration="3000">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11 col-md-11 col-12">
            <h3 className="clrblue-real mb-lg-4 mb-md-4 mb-3 m-lg-5 mt-md-5 mt-3 p-0 max-width-cls" dangerouslySetInnerHTML={{__html:data?.title}} />

            <div className="row">
              <div className="col-lg-12 col-md-12 col-12">
                <div className="bg-realtext">
                  <p className="mt-1">
                   {data?.short_description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
