import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm } from 'react-hook-form';

const ScanbBanner = ({ data }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const router = useRouter();

  const pageUrl = typeof window !== 'undefined' ? window.location.origin + router?.asPath : '';

  const [loading, setLoading] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const handleCaptchaChange = (value) => setCaptchaVerified(true);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
    if (!isModalOpen) reset();
  };

  const handleVideoModalToggle = () => setIsVideoModalOpen(!isVideoModalOpen);

  const onSubmit = async (details) => {
    if (!captchaVerified) {
      alert('Please verify the reCAPTCHA');
      return;
    }

    setLoading(true);
    const dataToSubmit = {
      name: details?.name,
      email: details?.email,
      companyName: details?.companyName,
      phone_number: details?.mobile,
      source_url: pageUrl,
      lead_type: 'ScanB',
    };

    if (window.grecaptcha) {
      window.grecaptcha.ready(() => {
        window.grecaptcha.execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY, { action: 'submit' })
          .then(async (token) => {
            console.log('Token:', token);
            const response = await axios.post(`https://www.google.com/recaptcha/api/siteverify`, null, {
              params: {
                secret: process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY,
                response: token
              }
            });
            console.log(response);
            if (response?.data?.success) {
              try {
                const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_PATH}contact/save`, dataToSubmit);
                if (response?.status === 200 || response?.status === 201) {
                  window.open(data?.content?.scanb_pdf_media_id?.file_path, '_blank');
                  reset();
                  setLoading(false);
                  setIsModalOpen(false);
                  window.location.reload()
                } else {
                  setLoading(false);
                }
              } catch (error) {
                console.error(error);
                setLoading(false);
              }
            }

          })
          .catch((error) => {
            console.error('reCAPTCHA execution error:', error);
          });
      });
    } else {
      console.error('reCAPTCHA is not ready.');
      alert('reCAPTCHA is not ready.')
    }
  };

  useEffect(() => {
    const loadRecaptchaScript = () => {
      if (!document.querySelector("script[src*='recaptcha/api.js']")) {
        const script = document.createElement('script');
        script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITEKEY_KEY}`;
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
          console.log('reCAPTCHA script loaded.');
        };
      }
    };

    loadRecaptchaScript();
  }, []);


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
          <button id="watch-video" onClick={handleVideoModalToggle}>
            {data?.content?.scanb_button_text_1}
          </button>

          <a onClick={handleModalToggle} data-bs-toggle="modal" data-bs-target="#exampleModal2" style={{ textDecoration: 'none' }}>
            <button id="brouchure">{data?.content?.scanb_button_text_2}</button>
          </a>
        </div>


        {/* Video Modal */}
        {isVideoModalOpen && (
          <div className="modal fade show" style={{ display: 'block' }}>
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header p-0 border-none">
                  <button type="button" className="btn-close" onClick={handleVideoModalToggle}></button>
                </div>
                <div className="modal-body p-0">
                  <video controls style={{ width: '100%', borderRadius: '10px' }}>
                    <source src={data?.content?.scanb_vedio_media_id?.file_path} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
            {/* Overlay to close the modal */}
            <div className="modal-backdrop fade show" onClick={handleVideoModalToggle}></div>
          </div>
        )}

        {/* Mobile Banner */}

        <div
          className="d-lg-none d-md-none d-block img-fluid"
          style={{ background: `url(${data?.content?.scanb_mobile_banner_media_id?.file_path}) no-repeat`, backgroundSize: 'cover', height: '488px' }}
        >
          <button onClick={handleVideoModalToggle} id="watch-video">{data?.content?.scanb_button_text_1}</button>
          {/* href={data?.content?.scanb_button_link_2} */}
          <a onClick={handleModalToggle} style={{ textDecoration: 'none' }}>
            <button id="brouchure">{data?.content?.scanb_button_text_2}</button>
          </a>
        </div>

        {/* Image for Desktop */}

      </div>

      <div id="button-video-brou">
        <button onClick={handleVideoModalToggle} id="watch-video1" fdprocessedid="dbo1sj">{data?.content?.scanb_button_text_1}</button>
        <a onClick={handleModalToggle} data-bs-toggle="modal" data-bs-target="#exampleModal2" style={{ textDecoration: 'none' }}>
          <button id="brouchure1" fdprocessedid="cn92ps">{data?.content?.scanb_button_text_2}</button></a>
      </div>

      {/* brochure form */}
      <div

        className={`modal fade ${isModalOpen ? 'show' : ''}`}
        id="exampleModal2"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden={!isModalOpen}
        style={{ display: isModalOpen ? 'block' : 'none', }} // add backdrop: 'static' if needed
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header p-0 border-none">
              <button
                type="button"
                className="btn-close closebutton"
                data-bs-toggle="modal" data-bs-target="#exampleModal2"
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
                          {...register('email')}
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
                          {...register('mobile')}
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
