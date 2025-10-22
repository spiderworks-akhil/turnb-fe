import React, { useEffect, useState } from "react";
import BreadCrumbs from "../common/breadCrumbs";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha"; // ✅ Import correctly

const ContactForm = ({ data }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const router = useRouter();
  const pageUrl =
    typeof window !== "undefined" ? window.location.origin + router.asPath : "";

  const [loading, setLoading] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState("");
  const [recaptchaError, setRecaptchaError] = useState(false);

  const onSubmit = async (details) => {
    if (!recaptchaToken) {
      setRecaptchaError(true);
      return;
    }

    setLoading(true);
    let dataToSubmit = {
      name: details?.name,
      email: details?.email,
      phone_number: details?.mobile,
      message: details?.message,
      source_url: pageUrl,
      lead_type: "Contact",
      recaptcha_token: recaptchaToken,
    };

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_PATH}contact/save`,
        dataToSubmit
      );

      if (response?.status === 200 || response?.status === 201) {
        window.location.href = "/thankyou";
        reset();
      }
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setLoading(false);
      setRecaptchaToken("");
    }
  };

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
          <div className="intro" data-aos="fade-down">
            <h2 className="mb-lg-4 mb-md-4 mb-3 text-left">
              Get in Touch with <span className="clr-ab">Our Experts</span>
            </h2>
          </div>

          <div className="bg-white form-career p-3 mb-5" data-aos="fade-up">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="col-12 row g-3 pt-3 pb-3"
              role="form"
            >
              {/* Full Name */}
              <div className="col-lg-6 col-md-6 col-12">
                <div className="box-input p-3 clearfix">
                  <label
                    htmlFor="userName"
                    className="form-label clr-ab ft-wt2"
                  >
                    Full Name
                  </label>
                  <input
                    {...register("name", {
                      required: "Full Name is required",
                    })}
                    type="text"
                    className="form-control"
                    id="userName"
                    name="name"
                  />
                  {errors.name && (
                    <span className="form-validation">
                      {errors.name.message}
                    </span>
                  )}
                </div>
              </div>

              {/* Email */}
              <div className="col-lg-6 col-md-6 col-12">
                <div className="box-input p-3 clearfix">
                  <label
                    htmlFor="userEmail"
                    className="form-label clr-ab ft-wt2"
                  >
                    Email Address
                  </label>
                  <input
                    className="form-control"
                    id="userEmail"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                        message: "Please enter a valid email address",
                      },
                    })}
                  />
                  {errors.email && (
                    <span className="form-validation">
                      {errors.email.message}
                    </span>
                  )}
                </div>
              </div>

              {/* Mobile Number */}
              <div className="col-lg-6 col-md-6 col-12">
                <div className="box-input p-3 clearfix">
                  <label
                    htmlFor="userMobile"
                    className="form-label clr-ab ft-wt2"
                  >
                    Mobile Number
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="userMobile"
                    {...register("mobile", {
                      required: "Mobile number is required",
                      minLength: {
                        value: 10,
                        message: "Mobile number must be at least 10 digits",
                      },
                      maxLength: {
                        value: 15,
                        message: "Mobile number must not exceed 15 digits",
                      },
                      pattern: {
                        value: /^[0-9]+$/,
                        message: "Only numeric values are allowed",
                      },
                    })}
                  />
                  {errors.mobile && (
                    <span className="form-validation">
                      {errors.mobile.message}
                    </span>
                  )}
                </div>
              </div>

              {/* Message */}
              <div className="col-lg-6 col-md-6 col-12">
                <div className="box-input p-3 clearfix">
                  <label htmlFor="message" className="form-label clr-ab ft-wt2">
                    Message
                  </label>
                  <textarea
                    {...register("message")}
                    className="form-control"
                    id="message"
                    rows="1"
                    name="message"
                  ></textarea>
                </div>
              </div>

              {/* reCAPTCHA v2 */}
              <div className="col-12 d-flex flex-column align-items-start px-3">
                <ReCAPTCHA
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITEKEY_KEY}
                  onChange={(token) => {
                    setRecaptchaToken(token);
                    setRecaptchaError(false);
                  }}
                />
                {recaptchaError && (
                  <span className="form-validation mt-2 text-danger">
                    Please verify that you are not a robot.
                  </span>
                )}
              </div>

              {/* Submit */}
              <div className="col-12 px-3 mt-3">
                <button
                  disabled={loading}
                  type="submit"
                  className="btn btn-brand"
                >
                  {loading ? <div className="loading-spinner"></div> : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
