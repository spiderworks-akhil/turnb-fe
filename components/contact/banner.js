import React from 'react';

const ContactBanner = () => {
  return (
    <div className="banner">
      <img 
        alt="TurnB Banner Desktop" 
        className="d-block img-fluid d-lg-block d-md-none" 
        src="/img/banners/TurnBcontactdesktop.jpg" 
      />
      <img 
        alt="TurnB Banner Mobile" 
        className="d-block img-fluid d-lg-none d-md-block" 
        src="/img/banners/TurnBcontactmobile.jpg" 
      />
    </div>
  );
};

export default ContactBanner;
