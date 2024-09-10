import React from 'react';

const BookDemoSection = () => {
  return (
    <div className="container mt-lg-5 mt-md-5 mt-4 mb-lg-0 mb-md-0 mb-0" data-aos="flip-down">
      <div className="row justify-content-center">
        <div className="col-lg-11 col-md-11 col-12">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="scanb-feature mt-lg-5 mt-md-5 mt-3 pt-lg-5 pt-md-5 pt-2">
                <div>
                  <h1 className="mb-lg-5 mb-md-5 mb-3 text-left text-ready">
                    Ready to achieve <br />
                    insight-driven retail success?
                  </h1>
                  <div className="book-a-demo clearfix">
                    <a data-bs-toggle="modal" data-bs-target="#exampleModal">Book a demo today</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <img src="img/scanb/book-demo-scanb.png" className="img-fluid d-block m-auto text-center" alt="Book a Demo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDemoSection;
