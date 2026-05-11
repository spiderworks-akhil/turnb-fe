import React, { useState } from "react";

const BrochureViewer = ({ slug }) => {
  const pdfUrl = `/view/brochure/${slug}`;
  const [loadError, setLoadError] = useState(false);

  return (
    <div className="brochure-viewer-wrapper" data-aos="fade-up">
      {/* Success badge */}
      <div className="brochure-viewer-header" data-aos="fade-down">
        <div className="brochure-success-badge">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div>
          <h2 className="brochure-viewer-title">Here's Your Brochure</h2>
          <p className="brochure-viewer-subtitle">
            You can view, scroll, and download the brochure below.
          </p>
        </div>
      </div>

      {/* PDF Embed */}
      {loadError ? (
        <div className="brochure-load-error">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="#dc3545" strokeWidth="2" />
            <path d="M15 9L9 15M9 9L15 15" stroke="#dc3545" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <p>Unable to load the brochure. Please try downloading it directly.</p>
          <a
            href={pdfUrl}
            download
            className="brochure-download-btn btn"
          >
            Download Brochure
          </a>
        </div>
      ) : (
        <>
          <div className="brochure-pdf-frame-wrapper">
            <iframe
              src={pdfUrl}
              className="brochure-pdf-iframe"
              title="Brochure"
              onError={() => setLoadError(true)}
            />
          </div>

          {/* Download button */}
          <div className="brochure-actions">
            <a
              href={pdfUrl}
              download
              className="brochure-download-btn btn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7 10L12 15L17 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 15V3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Download Brochure
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default BrochureViewer;
