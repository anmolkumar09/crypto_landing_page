import React from "react";

const Footer = ({ img, heading1, p1, p2, p3, mainheading }) => {
  return (
    <div>
      <div className="footer_container">
        <div className="wrapper">
          <h2>{mainheading}</h2>
          <div className="img">
            <img src={img} />
          </div>
          <div>
            <h2>{heading1}</h2>
            <p>{p1}</p>
            <p>{p2}</p>
            <p>{p3}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
