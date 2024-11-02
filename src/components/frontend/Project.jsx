import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Hero from "../common/Hero";
import project1 from "../../assets/images/construction5.jpg";
import project2 from "../../assets/images/construction6.jpg";
import project3 from "../../assets/images/construction7.jpg";
import project4 from "../../assets/images/construction8.jpg";

const About = () => {
  return (
    <div>
      <Header />

      <Hero
        preHeading="Quality, Integrity, Value"
        heading="Our Project"
        text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Fugit
              consequatur atque quos est quibusdam officiis!"
      />

      <section className="section-5 bg-light py-5">
        <div className="container py-5">
          <div className="section-header text-center">
            <span>Our Projects</span>
            <h2>Our Construction Projects</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              consequatur atque quos est quibusdam officiis!
            </p>
          </div>

          <div className="row mt-5">
            <div className="col-md-4 col-lg-3">
              <div className="item mb-3">
                <div className="service-image">
                  <img src={project1} className="w-100" alt="" />
                </div>
                <div className="service-body">
                  <div className="service-title">
                    <h3>Project One</h3>
                  </div>

                  <div className="service-content">
                    <p>
                      orem ipsum, dolor sit amet consectetur adipisicing elit
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
                  <img src={project2} className="w-100" alt="" />
                </div>
                <div className="service-body">
                  <div className="service-title">
                    <h3>Project Two</h3>
                  </div>

                  <div className="service-content">
                    <p>
                      orem ipsum, dolor sit amet consectetur adipisicing elit
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
                  <img src={project3} className="w-100" alt="" />
                </div>
                <div className="service-body">
                  <div className="service-title">
                    <h3>Project Three</h3>
                  </div>

                  <div className="service-content">
                    <p>
                      orem ipsum, dolor sit amet consectetur adipisicing elit
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
                  <img src={project4} className="w-100" alt="" />
                </div>
                <div className="service-body">
                  <div className="service-title">
                    <h3>Project Four</h3>
                  </div>

                  <div className="service-content">
                    <p>
                      orem ipsum, dolor sit amet consectetur adipisicing elit
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
                  <img src={project1} className="w-100" alt="" />
                </div>
                <div className="service-body">
                  <div className="service-title">
                    <h3>Project One</h3>
                  </div>

                  <div className="service-content">
                    <p>
                      orem ipsum, dolor sit amet consectetur adipisicing elit
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
                  <img src={project2} className="w-100" alt="" />
                </div>
                <div className="service-body">
                  <div className="service-title">
                    <h3>Project Two</h3>
                  </div>

                  <div className="service-content">
                    <p>
                      orem ipsum, dolor sit amet consectetur adipisicing elit
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
                  <img src={project3} className="w-100" alt="" />
                </div>
                <div className="service-body">
                  <div className="service-title">
                    <h3>Project Three</h3>
                  </div>

                  <div className="service-content">
                    <p>
                      orem ipsum, dolor sit amet consectetur adipisicing elit
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
                  <img src={project4} className="w-100" alt="" />
                </div>
                <div className="service-body">
                  <div className="service-title">
                    <h3>Project Four</h3>
                  </div>

                  <div className="service-content">
                    <p>
                      orem ipsum, dolor sit amet consectetur adipisicing elit
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
