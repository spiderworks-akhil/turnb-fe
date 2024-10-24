import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm } from 'react-hook-form';

const ScanbBanner = ({ data }) => {

  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm()


  const router = useRouter();
  const pageUrl =
    typeof window !== 'undefined'
      ? window.location.origin + router?.asPath
      : '';

  const [loading, setLoading] = useState(false)
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const handleCaptchaChange = (value) => {
    setCaptchaVerified(true);
  };

  console.log(data);


  const onSubmit = async (details) => {


    if (!captchaVerified) {
      alert('Please verify the reCAPTCHA');
      return;
    } else {

      setLoading(true)
      let dataToSubmit = {
        name: details?.name,
        email: details?.email,
        companyName: details?.companyName,
        phone_number: details?.mobile,
        source_url: pageUrl,
        lead_type: 'ScanB'
      }

      try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_PATH}contact/save`, dataToSubmit)
        if (response?.status == 200 || response?.status == 201) {
          window.open(data?.content?.scanb_pdf_media_id?.file_path, '_blank');
          reset()
          setLoading(false)
          setIsModalOpen(false)
          reset
        } else {
          setLoading(false)
        }
      } catch (error) {
        console.log(error);
        setLoading(false)
      }
    }


  }

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
    if (!isModalOpen) {
      reset()
    }
  };


  return (
    <>
      <div className="d-block text-center mr-topinnerpagescan mt-0" data-bs-ride="carousel" id="carouselExampleIndicators">
        {/* <div className="carousel-indicators">
        <button aria-label="Slide 1" className="active" data-bs-slide-to="0" data-bs-target="#carouselExampleIndicators" type="button"></button>
        <button aria-label="Slide 2" data-bs-slide-to="1" data-bs-target="#carouselExampleIndicators" type="button"></button>
      </div> */}
        {/* Desktop Banner */}
        <div
          className="d-block text-center m-auto img-height img-fluid d-lg-block d-md-block d-none desktop-banB "
          style={{ background: `url('${data?.content?.scanb_banner_media_id?.file_path}') no-repeat center`, backgroundSize: 'cover', }}
        >
          <a href={data?.content?.scanb_vedio_media_id?.file_path} target="_blank" style={{ textDecoration: 'none' }}>
            <button id="watch-video">{data?.content?.scanb_button_text_1}</button>
          </a>

          <a onClick={handleModalToggle} style={{ textDecoration: 'none' }}>
            <button id="brouchure">{data?.content?.scanb_button_text_2}</button>
          </a>
        </div>

        {/* Mobile Banner */}

        <div
          className="d-lg-none d-md-none d-block img-fluid"
          style={{ background: `url(${data?.content?.scanb_mobile_banner_media_id?.file_path}) no-repeat`, backgroundSize: 'cover', height: '488px' }}
        >
          <a href={data?.content?.scanb_vedio_media_id?.file_path} target="_blank" style={{ textDecoration: 'none' }}>
            <button id="watch-video">{data?.content?.scanb_button_text_1}</button>
          </a>
          {/* href={data?.content?.scanb_button_link_2} */}
          <a onClick={handleModalToggle} style={{ textDecoration: 'none' }}>
            <button id="brouchure">{data?.content?.scanb_button_text_2}</button>
          </a>
        </div>

        {/* Image for Desktop */}

      </div>

      <div id="button-video-brou">
        <a href={data?.content?.scanb_button_link_1} target="_blank" style={{ textDecoration: 'none' }}><button id="watch-video1" fdprocessedid="dbo1sj">{data?.content?.scanb_button_text_1}</button></a>
        <a href={data?.content?.scanb_button_link_2} target="_blank" style={{ textDecoration: 'none' }}>
          <button id="brouchure1" fdprocessedid="cn92ps">{data?.content?.scanb_button_text_2}</button></a>
      </div>

      {/* brochure form */}
      <div
        onClick={() => setIsModalOpen(false)}
        className={`modal fade ${isModalOpen ? 'show' : ''}`}
        id="brouchure"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden={!isModalOpen}
        style={{ display: isModalOpen ? 'block' : 'none', }} // add backdrop: 'static' if needed
      >
        <div className="modal-dialog modal-dialog-centered">
          <div onClick={(e) => e.stopPropagation()} className="modal-content">
            {/* Modal Header */}
            <div className="modal-header p-0 border-none">
              <button
                type="button"
                className="btn-close closebutton"
                onClick={handleModalToggle}
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body p-0">
              <div className="container-fluid">
                <div className="row justify-content-center gy-4 mob-input">
                  <div className="col-lg-12 col-md-12 col-12">
                    <form
                      className="p-lg-4 col-12 row g-3 pt-3 pb-3"
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      <input type="hidden" name="date" value="2024-09-05 06:07:47" />

                      <div>
                        <h5 className="text-white">Thank you for your interest in ScanB. <br />
                          <span style={{ fontSize: '16px', fontWeight: 600 }}>To view or download the brochure, please complete the short form below.</span>
                        </h5>
                      </div>

                      <div className="col-lg-6 col-md-6 col-12">
                        <label htmlFor="userName" className="form-label text-white">Full Name</label>
                        <input
                          {...register('name')}
                          type="text"
                          className="form-control"
                          id="userName"
                          name="name"
                          required
                        />
                        {errors.name && <span className='form-validation'>{errors.name.message}</span>}
                      </div>

                      <div className="col-lg-6 col-md-6 col-12">
                        <label htmlFor="companyName" className="form-label text-white">Company Name</label>
                        <input
                          {...register('companyName')}
                          type="text"
                          className="form-control"
                          id="companyName"
                          name="companyName"
                          required
                        />
                        {errors.companyName && <span className='form-validation'>{errors.companyName.message}</span>}
                      </div>

                      <div className="col-lg-6 col-md-6 col-12">
                        <label htmlFor="userEmail" className="form-label text-white">Company Email ID</label>
                        <input
                          type="email"
                          className="form-control"
                          id="userEmail"
                          name="email"
                          required
                        />
                        {errors.email && <span className='form-validation'>{errors.email.message}</span>}
                      </div>

                      <div className="col-lg-6 col-md-6 col-12">
                        <label htmlFor="userMobile" className="form-label text-white">Mobile Number</label>
                        <input
                          type="tel"
                          className="form-control"
                          id="userMobile"
                          name="mobile"
                          minLength="10"
                          maxLength="15"
                          required
                          pattern="[0-9]+"
                        />
                        {errors.mobile && <span className='form-validation'>{errors.mobile.message}</span>}
                      </div>

                      <div className="col-lg-6 col-md-6 col-12 mt-0">
                        <div className="m-0 mt-3">
                          <ReCAPTCHA
                            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY}
                            onChange={handleCaptchaChange}
                          />
                        </div>
                      </div>

                      <div className="col-12">
                        <button disabled={loading} type="submit" className="btn btn-brand btnsubmt">
                          {loading ? <div className="loading-spinner"></div> : 'Submit'}
                        </button>
                      </div>
                    </form>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>

  );
};

export default ScanbBanner;
