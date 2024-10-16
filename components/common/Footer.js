// components/Footer.js
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm } from 'react-hook-form';

const Footer = ({ FooterMenu }) => {

  const [captchaVerified, setCaptchaVerified] = useState(false);

  const handleCaptchaChange = (value) => {
    setCaptchaVerified(true);
  };

  const d = new Date();
  let year = d.getFullYear();

  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm()

  const router = useRouter();
  const pageUrl =
    typeof window !== 'undefined'
      ? window.location.origin + router.asPath
      : '';

  const [loading, setLoading] = useState(false)

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
          router.push('/thankyou')
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
    if(!isModalOpen){
      reset()
    }
  };



  return (
    <>
      <footer className="pt-5 pb-5">
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
          <a className="btn blink-text " onClick={handleModalToggle}>
            Enquire Now
          </a>
        </div>

        {/* Enquire Now Form Modal */}
        <div
          onClick={() => { setIsModalOpen(false) }}
          className={`modal fade ${isModalOpen ? 'show' : ''}`}
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden={!isModalOpen}
          style={{ display: isModalOpen ? 'block' : 'none' }}
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
      </div>
    </>
  )
};

export default Footer;
