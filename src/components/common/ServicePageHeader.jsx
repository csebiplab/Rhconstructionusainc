import React from "react";

const ServicePageHeader = ({ bg, title }) => {
  return (
    <section
      className="bg-cover bg-center bg-black/70 py-20"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="container text-center">
        <h1 className="text-white">{title}</h1>
      </div>
    </section>
  );
};

export default ServicePageHeader;
