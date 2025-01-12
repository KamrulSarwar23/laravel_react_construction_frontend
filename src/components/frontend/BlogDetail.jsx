import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { apiUrl, fileUrl } from "../common/http";
import Hero from "../common/Hero";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const BlogDetail = () => {
    const params = useParams();
    const [article, setArticle] = useState(null);
    const [allArticles, setAllArticles] = useState([]);
    const location = useLocation();
    const [testimonials, setTestimonials] = useState([]);

    const fetchArticleDetails = async () => {
        try {
            const res = await fetch(`${apiUrl}blog-details/${params.id}`);

            if (!res.ok) {
                throw new Error("Failed to fetch service details");
            }
            const result = await res.json();
            setArticle(result.data);

        } catch (error) {
            console.error(error.message);
            setArticle(null);
        }
    };

    const AllArticles = async () => {
        try {
            const res = await fetch(`${apiUrl}latest-articles`);
            if (!res.ok) {
                throw new Error("Failed to fetch all articles");
            }
            const result = await res.json();
            setAllArticles(result.data);
        } catch (error) {
            console.error(error.message);
            setAllArticles([]);
        }
    };

    const AllTestimonials = async () => {
        const res = await fetch(apiUrl + "all-testimonials", {
            method: "GET"
        });

        const result = await res.json();
        setTestimonials(result.data);
    }

    useEffect(() => {
        fetchArticleDetails();

    }, [params.id]);

    useEffect(() => {
        AllArticles();
        AllTestimonials();
    }, []);

    return (
        <div>
            <Header />

            <Hero preHeading="Quality, Integrity, Value" heading={article?.title} text="" />

            <section className="section-11">
                <div className="container py-5">
                    <div className="row">
                      

                        <div className="col-md-9">
                            {article ? (
                                <div>
                                    <div>
                                        <img
                                            className="w-100"
                                            height="350px"
                                            src={article?.image ? `${fileUrl}uploads/articles/large/${article.image}` : "/placeholder.jpg"}
                                            alt=""
                                        />
                                    </div>

                                    <div className="mt-3">
                                        <h4>{article.title}</h4>
                                        <p dangerouslySetInnerHTML={{ __html: article.content }}></p>
                                    </div>
                                </div>
                            ) : (
                                <div className="text-center py-5">
                                    <div className="spinner-border" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="col-md-3">
                            <div className="card sidebar shadow border-0 p-3">
                                <div className="card-body px-4 py-4">
                                    <h3>Latest Blog</h3>
                                    {allArticles && allArticles.map((itemArticle) => (
                                        <ul  key={itemArticle.id}>
                                             
                                            <li className="d-flex py-2"> 
                                            <img className="me-2" width={50} height={50} src={fileUrl+'uploads/articles/small/' + itemArticle.image} alt="" />
                                                <Link to={`/blog/${itemArticle.id}`}
                                                className={location.pathname === `/blog/${itemArticle.id}` ? "active" : ""}>
                                                {itemArticle.title}
                                            </Link>
                                           
                                            </li>
                                        </ul>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

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
                                    {testimonials && testimonials.map(testimonial => {
                                        return (
                                            <SwiperSlide key={testimonial.id}>
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
                                                                {testimonial.testimonial}
                                                            </p>
                                                        </div>
                                                        <hr />

                                                        <div className="d-flex meta">
                                                            <div>
                                                                <img
                                                                    src={fileUrl + 'uploads/testimonials/' + testimonial.image}
                                                                    width={60}
                                                                    alt=""
                                                                    className="me-3"
                                                                />
                                                            </div>

                                                            <div>
                                                                <div className="name">{testimonial.citation}</div>
                                                                <div>{testimonial.designation}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        )
                                    })}


                                </Swiper>
                            </div>
                        </div>
                    </section>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default BlogDetail;
