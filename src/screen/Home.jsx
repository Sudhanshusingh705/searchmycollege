import React from "react";
import "./Home.css";

function Home() {
  return (
    <div>
      {/*HERO SECTION*/}
      <section className="hero-section">
        {
          <div id="smc" className="carousel autoplay" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="3"
                aria-label="Slide 3"
              ></button>
            </div>

            <div className="carousel-inner">
              <div className="carousel-item active" id="hero-1">
                {/*<img src="src\assets\hero1.jpeg" className="d-block w-100" alt-height="auto" />*/}

                <h1 class="search-container-heading text-uppercase">
                  Search BE/B.Tech Colleges, Courses and Exams
                </h1>
                <li class="search-container">
                  <input type="text" placeholder="Search..." />
                  <button>Search</button>
                </li>
              </div>
              <div className="carousel-item active" id="hero-2">
                {/*<img src="src\assets\hero1.jpeg" className="d-block w-100" alt-height="auto" />*/}

                <h1 class="search-container-heading text-uppercase">
                  Search BE/B.Tech Colleges, Courses and Exams
                </h1>
                <li class="search-container">
                  <input type="text" placeholder="Search..." />
                  <button>Search</button>
                </li>
              </div>
              <div className="carousel-item active" id="hero-3">
                {/*<img src="src\assets\hero1.jpeg" className="d-block w-100" alt-height="auto" />*/}

                <h1 class="search-container-heading text-uppercase">
                  Search BE/B.Tech Colleges, Courses and Exams
                </h1>
                <li class="search-container">
                  <input type="text" placeholder="Search..." />
                  <button>Search</button>
                </li>
              </div>
            </div>
          </div>
        }
      </section>

      {/* SELECT YOUR GOAL */}

      {/*  FEATURE POST */}
      <section className="featured-post container">
        <h3 className="text-center text-uppercase pt-4">FEATURED POSTS</h3>
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12 ">
            <div className="card">
              <img
                src="https://media.istockphoto.com/id/683754162/photo/success-concept.jpg?s=612x612&w=0&k=20&c=YWDg7OeSDmCaQJ0tsXOP_ruaYlrKuaQ63P2xeghBSY0="
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Home Storage</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className="d-grid">
                  <a href="#" className="btn btn-warning">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 ">
            <div className="card">
              <img
                src="https://media.istockphoto.com/id/685018656/photo/workplace-with-laptop-coffee-and-sketch.jpg?s=612x612&w=0&k=20&c=l9U-B21BJaDGqAVtbezfpg4r7prftk494kjxvgIE9GA="
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Business Storage</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className="d-grid">
                  <a href="#" className="btn btn-warning">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 ">
            <div className="card">
              <img
                src="https://media.istockphoto.com/id/977409376/photo/coffee-cup-and-digital-table-dock-smart-keyboard-vase-flower-herbs-stylus-pen-on-wooden-table.jpg?s=612x612&w=0&k=20&c=o3qQRinO_8Y4hO5rJbQeJ9aBCcmcpPMJmTT8pX4ahIw="
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Company Storage</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className="d-grid">
                  <a href="#" className="btn btn-warning">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* LATEST POST*/}
      <section className="featured-post container">
        <h3 className="text-center text-uppercase pt-4">LATEST POSTS</h3>
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12 ">
            <div className="card">
              <img
                src="https://media.istockphoto.com/id/683754162/photo/success-concept.jpg?s=612x612&w=0&k=20&c=YWDg7OeSDmCaQJ0tsXOP_ruaYlrKuaQ63P2xeghBSY0="
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Profit Margin</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className="d-grid">
                  <a href="#" className="btn btn-warning">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 ">
            <div className="card">
              <img
                src="https://media.istockphoto.com/id/977409376/photo/coffee-cup-and-digital-table-dock-smart-keyboard-vase-flower-herbs-stylus-pen-on-wooden-table.jpg?s=612x612&w=0&k=20&c=o3qQRinO_8Y4hO5rJbQeJ9aBCcmcpPMJmTT8pX4ahIw="
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Annual Revenue</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className="d-grid">
                  <a href="#" className="btn btn-warning">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 ">
            <div className="card">
              <img
                src="https://media.istockphoto.com/id/977409376/photo/coffee-cup-and-digital-table-dock-smart-keyboard-vase-flower-herbs-stylus-pen-on-wooden-table.jpg?s=612x612&w=0&k=20&c=o3qQRinO_8Y4hO5rJbQeJ9aBCcmcpPMJmTT8pX4ahIw="
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Storage Units</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className="d-grid">
                  <a href="#" className="btn btn-warning">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* SPACE SECTION*/}
      <section
        className="container-fluid bg-primary bg-gradient mt-4"
        style={{ minHight: "150px" }}
      >
        <div className="d-flex flex-column justify-content-center align-items-center">
          <i class="fs-1 text-warning my-3  fa-solid fa-location-dot"></i>
          <h3 className="text-white text-uppercase">
            We have wide variety of posts
          </h3>
          <button className="btn btn-warning my-2 text-dark text-uppercase">
            View All Posts
          </button>
        </div>
      </section>
      {/*PORTFOLIO*/}
      <section className="featured-post container">
        <h3 className="text-center text-uppercase py-4">OUR PORTFOLIO</h3>
        <div className="container">
          <div className="row g-2">
            <div className="col-6">
              <div className="p-1 border bg-danger ">
                <img
                  src="https://media.istockphoto.com/id/977409376/photo/coffee-cup-and-digital-table-dock-smart-keyboard-vase-flower-herbs-stylus-pen-on-wooden-table.jpg?s=612x612&w=0&k=20&c=o3qQRinO_8Y4hO5rJbQeJ9aBCcmcpPMJmTT8pX4ahIw="
                  className="card-img-top"
                  alt="..."
                />
              </div>
            </div>
            <div className="col-6">
              <div className="p-1 border bg-dark">
                <img
                  src="https://media.istockphoto.com/id/891036828/photo/saving-money-for-retirement-plan.jpg?s=612x612&w=0&k=20&c=PtWmG88gLx-XSHyVkg-j_Aw1wPyAIfRNfhPmmWY4384="
                  className="card-img-top"
                  alt="..."
                />
              </div>
            </div>
            <div className="col-6">
              <div className="p-1 border bg-dark">
                <img
                  src="https://media.istockphoto.com/id/1436918941/photo/business-and-investment.jpg?s=612x612&w=0&k=20&c=CM8vaQxaaiIy2tGypKgsdD9Fhx5L-22TyVrcRfFLep8="
                  className="card-img-top"
                  alt="..."
                />
              </div>
            </div>
            <div className="col-6">
              <div className="p-1 border bg-danger">
                <img
                  src="https://media.istockphoto.com/id/1449854429/vector/concept-of-coffee-break-brunch-or-time-lunch-at-work-successful-business-woman-take-a-break.jpg?s=612x612&w=0&k=20&c=GoeNinQU9_Tb1vEzbhIGIVkHLPFI-J_FvXAuy_ryhrA="
                  className="card-img-top"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*TESTIMONIALS*/}
      <section className="testimonials">
        <h3 className="text-center text-uppercase py-4">TESTIMONIALS</h3>
        <section>
          <div className="row text-center  text-uppercase pt-4">
            <div className="col-md-6 mb-4 mb-md-0">
              <div className="d-flex justify-content-center mb-4">
                <img
                  src="https://avatars.githubusercontent.com/u/65748069?v=4"
                  className="rounded-circle shadow-1-strong"
                  width={100}
                  height={100}
                />
              </div>
              <p className="lead my-3  text-center">
                “If debugging is the process of removing software bugs, then
                programming must be the process of putting them in”
              </p>
              <p className="font-italic font-weight-normal mb-0">
                - Sudhanshu Singh
              </p>
            </div>
            <div className="col-md-6 mb-0">
              <div className="d-flex justify-content-center mb-4">
                <img
                  src="https://avatars.githubusercontent.com/u/110010807?v=4"
                  className="rounded-circle shadow-1-strong"
                  width={100}
                  height={100}
                />
              </div>
              <p className="lead my-3 ">
                “Measuring programming progress by lines of code is like
                measuring aircraft building progress by weight.”
              </p>
              <p className="font-italic font-weight-normal mb-0">
                - Divi Sharma{" "}
              </p>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Home;
