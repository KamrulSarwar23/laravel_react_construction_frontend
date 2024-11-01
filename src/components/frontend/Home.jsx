import React from "react";
import AboutImg from "../../assets/images/about-us.jpg";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Service1 from "../../assets/images/construction1.jpg"
import Service2 from "../../assets/images/construction2.jpg"
import Service3 from "../../assets/images/construction3.jpg"
import Service4 from "../../assets/images/construction4.jpg"

import projectImg from "../../assets/images/construction5.jpg"

const Home = () => {
  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="section-1">
          <div className="hero d-flex align-items-center">
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
                  <a className="btn btn-primary me-2">Contact now</a>
                  <a className="btn btn-secondary">View Projects</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="section-2 py-5">
          <div className="container py-5">
            <div className="row">
              <div className="col-md-6">
                <img src={AboutImg} className="w-100" />
              </div>

              <div className="col-md-6">
                <span>about us</span>

                <h2>Crafting tructures that last a lifetime</h2>

                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using Content
                  here, content here, making it look like readable English.
                </p>

                <p>
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  lorem ipsum will uncover many web sites still in their
                  infancy. Various versions have evolved over the years,
                  sometimes by accident, sometimes on purpose.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* About Us Section */}
        <section className="section-3 bg-light py-5">
        <div className="container-fluid py-5">
          <div className="section-header text-center">
            <span>Our Services</span>
            <h2>Our Construction Services</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, animi!</p>
          </div>

          <div className="row mt-5">

              <div className="col-md-3 col-lg-3">
                  <div className="item">
                    <div className="service-image">
                  <img src={Service1} className="w-100" alt="" />
                    </div>
                    <div className="service-body">
                      <div className="service-title">
                        <h3>Speciality Construction</h3>
                      </div>

                      <div className="service-content">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus, laudantium. Nam veritatis quam eaque est!</p>
                      </div>
                      <a href="#" className="btn btn-primary">Read More</a>
                    </div>
                  </div>
              </div>

              <div className="col-md-3 col-lg-3">
                  <div className="item">
                    <div className="service-image">
                  <img src={Service2} className="w-100" alt="" />
                    </div>
                    <div className="service-body">
                      <div className="service-title">
                        <h3>Speciality Construction</h3>
                      </div>

                      <div className="service-content">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus, laudantium. Nam veritatis quam eaque est!</p>
                      </div>
                      <a href="#" className="btn btn-primary">Read More</a>
                    </div>
                  </div>
              </div>

              <div className="col-md-3 col-lg-3">
                  <div className="item">
                    <div className="service-image">
                  <img src={Service3} className="w-100" alt="" />
                    </div>
                    <div className="service-body">
                      <div className="service-title">
                        <h3>Speciality Construction</h3>
                      </div>

                      <div className="service-content">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus, laudantium. Nam veritatis quam eaque est!</p>
                      </div>
                      <a href="#" className="btn btn-primary">Read More</a>
                    </div>
                  </div>
              </div>

              <div className="col-md-3 col-lg-3">
                  <div className="item">
                    <div className="service-image">
                  <img src={Service4} className="w-100" alt="" />
                    </div>
                    <div className="service-body">
                      <div className="service-title">
                        <h3>Speciality Construction</h3>
                      </div>

                      <div className="service-content">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus, laudantium. Nam veritatis quam eaque est!</p>
                      </div>
                      <a href="#" className="btn btn-primary">Read More</a>
                    </div>
                  </div>
              </div>
          </div>

        </div>

        </section>


      <section className="section-4">
   <div className="container">
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam aut distinctio sunt. Recusandae aliquam aut ipsa tenetur. A totam ipsum temporibus commodi ad nobis! Reiciendis, vitae eveniet. Voluptas, fuga. Ducimus sunt voluptate ad vero error optio est quos! Nobis earum, vel et sint optio asperiores illo voluptate distinctio nulla commodi soluta dolore unde consectetur illum harum architecto ipsum incidunt quas corporis inventore consequatur sit adipisci sunt. Pariatur repudiandae ipsam sit aspernatur quo officiis dicta architecto molestiae placeat repellat alias exercitationem cupiditate voluptates commodi id consequatur veniam fugit asperiores, quia error, voluptatem amet est mollitia numquam. Facilis ipsam laboriosam dolorum iste cupiditate quia eligendi molestias dignissimos expedita alias architecto ducimus sit officia ea atque deleniti provident tempore soluta, quisquam ex itaque modi enim minus autem? Distinctio adipisci provident non explicabo nisi eveniet aliquid, tempora quam nemo velit quia amet. Provident mollitia quas officia illum blanditiis voluptates est. Explicabo distinctio vero temporibus nihil mollitia repudiandae ducimus nesciunt perspiciatis eius nulla nostrum nam sed earum iste aperiam, omnis corporis similique aspernatur expedita architecto? Ab, voluptatum ipsam reprehenderit architecto dolorum totam officiis accusamus ex quam. Dolorem fugiat est hic nemo possimus minima delectus odio, laudantium quisquam quas impedit dignissimos. Blanditiis provident sapiente neque assumenda!
   </div>
      </section>

           {/* Our Project Section */}
      <section className="section-5 bg-light py-5">
        <div className="container-fluid py-5">
          <div className="section-header text-center">
            <span>Our Projects</span>
            <h2>Our Construction Projects</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, animi!</p>
          </div>

          <div className="row mt-5">

              <div className="col-md-3 col-lg-3">
                  <div className="item">
                    <div className="service-image">
                  <img src={projectImg} className="w-100" alt="" />
                    </div>
                    <div className="service-body">
                      <div className="service-title">
                        <h3>Project One</h3>
                      </div>

                      <div className="service-content">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus, laudantium. Nam veritatis quam eaque est!</p>
                      </div>
                      <a href="#" className="btn btn-primary">Read More</a>
                    </div>
                  </div>
              </div>

              <div className="col-md-3 col-lg-3">
                  <div className="item">
                    <div className="service-image">
                  <img src={projectImg} className="w-100" alt="" />
                    </div>
                    <div className="service-body">
                      <div className="service-title">
                        <h3>Project Two</h3>
                      </div>

                      <div className="service-content">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus, laudantium. Nam veritatis quam eaque est!</p>
                      </div>
                      <a href="#" className="btn btn-primary">Read More</a>
                    </div>
                  </div>
              </div>

              <div className="col-md-3 col-lg-3">
                  <div className="item">
                    <div className="service-image">
                  <img src={projectImg} className="w-100" alt="" />
                    </div>
                    <div className="service-body">
                      <div className="service-title">
                        <h3>Project Three</h3>
                      </div>

                      <div className="service-content">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus, laudantium. Nam veritatis quam eaque est!</p>
                      </div>
                      <a href="#" className="btn btn-primary">Read More</a>
                    </div>
                  </div>
              </div>

              <div className="col-md-3 col-lg-3">
                  <div className="item">
                    <div className="service-image">
                  <img src={projectImg} className="w-100" alt="" />
                    </div>
                    <div className="service-body">
                      <div className="service-title">
                        <h3>Project Four</h3>
                      </div>

                      <div className="service-content">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus, laudantium. Nam veritatis quam eaque est!</p>
                      </div>
                      <a href="#" className="btn btn-primary">Read More</a>
                    </div>
                  </div>
              </div>
          </div>

        </div>

        </section>


      </main>

      <Footer />
    </>
  );
};

export default Home;
