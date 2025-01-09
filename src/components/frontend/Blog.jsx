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

  const [articles, setArticles] = useState([]);

  const allArticles = async () => {
    const res = await fetch(apiUrl + 'all-articles', {
      method: "GET"
    })
    const result = await res.json();
    setArticles(result.data);

  }

  useEffect(() => {
    allArticles();

  }, []);

  return (
    <div>
      <Header />

      <Hero
        preHeading="Quality, Integrity, Value"
        heading="Our Blogs"
        text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
             <br/> consequatur atque quos est quibusdam officiis!"
      />

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
              articles && articles.map(article => {
                return (
                  <div className="col-md-4 col-lg-3">
                    <div className="card shadow border-0 mb-3">
                      <div className="card-img-top">
                        <img src={fileUrl + 'uploads/articles/small/' + article.image} alt="" className="w-100" height="250px" />
                      </div>

                      <div className="card-body p-4">
                        <div className="mb-3">
                          <a className="title" href="">
                           {article.title}
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

      <Footer />
    </div>
  );
};

export default About;
