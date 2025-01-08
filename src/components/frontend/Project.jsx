import React, { useEffect, useState } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Hero from "../common/Hero";
import project1 from "../../assets/images/construction5.jpg";
import { apiUrl, fileUrl } from "../common/http";

const About = () => {

  const [projects, setProjects] = useState([]);

  const AllProjects = async () => {
    const res = await fetch(apiUrl + 'all-projects', {
        method: "GET"
    });

    const result = await res.json();
    setProjects(result.data);
  }

  useEffect(() => {
    AllProjects();
  }, []);

  return (
    <div>
      <Header />

      <Hero
        preHeading="Quality, Integrity, Value"
        heading="Our Projects"
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

            {
              projects && projects.map(project => {
                return (
                  <div key={project.id} className="col-md-4 col-lg-3">
                  <div className="item mb-3">
                    <div className="service-image">
                      <img src={fileUrl + 'uploads/projects/small/' + project.image} className="w-100" alt="" />
                    </div>
                    <div className="service-body">
                      <div className="service-title">
                        <h3>{project.title}</h3>
                      </div>
    
                      <div className="service-content">
                        <p>
                        {project.short_desc}
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
