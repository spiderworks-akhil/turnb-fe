import React from 'react';

const ContactForm = () => {
  return (
    <div className="career-bg clearfix">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-12">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mt-lg-5 mt-md-5 mt-3 mb-lg-4 mb-md-4 mb-3">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">/ Contact</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="bg-contact pt-5 mt-lg-0 mt-md-0 mt-4 clearfix">
          <div className="intro aos-init aos-animate" data-aos="fade-down">
            <h1 className="mb-lg-4 mb-md-4 mb-3 text-left">
              Get in Touch with <span className="clr-ab">Our Experts</span>
            </h1>
          </div>
          <div className="bg-white form-career p-3 mb-5 aos-init aos-animate" data-aos="fade-up">
            <form
              className="col-12 row g-3 pt-3 pb-3"
              action="https://www.turnb.com/saveRegister.php"
              method="POST"
              role="form"
              encType="multipart/form-data"
            >
              <input type="hidden" name="date" value="2024-09-05 06:06:15" />
              <div className="col-lg-6 col-md-6 col-12">
                <div className="box-input p-3 clearfix">
                  <label htmlFor="userName" className="form-label clr-ab ft-wt2">Full Name</label>
                  <input type="text" className="form-control" id="userName" name="name" required />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="box-input p-3 clearfix">
                  <label htmlFor="userEmail" className="form-label clr-ab ft-wt2">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="userEmail"
                    name="email"
                    required
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="box-input p-3 clearfix">
                  <label htmlFor="userMobile" className="form-label clr-ab ft-wt2">Mobile Number</label>
                  <input type="number" className="form-control" id="userMobile" name="mobile" required />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="box-input p-3 clearfix">
                  <label htmlFor="message" className="form-label clr-ab ft-wt2">Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="1"
                    name="message"
                    required
                  ></textarea>
                </div>
              </div>
              <div className="col-12">
                <input type="submit" className="btn btn-brand" value="Submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
