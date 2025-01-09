import React, { useEffect, useState } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Aboutus from "../common/Aboutus";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import AvatarImg from "../../assets/images/author-2.jpg";
import Service1 from "../../assets/images/construction1.jpg";
import Service2 from "../../assets/images/construction2.jpg";
import Service3 from "../../assets/images/construction3.jpg";
import Service4 from "../../assets/images/construction4.jpg";
import project1 from "../../assets/images/construction5.jpg";

import Icon1 from "../../assets/images/icon-1.svg";
import Icon2 from "../../assets/images/icon-2.svg";
import Icon3 from "../../assets/images/icon-3.svg";
import { apiUrl, fileUrl } from "../common/http";

const Home = () => {

  const [services, setServices] = useState([]);
  const [projects, setProjects] = useState([]);
  const [articles, setArticles] = useState([]);

  const LatestServices = async () => {
    const res = await fetch(apiUrl + "latest-services", {
      method: "GET"
    });

    const result = await res.json();
    setServices(result.data);
  }

  const LatestProjects = async () => {
    const res = await fetch(apiUrl + "latest-projects", {
      method: "GET"
    });

    const result = await res.json();
    setProjects(result.data);
  }

  const LatestArticles = async () => {
    const res = await fetch(apiUrl + "latest-articles", {
      method: "GET"
    });

    const result = await res.json();
    setArticles(result.data);
  }

  useEffect(() => {
    LatestServices();
    LatestProjects();
    LatestArticles();
  }, []);

  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="section-1">
          <div className="hero d-flex align-items-center py-5">
            <div className="container-fluid">
              <div className="text-center">
                <span>Welcome To Amazing Construction</span>

                <h1>
                  Crafting dreams with <br /> precision and excellence.{" "}
                </h1>

                <p>
                  We excel transforming visions into reality through outstanding
                  craftsmanship and precise attention to detail. With years of
                  experience and a dedication to quality
                </p>

                <div className="mt-4">
                  <Link to='/contact-us' className="btn btn-primary me-2">Contact now</Link>
                  <Link to='/projects' className="btn btn-secondary">View Projects</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <Aboutus />

        {/* Services Section */}

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
                  return (
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

        {/* Why Choose Us  Section */}
        <section className="section-4 py-5">
          <div className="container py-5">
            <div className="section-header text-center">
              <span>Why Choose Us</span>
              <h2>Discover our wide variety of projects.</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                consequatur atque quos est quibusdam officiis!
              </p>
            </div>

            <div className="row mt-5">
              <div className="col-md-4">
                <div className="card shadow border-0 p-4 mb-3">
                  <div className="card-icon ">
                    <img src={Icon1} alt="" />
                  </div>

                  <div className="card-title mt-3">
                    <h3>Cutting Edge Solutions</h3>
                  </div>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magni, amet alias fugiat perferendis nisi nulla ratione
                    provident pariatur saepe et.
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card shadow border-0 p-4 mb-3">
                  <div className="card-icon ">
                    <img src={Icon2} alt="" />
                  </div>

                  <div className="card-title mt-3">
                    <h3>Cutting Edge Solutions</h3>
                  </div>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magni, amet alias fugiat perferendis nisi nulla ratione
                    provident pariatur saepe et.
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card shadow border-0 p-4">
                  <div className="card-icon ">
                    <img src={Icon3} alt="" />
                  </div>

                  <div className="card-title mt-3">
                    <h3>Cutting Edge Solutions</h3>
                  </div>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magni, amet alias fugiat perferendis nisi nulla ratione
                    provident pariatur saepe et.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Project Section */}
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
              {projects && projects.map(project => {

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

              })}




            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="section-6 py-5">
          <div className="container py-5">
            <div className="section-header text-center">
              <span>Testimonials</span>
              <h2>What people are saying about us</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                consequatur atque quos est quibusdam officiis!
              </p>
            </div>

            <div className="row">
              <Swiper
                modules={[Pagination]}
                spaceBetween={50}
                slidesPerView={3}
                breakpoints={{
                  320: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1200: { slidesPerView: 3 },
                }}
                pagination={{ clickable: true }}
              >
                <SwiperSlide>
                  <div className="card shadow border-0">
                    <div className="card-body p-5">
                      <div className="rating">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                      </div>

                      <div className="content pt-3">
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Tempore fugit molestiae nostrum sit culpa illo
                          ipsum necessitatibus praesentium perferendis veritatis
                          quibusdam, nisi, tenetur aspernatur vero at dicta
                          aliquid deleniti ea.
                        </p>
                      </div>
                      <hr />

                      <div className="d-flex meta">
                        <div>
                          <img
                            src={AvatarImg}
                            width={60}
                            alt=""
                            className="me-3"
                          />
                        </div>

                        <div>
                          <div className="name">John Doe</div>
                          <div>CEO</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="card shadow border-0">
                    <div className="card-body p-5">
                      <div className="rating">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                      </div>

                      <div className="content pt-3">
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Tempore fugit molestiae nostrum sit culpa illo
                          ipsum necessitatibus praesentium perferendis veritatis
                          quibusdam, nisi, tenetur aspernatur vero at dicta
                          aliquid deleniti ea.
                        </p>
                      </div>
                      <hr />

                      <div className="d-flex meta">
                        <div>
                          <img
                            src={AvatarImg}
                            width={60}
                            alt=""
                            className="me-3"
                          />
                        </div>

                        <div>
                          <div className="name">John Doe</div>
                          <div>CEO</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="card shadow border-0">
                    <div className="card-body p-5">
                      <div className="rating">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                      </div>

                      <div className="content pt-3">
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Tempore fugit molestiae nostrum sit culpa illo
                          ipsum necessitatibus praesentium perferendis veritatis
                          quibusdam, nisi, tenetur aspernatur vero at dicta
                          aliquid deleniti ea.
                        </p>
                      </div>
                      <hr />

                      <div className="d-flex meta">
                        <div>
                          <img
                            src={AvatarImg}
                            width={60}
                            alt=""
                            className="me-3"
                          />
                        </div>

                        <div>
                          <div className="name">John Doe</div>
                          <div>CEO</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="card shadow border-0">
                    <div className="card-body p-5">
                      <div className="rating">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                      </div>

                      <div className="content pt-3">
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Tempore fugit molestiae nostrum sit culpa illo
                          ipsum necessitatibus praesentium perferendis veritatis
                          quibusdam, nisi, tenetur aspernatur vero at dicta
                          aliquid deleniti ea.
                        </p>
                      </div>
                      <hr />

                      <div className="d-flex meta">
                        <div>
                          <img
                            src={AvatarImg}
                            width={60}
                            alt=""
                            className="me-3"
                          />
                        </div>

                        <div>
                          <div className="name">John Doe</div>
                          <div>CEO</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>

        {/* Blog and Article Section */}
        <section className="section-7 py-5 bg-light">
          <div className="container py-5">
            <div className="section-header text-center">
              <span>Blog and News</span>
              <h2>Article and Blog Posts</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                consequatur atque quos est quibusdam officiis!
              </p>
            </div>

            <div className="row pt-4">
                {
                  articles && articles.map(artile => {
                    return (
                      <div className="col-md-4 col-lg-3">
                      <div className="card shadow border-0 mb-3">
                        <div className="card-img-top">
                          <img src={fileUrl + 'uploads/articles/small/' + artile.image} alt="" className="w-100" height="250px" />
                        </div>
      
                        <div className="card-body p-4">
                          <div className="mb-3">
                            <a className="title" href="">
                              {artile.title}
                            </a>
                          </div>
      
                          <a className="btn btn-primary" href="">
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

      </main>

      <Footer />
    </>
  );
};

export default Home;
