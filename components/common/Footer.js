// components/Footer.js
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm } from 'react-hook-form';

const Footer = ({ FooterMenu, data }) => {

  const recaptchaRef = useRef(null);

  const fullSEOcontent = `${data?.seo_h1_title ? `<h1>${data?.seo_h1_title}</h1>` : ''}${data?.bottom_description}`
  const router = useRouter();

  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [url, seturl] = useState(router.pathname)


  const handleCaptchaChange = (value) => {
    setCaptchaVerified(true);
  };

  const d = new Date();
  let year = d.getFullYear();

  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm()

  const pageUrl =
    typeof window !== 'undefined'
      ? window.location.origin + router.asPath
      : '';

  const [loading, setLoading] = useState(false)

  const onSubmit = async (details) => {

    setLoading(true)
    let dataToSubmit = {
      name: details?.name,
      email: details?.email,
      ...(router?.pathname === '/scanb' && { company_name: details?.companyName }),
      ...(router?.pathname === '/scanb' && { job_position: details?.jobPosition }),
      phone_number: details?.mobile,
      message: details?.message,
      source_url: pageUrl,
      ...(router?.pathname === '/scanb' ? { lead_type: 'Demo' } : { lead_type: 'Enquiry' }),
      // type: 'Enquiry'
    }

    if (window.grecaptcha) {
      window.grecaptcha.ready(() => {
        window.grecaptcha.execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY, { action: 'submit' })
          .then(async (token) => {
            if (token) {
              dataToSubmit['recaptcha_token'] = token
            }
            try {
              const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_PATH}contact/save`, dataToSubmit)
              if (response?.status == 200 || response?.status == 201) {
                // router.push('/thankyou')
                window.location.href = "/thankyou"
                reset()
                setLoading(false)
              } else {
                setLoading(false)
              }
            } catch (error) {
              console.log(error);
              setLoading(false)
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

  }

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
    if (!isModalOpen) {
      reset()
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    reset()
  }

  useEffect(() => {
    const loadRecaptchaScript = () => {
      if (!document.querySelector("script[src*='recaptcha/api.js']")) {
        const script = document.createElement('script');
        script.src = `https://www.google.com/recaptcha/api.js?render=6LfYSnsqAAAAAMMtaAkYKfIAoywDxgbNTBhVaPoF`;
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
      <footer className="pt-5 pb-5">

        {
          data?.bottom_description &&
          <div className="container">
            <div className="row">
              <div className="col-lg-12 footer-content" dangerouslySetInnerHTML={{ __html: fullSEOcontent }} >
                {/* <h1>{data?.seo_h1_title}</h1> */}
              </div>

            </div>
          </div>
        }

        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-12">
              <Image width={191} height={59} src="/img/logo.png" className="img-fluid" alt="Logo" />
            </div>
          </div>
          <div className="row">
            {
              FooterMenu?.Footer_Menu?.map((obj, index) => (
                <div key={index} className="col-lg-3 col-md-3 col-6">
                  <div className="footer-links ml-lg-3 mt-lg-4 mt-md-4 mt-3">
                    <h6 className="clr-ab">{obj?.title}</h6>
                    <ul>
                      {
                        obj?.children?.map((child, childIndex) => (
                          <li key={childIndex}><Link href={`/${child?.url}`}>{child?.title}</Link></li>
                        ))
                      }
                      {/* <li><a href="/aboutus.html">Why Us</a></li>
                      <li><a href="/aboutus.html">Core Values</a></li>
                      <li><a href="/aboutus.html">Milestones</a></li> */}
                    </ul>
                  </div>
                </div>
              )
              )
            }

            {/* <div className="col-lg-3 col-md-3 col-6">
              <div className="footer-links ml-lg-3 mt-lg-4 mt-md-4 mt-3">
                <h6 className="clr-ab">Our Services</h6>
                <ul>
                  <li><a href="/our-services.html">Our Offerings</a></li>
                  <li><a href="/case-studies.html">Case Studies</a></li>
                  <li><a href="/scanB/index.html">ScanB</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-6">
              <div className="footer-links ml-lg-3 mt-lg-4 mt-md-4 mt-3">
                <h6 className="clr-ab">Consult D5</h6>
                <ul>
                  <li><a href="/consult-D5tm.html">Consult D5™ Framework</a></li>
                  <li><a href="/consult-D5tm.html">Analytical Consulting Spectrum</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-6">
              <div className="footer-links ml-lg-3 mt-lg-4 mt-md-4 mt-3">
                <h6 className="clr-ab">Quick Links</h6>
                <ul>
                  <li><a href="/life%40turnb.html">Life@TurnB</a></li>
                  <li><a href="/career.html">Career</a></li>
                  <li><a href="/contact-us.html">Contact Us</a></li>
                  <li><a href="/blog.html">Blog</a></li>
                </ul>
              </div>
            </div>
             */}
          </div>
          <div className="row mt-lg-5 mt-md-5 mt-3">
            <div className="col-lg-6 col-md-6 col-12">
              <p className="flw">Follow us</p>
              <div className="social-icons">
                <a href="https://www.linkedin.com/company/turnb/" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
                <a href="https://www.instagram.com/turnb_official/" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <p className="flw2">© {year} TurnB. All Rights Reserved</p>
            </div>
          </div>
        </div>
      </footer>

      <div>
        {/* Feedback Enquiry and Popup Button */}
        {

        }
        <div id="feedback-enquiry" className="d-none">
          <div
            id="feedback-tab-enquiry"
            className="advertisement blink-text"
            onClick={handleModalToggle}
          >
            Enquire Now
          </div>
        </div>
        <div className="popup-btnnew">
          <a className="btn blink-text " data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={handleModalToggle}>
            {
              url == '/scanb' ?
                'Book a Demo' :
                'Enquire Now'
            }
          </a>
        </div>

        {/* Enquire Now Form Modal */}
        <div
          // onClick={handleModalClose}
          className={`modal fade ${isModalOpen ? 'show' : ''}`}
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden={!isModalOpen}
          aria-modal={isModalOpen}
          style={{ display: isModalOpen ? 'block' : 'none' }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              {/* Modal Header */}
              <div className="modal-header p-0 border-none">
                <button
                  data-bs-toggle="modal" data-bs-target="#exampleModal"
                  type="button"
                  className="btn-close closebutton"
                  // onClick={handleModalClose}
                  aria-label="Close"
                ></button>
              </div>
              <div onClick={(e) => e.stopPropagation()} className="modal-body p-0">
                <div className="container-fluid">
                  <div className="row justify-content-center gy-4 mob-input">
                    <div className="col-lg-12 col-md-12 col-12">
                      <form
                        className="p-lg-4 col-12 row g-3 pt-3 pb-3"
                        onSubmit={handleSubmit(onSubmit)}
                      >
                        <input type="hidden" name="date" value="2024-09-05 06:07:47" />
                        <div>
                          <h1 className="text-white">
                            {url == '/scanb' ? 'Book a Demo Today' : 'Get in touch'}
                          </h1>
                          <p className="ft text-white mb-0">
                            {url == '/scanb'
                              ? 'We will get back to you as soon as possible'
                              : 'Please feel free to contact us and we will get back to you as soon as possible'}
                          </p>
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

                        {url == '/scanb' && (
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
                        )}

                        {url == '/scanb' && (
                          <div className="col-lg-6 col-md-6 col-12">
                            <label htmlFor="jobPosition" className="form-label text-white">Job Position</label>
                            <input
                              {...register('jobPosition')}
                              type="text"
                              className="form-control"
                              id="jobPosition"
                              name="jobPosition"
                              required
                            />
                            {errors.jobPosition && <span className='form-validation'>{errors.jobPosition.message}</span>}
                          </div>
                        )}

                        <div className="col-lg-6 col-md-6 col-12">
                          <label htmlFor="userEmail" className="form-label text-white">
                            {url == '/scanb' ? 'Company Email ID' : 'Email Address'}
                          </label>
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
                            required
                          />
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
                              ref={recaptchaRef}
                              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITEKEY_KEY}
                              size="invisible"
                            />
                          </div>
                        </div>

                        <div className="col-12">
                          <button
                            data-sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITEKEY_KEY}
                            data-size='invisible'
                            disabled={loading} type="submit" className="g-recaptcha btn btn-brand btnsubmt">
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
      </div>
    </>
  )
};

export default Footer;
