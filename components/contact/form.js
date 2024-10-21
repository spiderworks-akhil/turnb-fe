import React, { useState } from 'react';
import BreadCrumbs from '../common/breadCrumbs';

import { useForm, SubmitHandler } from "react-hook-form"
import { ContactApi } from '@/Datas/Endpoints/Contact';
import { useRouter } from 'next/router';
import axios from 'axios';

const ContactForm = ({ data }) => {
  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm()

  const router = useRouter();
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
      phone_number: details?.mobile,
      message: details?.message,
      source_url: pageUrl,
      lead_type: 'Contact'
    }

    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_PATH}contact/save`, dataToSubmit)
      if (response?.status == 200 || response?.status == 201) {
        router.push('/thankyou')
        reset()
        setLoading(false)
      } else {
        setLoading(false)
      }
    } catch (error) {
      console.log(error);
      setLoading(false)
    }

  }

  return (
    <div className="career-bg clearfix">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-12">
            <BreadCrumbs secondCrumb={data?.name} />
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
              onSubmit={handleSubmit(onSubmit)}
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
                  <input  {...register('name', {
                    required: 'Full Name is required',
                  })} type="text" className="form-control" id="userName" name="name" />
                  {errors.name && <span className='form-validation'>{errors.name.message}</span>}
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="box-input p-3 clearfix">
                  <label htmlFor="userEmail" className="form-label clr-ab ft-wt2">Email Address</label>
                  <input
                    className="form-control"
                    id="userEmail"
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
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="box-input p-3 clearfix">
                  <label htmlFor="userMobile" className="form-label clr-ab ft-wt2">Mobile Number</label>
                  <input
                    type="number"
                    className="form-control"
                    id="userMobile"
                    {...register('mobile', {
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
                    })}
                  />
                  {errors.mobile && <span className='form-validation'>{errors.mobile.message}</span>}
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="box-input p-3 clearfix">
                  <label htmlFor="message" className="form-label clr-ab ft-wt2">Message</label>
                  <textarea
                    {...register('message')}
                    className="form-control"
                    id="message"
                    rows="1"
                    name="message"
                  ></textarea>
                </div>
              </div>
              <div className="col-12">
                <button disabled={loading} type="submit" className="btn btn-brand">
                  {
                    loading ?
                      <div className="loading-spinner"></div>
                      : 'Submit'
                  }
                </button>
                {/* <input type="submit" className="btn btn-brand" value="Submit" /> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
