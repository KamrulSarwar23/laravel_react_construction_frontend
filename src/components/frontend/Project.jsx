import React, { useEffect, useState } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Hero from "../common/Hero";
import { apiUrl, fileUrl } from "../common/http";
import { Link } from "react-router-dom";

const About = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  const AllProjects = async () => {
    try {
      const res = await fetch(apiUrl + "all-projects", {
        method: "GET",
      });

      if (!res.ok) {
        throw new Error("Failed to fetch projects");
      }

      const result = await res.json();
      setProjects(result.data);
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false); // Stop loading regardless of success or failure
    }
  };

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
            {loading ? (
              // Show a spinner while data is loading
              <div className="text-center py-5">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : projects.length > 0 ? (
              // Display projects when loaded
              projects.map((project) => (
                <div key={project.id} className="col-md-4 col-lg-3">
                  <div className="item mb-3">
                    <div className="service-image">
                      <img
                        src={fileUrl + "uploads/projects/small/" + project.image}
                        className="w-100"
                        alt={project.title}
                      />
                    </div>
                    <div className="service-body">
                      <div className="service-title">
                        <h3>{project.title}</h3>
                      </div>

                      <div className="service-content">
                        <p>{project.short_desc}</p>
                      </div>
                      {/* Replace href="#" with a valid link to a project details page */}
                      <Link to={`/project/${project.id}`} className="btn btn-primary">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              // Handle case where no projects are found
              <div className="text-center py-5">
                <h4>No projects available at the moment.</h4>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
