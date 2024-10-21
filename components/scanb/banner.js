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


  const onSubmit = async (details) => {

    if (!captchaVerified) {
      alert('Please verify the reCAPTCHA');
      return;
    } else {

      setLoading(true)
      let dataToSubmit = {
        name: details?.name,
        email: details?.email,
        phone_number: details?.mobile,
        message: details?.message,
        source_url: pageUrl,
        type: 'Enquiry'
      }

      try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_PATH}contact/save`, dataToSubmit)
        if (response?.status == 200 || response?.status == 201) {
          window.open(data.content.pdf_url, '_blank');
          reset()
          setLoading(false)
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
      <div className="m-auto d-block text-center mr-topinnerpagescan mt-0" data-bs-ride="carousel" id="carouselExampleIndicators">
        {/* <div className="carousel-indicators">
        <button aria-label="Slide 1" className="active" data-bs-slide-to="0" data-bs-target="#carouselExampleIndicators" type="button"></button>
        <button aria-label="Slide 2" data-bs-slide-to="1" data-bs-target="#carouselExampleIndicators" type="button"></button>
      </div> */}
        {/* Desktop Banner */}
        <div
          className="d-block text-center m-auto img-height img-fluid d-lg-block d-md-block d-none desktop-banB "
          style={{ background: `url('${data?.content?.scanb_banner_media_id?.file_path}') no-repeat center`, backgroundSize: 'cover', }}
        >
          <a href={data?.content?.scanb_button_link_1} target="_blank" style={{ textDecoration: 'none' }}>
            <button id="watch-video">{data?.content?.scanb_button_text_1}</button>
          </a>

          <a onClick={handleModalToggle}  style={{ textDecoration: 'none' }}>
            <button id="brouchure">{data?.content?.scanb_button_text_2}</button>
          </a>
        </div>

        {/* Mobile Banner */}

        <div
          className="d-lg-none d-md-none d-block img-fluid"
          style={{ background: `url(${data?.content?.scanb_mobile_banner_media_id?.file_path}) no-repeat`, backgroundSize: 'cover', height: '488px' }}
        >
          <a href={data?.content?.scanb_button_link_1} target="_blank" style={{ textDecoration: 'none' }}>
            <button id="watch-video">{data?.content?.scanb_button_text_1}</button>
          </a>
          {/* href={data?.content?.scanb_button_link_2} */}
          <a onClick={handleModalToggle} target="_blank" style={{ textDecoration: 'none' }}>
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
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden={!isModalOpen}
        style={{ display: isModalOpen ? 'block' : 'none',}} // add backdrop: 'static' if needed
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
                        <h1 className="text-white">Get in touch</h1>
                        <p className="ft text-white mb-0">
                          Please feel free to contact us and we will get back to you as soon as
                          possible
                        </p>
                      </div>
                      <div className="col-lg-6 col-md-6 col-12">
                        <label htmlFor="userName" className="form-label text-white">Full Name</label>
                        <input {...register('name', {
                          required: 'Full Name is required',
                        })} type="text" className="form-control" id="userName" name="name" />
                        {errors.name && <span className='form-validation'>{errors.name.message}</span>}

                      </div>
                      <div className="col-lg-6 col-md-6 col-12">
                        <label htmlFor="userEmail" className="form-label text-white">Email Address</label>
                        <input
                          type="email"
                          className="form-control"
                          id="userEmail"
                          aria-describedby="emailHelp"
                          name="email"
                          {...register('email', {
                            required: 'Email is required',
                            pattern: {
                              value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                              message: 'Please enter a valid email address'
                            }
                          })}
                        />
                        {errors.email && <span className='form-validation'>{errors.email.message}</span>}
                      </div>
                      <div className="col-lg-6 col-md-6 col-12">
                        <label htmlFor="userMobile" className="form-label text-white">Mobile Number</label>
                        <input type="tel" className="form-control" id="userMobile" name="mobile"  {...register('mobile', {
                          required: 'Mobile number is required',
                          minLength: {
                            value: 10,
                            message: 'Mobile number must be at least 10 digits',
                          },
                          maxLength: {
                            value: 15,
                            message: 'Mobile number must not exceed 15 digits',
                          },
                          pattern: {
                            value: /^[0-9]+$/,
                            message: 'Only numeric values are allowed',
                          }
                        })} />
                        {errors.mobile && <span className='form-validation'>{errors.mobile.message}</span>}

                      </div>
                      <div className="col-lg-6 col-md-6 col-12">
                        <label htmlFor="userMessage" className="form-label text-white">Enter Message</label>
                        <textarea
                          {...register('message')}
                          className="form-control"
                          id="userMessage"
                          rows="1"
                          name="message"
                        ></textarea>
                      </div>
                      <div className="col-lg-6 col-md-6 col-12 mt-0">
                        <div className="m-0 mt-3">
                          <ReCAPTCHA
                            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY}
                            onChange={handleCaptchaChange}
                          />
                          {/* <ReCAPTCHA
                            sitekey="6Lel4Z4UAAAAAOa8LO1Q9mqKRUiMYl_00o5mXJrR"
                          /> */}
                        </div>
                      </div>

                      <div className="col-12">
                        <button disabled={loading} type="submit" className="btn btn-brand btnsubmt">
                          {
                            loading ?
                              <div className="loading-spinner"></div>
                              : 'Submit'
                          }
                        </button>
                        {/* <input type="submit" className="btn btn-brand btnsubmt" value="Submit" /> */}
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
