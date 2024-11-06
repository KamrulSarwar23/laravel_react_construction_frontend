import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Hero from "../common/Hero";

const About = () => {
  return (
    <div>
      <Header />

      <Hero
        preHeading="Quality, Integrity, Value"
        heading="Contact Us"
        text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Fugit
              consequatur atque quos est quibusdam officiis!"
      />

      <section className="section-10 py-5">
        <div className="container">
          <div className="section-header text-center mb-5">
            <h2>Contact Us</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              consequatur atque quos est quibusdam officiis!
            </p>
          </div>

          <div className="row">
            <div className="col-md-3 mb-4">
              <div className="card shadow border-0">
                <div className="card-body p-4">
                  <h4>Call Us</h4>

                  <div>
                    <a href="#">(01851-939223)</a>
                  </div>

                  <div className="mb-4">
                    <a href="#">(01646-669099)</a>
                  </div>

                  <h4>You Can Write Us</h4>

                  <div>
                    <a href="#">kh4035209@gmail.com</a>
                  </div>

                  <div className="mb-4">
                    <a href="#">kamrul939223@gmail.com</a>
                  </div>

                  <h4>Address</h4>
                  <p>Chittagong, Bangladesh</p>
                </div>
              </div>
            </div>

            <div className="col-md-9">
              <div className="card shadow border-0 p-5">
                <form action="">
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <label htmlFor="" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Name"
                      />
                    </div>

                    <div className="col-md-6 mb-4">
                      <label htmlFor="" className="form-label">
                        Email
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Email"
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <label htmlFor="" className="form-label">
                        Phone
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Phone"
                      />
                    </div>

                    <div className="col-md-6 mb-4">
                      <label htmlFor="" className="form-label">
                        Subject
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Subject"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="" className="form-label">
                      Message
                    </label>
                    <textarea className="form-control form-control-lg" rows={4} name="" id="" placeholder="Write Your Message"></textarea>
                  </div>

                  <button className="btn btn-primary mt-3">Submit</button>
                </form>
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
