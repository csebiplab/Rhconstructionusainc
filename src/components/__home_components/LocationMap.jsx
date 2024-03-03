import React from "react";

const LocationMap = () => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12110.598375380569!2d-73.976968!3d40.637609!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b2c8251fb29%3A0xfd80b827e8bd8020!2sRH%20Construction%20usa%20inc!5e0!3m2!1sen!2sbd!4v1709399944375!5m2!1sen!2sbd"
        // width="100%"
        height="450"
        style={{ border: 0, width: "100%" }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default LocationMap;
