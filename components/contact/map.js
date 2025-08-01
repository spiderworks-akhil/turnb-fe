import React, { useState, useEffect } from "react";
import { EmailIcon, LocationIcon, MapIcon, PhoneIcon } from "../common/Button";

const ContactMap = ({ data }) => {
  const [activeMap, setActiveMap] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Google Maps embed HTML for each location (thumbnail version)
  const thumbnailMapEmbeds = [
    // India (thumbnail)
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.982337878925!2d76.3122141!3d10.01457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d16416c0561%3A0xa10e22f2384d279c!2sTurnB%20Business%20Services%20Pvt.%20Ltd!5e0!3m2!1sen!2sin!4v1714567890123!5m2!1sen!2sin" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,

    // UAE (thumbnail)
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.963734593156!2d55.2553689!3d25.1876791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69b62bb21f23%3A0x56ec2a0deb76431!2sRAG%20Biz%20HQ%20%7C%20Business%20Centre%20in%20Dubai!5e0!3m2!1sen!2sin!4v1714567890123!5m2!1sen!2sin" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,

    // Kenya (thumbnail)
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8184789999997!2d36.7741101!3d-1.2615271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1741d31fd0ad%3A0xf3cb5f9c6366d57c!2sNanosoft%20Technologies%20Ltd!5e0!3m2!1sen!2sin!4v1714567890123!5m2!1sen!2sin" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
  ];

  // Google Maps embed HTML for each location (full size version)
  const fullMapEmbeds = [
    // India (full size)
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.982337878925!2d76.3122141!3d10.01457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d16416c0561%3A0xa10e22f2384d279c!2sTurnB%20Business%20Services%20Pvt.%20Ltd!5e0!3m2!1sen!2sin!4v1714567890123!5m2!1sen!2sin" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,

    // UAE (full size)
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.963734593156!2d55.2553689!3d25.1876791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69b62bb21f23%3A0x56ec2a0deb76431!2sRAG%20Biz%20HQ%20%7C%20Business%20Centre%20in%20Dubai!5e0!3m2!1sen!2sin!4v1714567890123!5m2!1sen!2sin" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,

    // Kenya (full size)
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8184789999997!2d36.7741101!3d-1.2615271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1741d31fd0ad%3A0xf3cb5f9c6366d57c!2sNanosoft%20Technologies%20Ltd!5e0!3m2!1sen!2sin!4v1714567890123!5m2!1sen!2sin" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
  ];

  // Google Maps URLs for each location (for mobile redirect)
  const mapUrls = [
    "https://www.google.com/maps/place/TurnB+Business+Services+Pvt.+Ltd/@10.01457,76.3122141,858m/data=!3m3!1e3!4b1!5s0x3b080d0137593b99:0x474b878e693efd34!4m6!3m5!1s0x3b080d16416c0561:0xa10e22f2384d279c!8m2!3d10.01457!4d76.3122141!16s%2Fg%2F11fzbpttgm?entry=ttu&g_ep=EgoyMDI1MDcyOS4wIKXMDSoASAFQAw%3D%3D",
    "https://www.google.com/maps/place/RAG+Biz+HQ+%7C+Business+Centre+in+Dubai/@25.1876791,55.2553689,788m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3e5f69b62bb21f23:0x56ec2a0deb76431!8m2!3d25.1876791!4d55.2553689!16s%2Fg%2F11y1n9sc5z?entry=ttu&g_ep=EgoyMDI1MDcyOS4wIKXMDSoASAFQAw%3D%3D",
    "https://www.google.com/maps/place/Nanosoft+Technologies+Ltd/@-1.2615271,36.7741101,17z/data=!3m1!4b1!4m6!3m5!1s0x182f1741d31fd0ad:0xf3cb5f9c6366d57c!8m2!3d-1.2615325!4d36.776685!16s%2Fg%2F1yg4v8_4n?entry=tts&g_ep=EgoyMDI1MDcyOC4wIPu8ASoASAFQAw%3D%3D&skid=f68c256a-af77-4f11-ab18-567648c38450",
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMapChange = (index) => {
    if (isMobile) {
      // On mobile, redirect to Google Maps
      window.open(mapUrls[index], "_blank");
      return;
    }

    // On desktop, show the map with transition
    if (transitioning || activeMap === index) return;

    setTransitioning(true);
    setTimeout(() => {
      setActiveMap(index);
      setTransitioning(false);
    }, 300);
  };

  return (
    <div className="container">
      <div className="row mt-lg-5 mt-md-5 mt-3 pb-5 contact-map-block justify-content-center">
        {/* First Location - India */}
        <div className="col-lg-4 col-md-6 col-12">
          <div
            className={`contact-map-block-item ${
              activeMap === 0 ? "active-map" : ""
            }`}
          >
            <h3>INDIA</h3>
            <ul>
              <li>
                <LocationIcon />
                <p>Level 3, Oberon Mall, Edapally, Cochin - 682024</p>
              </li>
              <li>
                <PhoneIcon />
                <a
                  href="tel:+91 95675 57556"
                  style={{ textDecoration: "none" }}
                >
                  +91 95675 57556
                </a>
              </li>
              <li>
                <EmailIcon />
                <a
                  href="mailto:reachus@turnb.com"
                  className="clr-ab"
                  style={{ textDecoration: "none" }}
                >
                  reachus@turnb.com
                </a>
              </li>
            </ul>
            <div className="view-map-block">
              <div className="view-map-img">
                <div
                  dangerouslySetInnerHTML={{ __html: thumbnailMapEmbeds[0] }}
                  style={{ width: "100%", height: "300px" }}
                />
              </div>
              <div className="map-btn" onClick={() => handleMapChange(0)}>
                View on Map <MapIcon />
              </div>
            </div>
          </div>
        </div>

        {/* Second Location - UAE */}
        <div className="col-lg-4 col-md-6 col-12">
          <div
            className={`contact-map-block-item ${
              activeMap === 1 ? "active-map" : ""
            }`}
          >
            <h3>UAE</h3>
            <ul>
              <li>
                <LocationIcon />
                <p>Rag Biz HQ, Addiyar Building, Sheikh Zayed Road - 237951</p>
              </li>
              <li>
                <PhoneIcon />
                <a
                  href="tel:+971 50 607 5355"
                  style={{ textDecoration: "none" }}
                >
                  +971 50 607 5355
                </a>
              </li>
              <li>
                <EmailIcon />
                <a
                  href="mailto:reachus@turnb.com"
                  className="clr-ab"
                  style={{ textDecoration: "none" }}
                >
                  reachus@turnb.com
                </a>
              </li>
            </ul>
            <div className="view-map-block">
              <div className="view-map-img">
                <div
                  dangerouslySetInnerHTML={{ __html: thumbnailMapEmbeds[1] }}
                  style={{ width: "100%", height: "300px" }}
                />
              </div>
              <div className="map-btn" onClick={() => handleMapChange(1)}>
                View on Map <MapIcon />
              </div>
            </div>
          </div>
        </div>

        {/* Third Location - Kenya */}
        <div className="col-lg-4 col-md-6 col-12">
          <div
            className={`contact-map-block-item ${
              activeMap === 2 ? "active-map" : ""
            }`}
          >
            <h3>Kenya</h3>
            <ul>
              <li>
                <LocationIcon />
                <p>Kanjata Road, Lavington, Nairobi</p>
              </li>
              <li>
                <PhoneIcon />
                <a
                  href="tel:+254 734 818 350"
                  style={{ textDecoration: "none" }}
                >
                  +254 734 818 350
                </a>
              </li>
              <li>
                <EmailIcon />
                <a
                  href="mailto:info@ntlafrica.com"
                  className="clr-ab"
                  style={{ textDecoration: "none" }}
                >
                  info@ntlafrica.com
                </a>
              </li>
            </ul>
            <div className="view-map-block">
              <div className="view-map-img">
                <div
                  dangerouslySetInnerHTML={{ __html: thumbnailMapEmbeds[2] }}
                  style={{ width: "100%", height: "300px" }}
                />
              </div>
              <div className="map-btn" onClick={() => handleMapChange(2)}>
                View on Map <MapIcon />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Display Area - Hidden on mobile */}
      {!isMobile && (
        <div className="contact-map-block-tab-map">
          <div
            className={`map-transition-container ${
              transitioning ? "fade-out" : "fade-in"
            }`}
          >
            <div
              className="map-iframe-container"
              style={{
                width: "100%",
                height: "350px", // Adjust height as needed
                position: "relative",
                overflow: "hidden",
              }}
              dangerouslySetInnerHTML={{ __html: fullMapEmbeds[activeMap] }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactMap;
