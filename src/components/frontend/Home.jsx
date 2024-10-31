import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import AboutImg from "../../assets/images/about-us.jpg";

const Home = () => {
  return (
    <>
      {/* Header */}
      <header>
        <div className="container py-3">
          <Navbar expand="lg">
            <Navbar.Brand href="#home" className="logo">
              <span>UrbanEdge</span> Constructions
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#home" className="nav-link">
                  Home
                </Nav.Link>
                <Nav.Link href="#link" className="nav-link">
                  About Us
                </Nav.Link>
                <Nav.Link href="#link" className="nav-link">
                  Services
                </Nav.Link>
                <Nav.Link href="#link" className="nav-link">
                  Projects
                </Nav.Link>
                <Nav.Link href="#link" className="nav-link">
                  Blogs
                </Nav.Link>
                <Nav.Link href="#link" className="nav-link">
                  Contact Us
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </header>

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

        {/* About Us */}

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
      </main>

      <footer>
        <div className="container py-5">
          <div className="row">
            <div className="col-md-3">
              <h3>UrbanEdge Constructions</h3>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour.
              </p>
            </div>

            <div className="col-md-3">
              <h3>Our Services</h3>
              <ul>
                <li>
                  <a href="">Speciality Construction</a>
                </li>

                <li>
                  <a href="">Speciality Construction</a>
                </li>
                <li>
                  <a href="">Speciality Construction</a>
                </li>
                <li>
                  <a href="">Speciality Construction</a>
                </li>
                <li>
                  <a href="">Speciality Construction</a>
                </li>
              </ul>
            </div>

            <div className="col-md-3">
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <a href="">Speciality Construction</a>
                </li>

                <li>
                  <a href="">Speciality Construction</a>
                </li>
                <li>
                  <a href="">Speciality Construction</a>
                </li>
                <li>
                  <a href="">Speciality Construction</a>
                </li>
                <li>
                  <a href="">Speciality Construction</a>
                </li>
              </ul>
            </div>

            <div className="col-md-3">
              <h3>Contact Us</h3>
              <ul>
                <li>
                  <a href="">Speciality Construction</a>
                </li>

                <li>
                  <a href="">Speciality Construction</a>
                </li>
                <li>
                  <a href="">Speciality Construction</a>
                </li>
                <li>
                  <a href="">Speciality Construction</a>
                </li>
                <li>
                  <a href="">Speciality Construction</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
