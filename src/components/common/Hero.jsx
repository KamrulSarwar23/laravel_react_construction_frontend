import React from "react";

const Hero = ({preHeading, heading, text}) => {
  return (
    <section className="aboutus">
      <div className="container">
        <div className="hero-content">
          <span className="aboutspan">{preHeading}</span>
          <h2>{heading}</h2>
          <p dangerouslySetInnerHTML={{__html:text}}>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
