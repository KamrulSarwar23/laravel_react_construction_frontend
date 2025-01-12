import React, { useEffect, useState } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Hero from "../common/Hero";
import { apiUrl, fileUrl } from "../common/http";
import { Link } from "react-router-dom";

const About = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  const allArticles = async () => {
    try {
      const res = await fetch(apiUrl + "all-articles", {
        method: "GET",
      });

      if (!res.ok) {
        throw new Error("Failed to fetch articles");
      }

      const result = await res.json();
      setArticles(result.data);
    } catch (error) {
      console.error("Error fetching articles:", error.message);
    } finally {
      setLoading(false); // Stop loading regardless of success or failure
    }
  };

  useEffect(() => {
    allArticles();
  }, []);

  return (
    <div>
      <Header />

      <Hero
        preHeading="Quality, Integrity, Value"
        heading="Our Blogs"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Fugit consequatur atque quos est quibusdam officiis!"
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
            {loading ? (
              // Spinner for loading state
              <div className="text-center py-5">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : articles.length > 0 ? (
              // Render articles if available
              articles.map((article) => (
                <div key={article.id} className="col-md-4 col-lg-3">
                  <div className="card shadow border-0 mb-3">
                    <div className="card-img-top">
                      <img
                        src={`${fileUrl}uploads/articles/small/${article.image}`}
                        alt={article.title}
                        className="w-100"
                        height="250px"
                      />
                    </div>

                    <div className="card-body p-4">
                      <div className="mb-3">
                        <Link className="title" to={`/article/${article.id}`}>
                          {article.title}
                        </Link>
                      </div>

                      <Link
                        className="btn btn-primary"
                        to={`/blog/${article.id}`}
                      >
                        Read More
                      </Link>
                    </div>
                    
                  </div>
                </div>
              ))
            ) : (
              // Message when no articles are found
              <div className="text-center py-5">
                <h4>No articles available at the moment.</h4>
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
