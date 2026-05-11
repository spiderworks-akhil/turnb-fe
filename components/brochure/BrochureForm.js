import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";

const BrochureForm = ({ slug, brochureUrl, onSuccess }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState("");
  const [recaptchaError, setRecaptchaError] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const onSubmit = async (details) => {
    if (!recaptchaToken) {
      setRecaptchaError(true);
      return;
    }

    setLoading(true);
    setSubmitError("");

    const slugLower = slug?.toLowerCase() || "";
    const lead_type = slugLower.includes("scan") ? "ScanB" : "TurnB";

    const dataToSubmit = {
      name: details.name,
      email: details.email,
      company_name: details.company_name || null,
      brochure_file: slug,
      brochure_url: brochureUrl ? `${window.location.origin}${brochureUrl}` : null,
      lead_type,
      recaptcha_token: recaptchaToken,
    };

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_PATH}brochure-lead/save`,
        dataToSubmit
      );

      if (response?.status === 200 || response?.status === 201) {
        reset();
        setRecaptchaToken("");

        // Set a short-lived cookie so the protected PDF API route allows access
        const cookieName = `brochure_access_${slug.replace(/-/g, "_")}`;
        const maxAge = 60 * 60; // 1 hour
        document.cookie = `${cookieName}=granted; path=/; max-age=${maxAge}; SameSite=Strict`;

        onSuccess();
      }
    } catch (error) {
      console.error("Brochure lead submission error:", error);
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="brochure-form-wrapper">
      <div className="brochure-form-header" data-aos="fade-down">
        <div className="brochure-form-icon">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="#018381" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14 2V8H20" stroke="#018381" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16 13H8" stroke="#018381" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16 17H8" stroke="#018381" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10 9H9H8" stroke="#018381" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h2 className="brochure-form-title">Access Your Brochure</h2>
        <p className="brochure-form-subtitle">
          Fill in your details below to instantly view the brochure.
        </p>
      </div>

      <div className="brochure-form-card" data-aos="fade-up">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="row g-3"
          role="form"
          noValidate
        >
          {/* Full Name */}
          <div className="col-12">
            <div className="brochure-field">
              <label htmlFor="brochure_name" className="brochure-label">
                Full Name <span className="required-star">*</span>
              </label>
              <input
                {...register("name", {
                  required: "Full name is required",
                })}
                type="text"
                className={`brochure-input form-control ${errors.name ? "is-invalid" : ""}`}
                id="brochure_name"
                placeholder="Enter your full name"
              />
              {errors.name && (
                <span className="brochure-error">{errors.name.message}</span>
              )}
            </div>
          </div>

          {/* Email */}
          <div className="col-12">
            <div className="brochure-field">
              <label htmlFor="brochure_email" className="brochure-label">
                Email Address <span className="required-star">*</span>
              </label>
              <input
                {...register("email", {
                  required: "Email address is required",
                  pattern: {
                    value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: "Please enter a valid email address",
                  },
                })}
                type="email"
                className={`brochure-input form-control ${errors.email ? "is-invalid" : ""}`}
                id="brochure_email"
                placeholder="Enter your email address"
              />
              {errors.email && (
                <span className="brochure-error">{errors.email.message}</span>
              )}
            </div>
          </div>

          {/* Company Name (Optional) */}
          <div className="col-12">
            <div className="brochure-field">
              <label htmlFor="brochure_company" className="brochure-label">
                Company Name{" "}
                <span className="optional-tag">(Optional)</span>
              </label>
              <input
                {...register("company_name")}
                type="text"
                className="brochure-input form-control"
                id="brochure_company"
                placeholder="Enter your company name"
              />
            </div>
          </div>

          {/* reCAPTCHA */}
          <div className="col-12">
            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITEKEY_KEY}
              onChange={(token) => {
                setRecaptchaToken(token);
                setRecaptchaError(false);
              }}
            />
            {recaptchaError && (
              <span className="brochure-error mt-1 d-block">
                Please verify that you are not a robot.
              </span>
            )}
          </div>

          {/* Global error */}
          {submitError && (
            <div className="col-12">
              <div className="brochure-submit-error">{submitError}</div>
            </div>
          )}

          {/* Submit */}
          <div className="col-12">
            <button
              type="submit"
              className="brochure-submit-btn btn"
              disabled={loading}
            >
              {loading ? (
                <span className="d-flex align-items-center justify-content-center gap-2">
                  <div className="loading-spinner" />
                  Processing…
                </span>
              ) : (
                <span className="d-flex align-items-center justify-content-center gap-2">
                  {/* <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg> */}
                  View Brochure
                </span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BrochureForm;
