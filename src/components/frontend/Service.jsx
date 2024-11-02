import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Hero from "../common/Hero";
import Service1 from "../../assets/images/construction1.jpg";
import Service2 from "../../assets/images/construction2.jpg";
import Service3 from "../../assets/images/construction3.jpg";
import Service4 from "../../assets/images/construction4.jpg";

const About = () => {
  return (
    <div>
      <Header />

      <Hero
        preHeading="Quality, Integrity, Value"
        heading="Our Services"
        text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Fugit
              consequatur atque quos est quibusdam officiis!"
      />

      <section className="section-3 bg-light py-5">
        <div className="container py-5">
          <div className="section-header text-center">
            <span>Our Services</span>
            <h2>Our Construction Services</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              consequatur atque quos est quibusdam officiis!
            </p>
          </div>

          <div className="row mt-5">
            <div className="col-md-4 col-lg-3">
              <div className="item mb-3">
                <div className="service-image">
                  <img src={Service1} className="w-100" alt="" />
                </div>
                <div className="service-body">
                  <div className="service-title">
                    <h3>Speciality Construction</h3>
                  </div>

                  <div className="service-content">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                    </p>
                  </div>
                  <a href="#" className="btn btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-lg-3">
              <div className="item mb-3">
                <div className="service-image">
                  <img src={Service2} className="w-100" alt="" />
                </div>
                <div className="service-body">
                  <div className="service-title">
                    <h3>Speciality Construction</h3>
                  </div>

                  <div className="service-content">
                    <p>
                      orem ipsum dolor sit amet consectetur adipisicing elit
                    </p>
                  </div>
                  <a href="#" className="btn btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-lg-3">
              <div className="item mb-3">
                <div className="service-image">
                  <img src={Service3} className="w-100" alt="" />
                </div>
                <div className="service-body">
                  <div className="service-title">
                    <h3>Speciality Construction</h3>
                  </div>

                  <div className="service-content">
                    <p>
                      orem ipsum dolor sit amet consectetur adipisicing elit
                    </p>
                  </div>
                  <a href="#" className="btn btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-lg-3">
              <div className="item mb-3">
                <div className="service-image">
                  <img src={Service4} className="w-100" alt="" />
                </div>
                <div className="service-body">
                  <div className="service-title">
                    <h3>Speciality Construction</h3>
                  </div>

                  <div className="service-content">
                    <p>
                      orem ipsum dolor sit amet consectetur adipisicing elit
                    </p>
                  </div>
                  <a href="#" className="btn btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-4 col-lg-3">
              <div className="item mb-3">
                <div className="service-image">
                  <img src={Service1} className="w-100" alt="" />
                </div>
                <div className="service-body">
                  <div className="service-title">
                    <h3>Speciality Construction</h3>
                  </div>

                  <div className="service-content">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                    </p>
                  </div>
                  <a href="#" className="btn btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-lg-3">
              <div className="item mb-3">
                <div className="service-image">
                  <img src={Service2} className="w-100" alt="" />
                </div>
                <div className="service-body">
                  <div className="service-title">
                    <h3>Speciality Construction</h3>
                  </div>

                  <div className="service-content">
                    <p>
                      orem ipsum dolor sit amet consectetur adipisicing elit
                    </p>
                  </div>
                  <a href="#" className="btn btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-lg-3">
              <div className="item mb-3">
                <div className="service-image">
                  <img src={Service3} className="w-100" alt="" />
                </div>
                <div className="service-body">
                  <div className="service-title">
                    <h3>Speciality Construction</h3>
                  </div>

                  <div className="service-content">
                    <p>
                      orem ipsum dolor sit amet consectetur adipisicing elit
                    </p>
                  </div>
                  <a href="#" className="btn btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-lg-3">
              <div className="item mb-3">
                <div className="service-image">
                  <img src={Service4} className="w-100" alt="" />
                </div>
                <div className="service-body">
                  <div className="service-title">
                    <h3>Speciality Construction</h3>
                  </div>

                  <div className="service-content">
                    <p>
                      orem ipsum dolor sit amet consectetur adipisicing elit
                    </p>
                  </div>
                  <a href="#" className="btn btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
