import React, { useState, useEffect } from "react";
import { EmailIcon, LocationIcon, MapIcon, PhoneIcon } from "../common/Button";

const ContactMap = ({ data }) => {
  const contacts = data?.other_sections?.contact_locations || [];

  const [activeMap, setActiveMap] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 991);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMapChange = (index) => {
    const selected = contacts[index];
    if (!selected) return;

    // On mobile: open Google Maps link if available
    if (isMobile) {
      if (selected?.link) {
        window.open(selected.link, "_blank");
      } else if (selected?.map) {
        // fallback: open embedded map src if available
        const srcMatch = selected.map.match(/src="([^"]+)"/);
        if (srcMatch) window.open(srcMatch[1], "_blank");
      }
      return;
    }

    // On desktop: switch iframe
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
        {contacts.map((map, index) => (
          <div className="col-lg-4 col-md-6 col-12" key={map.id}>
            <div
              className={`contact-map-block-item ${activeMap === index ? "active-map" : ""
                }`}
            >
              <h3>{map?.name}</h3>

              <ul>
                {map?.address && (
                  <li>
                    <LocationIcon />
                    <p>{map?.address}</p>
                  </li>
                )}
                {map?.phone_number && (
                  <li>
                    <PhoneIcon />
                    <a href={`tel:${map.phone_number}`} style={{ textDecoration: "none" }}>
                      {map.phone_number}
                    </a>
                  </li>
                )}
                {map?.email && (
                  <li>
                    <EmailIcon />
                    <a
                      href={`mailto:${map.email}`}
                      className="clr-ab"
                      style={{ textDecoration: "none" }}
                    >
                      {map.email}
                    </a>
                  </li>
                )}
              </ul>

              {/* MObile ======= */}
              {map?.map && (
                <div className="view-map-block">
                  <div className="view-map-img">
                    <div
                      dangerouslySetInnerHTML={{ __html: map.map }}
                      style={{ width: "100%", height: "300px" }}
                    />
                  </div>
                  <div className="map-btn" onClick={() => handleMapChange(index)}>
                    View on Map <MapIcon />
                  </div>
                </div>
              )}


            </div>
          </div>

        ))}
      </div>

      {!isMobile && contacts[activeMap]?.map && (
        <div className="contact-map-block-tab-map">
          <div
            className={`map-transition-container w-full  overflow-hidden ${transitioning ? "fade-out" : "fade-in"}`}
          >
            <div
              className="map-iframe-container w-full  "
              dangerouslySetInnerHTML={{ __html: contacts[activeMap]?.map }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactMap;
