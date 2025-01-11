import React, { useEffect, useState } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Hero from "../common/Hero";
import { apiUrl, fileUrl } from "../common/http";
import { Link } from "react-router-dom";

const About = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  const AllServices = async () => {
    try {
      const res = await fetch(apiUrl + "all-services", {
        method: "GET",
      });

      const result = await res.json();
      setServices(result.data);
    } catch (error) {
      console.error("Failed to fetch services", error);
    } finally {
      setLoading(false); // Stop loading regardless of success or failure
    }
  };

  useEffect(() => {
    AllServices();
  }, []);

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
            {loading ? (
              // Show spinner while loading
              <div className="text-center py-5">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : (
              // Show services when loaded
              services.map((service) => (
                <div key={service.id} className="col-md-4 col-lg-3">
                  <div className="item mb-3">
                    <div className="service-image">
                      <img
                        src={fileUrl + "uploads/services/small/" + service.image}
                        className="w-100"
                        alt={service.title}
                      />
                    </div>
                    <div className="service-body">
                      <div className="service-title">
                        <h3>{service.title}</h3>
                      </div>

                      <div className="service-content">
                        <p>{service.short_desc}</p>
                      </div>
                      <Link to={`/service/${service.id}`} className="btn btn-primary">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
