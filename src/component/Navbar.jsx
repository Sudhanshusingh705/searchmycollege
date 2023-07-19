import React from "react";
import { NavLink } from "react-router-dom";
import '../screen/Home.css';

function Navbar() {
  return (
    <div>
      <div>
        {/* logo section */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <a href="/" className="navbar-brand mt-2 mt-lg-0">
                <img
                  src="src\assets\logo.png"
                  height={45}
                  alt="Search My College Logo"
                  loading="lazy"
                />
              </a>
              {/* Left links */}

              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item" font-size="14px">
                  <NavLink className="nav-link" to="/">
                    Top Colleges{" "}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="login">
                    Top Courses{" "}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="about">
                    Exams{" "}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="contact">
                    Study Abroad
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="contact">
                    Addmission
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="contact">
                    News/Blogs
                  </NavLink>
                </li>
                <div className="dropdown">
                  <a
                    className="btn btn-dark dropdown-toggle"
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
                    <NavLink className="nav-link" to="/login">
                      Login👤{" "}
                    </NavLink>
                  </li>
                  <br />
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/download">
                      Downloads📱{" "}
                    </NavLink>
                  </li>
                </ul>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
