import React, { useState } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Hero from "../common/Hero";
import { useForm } from "react-hook-form";
import { apiUrl } from "../common/http";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); // State for loading spinner
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true); // Start loading
    try {
      const res = await fetch(apiUrl + "contact-now", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.status) {
        toast.success(result.message);
        reset();
        navigate("/contact-us");
      } else {
        if (result.errors) {
          toast.error(result.errors);
        }
        toast.error(result.message);
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

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
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row">

                    <div className="col-md-6 mb-4">
                      <label htmlFor="name" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        {...register("name", {
                          required: "The name field is required",
                        })}
                        className={`form-control ${errors.name && "is-invalid"}`}
                        placeholder="Enter Name"
                      />
                      {errors.name && (
                        <p className="invalid-feedback">{errors.name.message}</p>
                      )}
                    </div>

                    <div className="col-md-6 mb-4">
                      <label htmlFor="" className="form-label">
                        Email
                      </label>

                      <input
                        type="text"
                        {...register("email", {
                          required: "This Email Field is Required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Please enter a valid email address",
                          },
                        })}
                        className={`form-control ${errors.email && "is-invalid"}`}
                        placeholder="Enter Email"
                      />

                      {errors.email && (
                        <p className="invalid-feedback">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <label htmlFor="" className="form-label">
                        Phone
                      </label>
                      <input
                        type="text"
                        {...register("phone")}
                        className="form-control"
                        placeholder="Enter Phone"
                      />
                    </div>

                    <div className="col-md-6 mb-4">
                      <label htmlFor="subject" className="form-label">
                        Subject
                      </label>

                      <input
                        type="text"
                        {...register("subject")}
                        className="form-control"
                        placeholder="Enter Subject"
                        id="subject"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>
                    <textarea
                      {...register("message", {
                        required: "The message field is required", // Add validation if needed
                      })}
                      className={`form-control form-control-lg ${errors.message && "is-invalid"
                        }`}
                      rows={4}
                      id="message"
                      placeholder="Write Your Message"
                    ></textarea>
                    {errors.message && (
                      <p className="invalid-feedback">{errors.message.message}</p>
                    )}
                  </div>


                  <button
                    type="submit"
                    className="btn btn-primary mt-3"
                    disabled={loading} // Disable button when loading
                  >
                    {loading ? (
                      <span
                        className="spinner-border spinner-border-sm me-2"
                        role="status"
                        aria-hidden="true"
                      ></span>
                    ) : null}
                    Submit
                  </button>

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
