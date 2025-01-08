import React, { useEffect, useState } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Hero from "../common/Hero";
import Service1 from "../../assets/images/construction1.jpg";
import Service2 from "../../assets/images/construction2.jpg";
import Service3 from "../../assets/images/construction3.jpg";
import Service4 from "../../assets/images/construction4.jpg";
import { apiUrl, fileUrl } from "../common/http";

const About = () => {

  const [services, setServices] = useState([]);

  const AllServices = async () => {
       const res = await fetch(apiUrl + "all-services", {
            method: "GET"
          });

          const result = await res.json();
          setServices(result.data);
  }

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
              {
                services && services.map(service => {
                return  (
                    <div key={service.id} className="col-md-4 col-lg-3">
                    <div className="item mb-3">
                      <div className="service-image">
                        <img src={fileUrl + 'uploads/services/small/' + service.image} className="w-100" alt="" />
                      </div>
                      <div className="service-body">
                        <div className="service-title">
                          <h3>{service.title}</h3>
                        </div>
      
                        <div className="service-content">
                          <p>
                          {service.short_desc}
                          </p>
                        </div>
                        <a href="#" className="btn btn-primary">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                  )
                })
              }
    


          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
