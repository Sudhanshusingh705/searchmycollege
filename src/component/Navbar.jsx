import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      {/* logo section */}
      <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <a href="/" className="navbar-brand mt-2 mt-lg-0">
              <img
                src="src\assets\logo1.jpeg"
                height={35}
                alt=""
                loading="lazy"
              />
            </a>

            {/* Left links */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item navbar-light" font-size="14px">
                <NavLink className="nav-link" to="/">
                  Top Colleges{" "}
                </NavLink>
              </li>
              <li className="nav-item navbar-light">
                <NavLink className="nav-link" to="login">
                  Top Courses{" "}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link navbar-light" to="about">
                  Exams{" "}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link navbar-light" to="contact">
                  Study Abroad
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link navbar-light" to="contact">
                  Addmission
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link navbar-light" to="contact">
                  News/Blogs
                </NavLink>
              </li>
              <div className="dropdown">
                <a
                  className="btn btn-transparent dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  More
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Education Loan
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Institute
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Q&A
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      College Predictor
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Test Series
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Practice Question
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Course Finder
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Scholership
                    </a>
                  </li>
                </ul>
              </div>
            </ul>
            <form className="d-flex">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link navbar-light" to="/login">
                    Login👤{" "}
                  </NavLink>
                </li>
                <br />
                <li className="nav-item">
                  <NavLink className="nav-link navbar-light" to="/download">
                    Downloads📱 {" "}
                  </NavLink>
                </li>
              </ul>
            </form>

            {/*RIGHT ALIGNED NAV */}
            <div class="container ">
              <p class="text-end"></p>
              <ul class="nav justify-content-end">
                <div className="dropdown">
                  <a
                    className="btn btn-transparent dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    B'Tech
                  </a>
                  <ul className="dropdown-menu">
                  <li><h5 class="dropdown-header">Top Colleges By Course</h5></li>
                    <li>
                      <a className="dropdown-item" href="#">
                        B'Tech Colleges
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        M'Tech Colleges
                      </a>
                    </li>
                    <li><h5 class="dropdown-header">Top Colleges By State</h5></li>
                   
                    
                  </ul>
                </div>
                
                <div className="dropdown">
                  <a
                    className="btn btn-transparent dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    M.B.A
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Education Loan
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Institute
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Q&A
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        College Predictor
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Test Series
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Practice Question
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Course Finder
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Scholership
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="dropdown">
                  <a
                    className="btn btn-transparent dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    MBBS
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Education Loan
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Institute
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Q&A
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        College Predictor
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Test Series
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Practice Question
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Course Finder
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Scholership
                      </a>
                    </li>
                  </ul>
                </div>
                
                <div className="dropdown">
                  <a
                    className="btn btn-transparent dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Design
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Education Loan
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Institute
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Q&A
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        College Predictor
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Test Series
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Practice Question
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Course Finder
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Scholership
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="dropdown">
                  <a
                    className="btn btn-transparent dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                  Law
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Education Loan
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Institute
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Q&A
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        College Predictor
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Test Series
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Practice Question
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Course Finder
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Scholership
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="dropdown">
                  <a
                    className="btn btn-transparent dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
             Science
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Education Loan
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Institute
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Q&A
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        College Predictor
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Test Series
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Practice Question
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Course Finder
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Scholership
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="dropdown">
                  <a
                    className="btn btn-transparent dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Study Abroad
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Education Loan
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Institute
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Q&A
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        College Predictor
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Test Series
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Practice Question
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Course Finder
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Scholership
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="dropdown">
                  <a
                    className="btn btn-transparent dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    All Courses
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Education Loan
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Institute
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Q&A
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        College Predictor
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Test Series
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Practice Question
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Course Finder
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Scholership
                      </a>
                    </li>
                  </ul>
                </div>

                

              </ul>
            </div>
            {/*<form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-primary" type="submit">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
  </form> */}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
