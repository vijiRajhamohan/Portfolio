import React,{useState} from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import { BsSunFill } from "react-icons/bs";
import { MdOutlineDarkMode } from "react-icons/md";

function Nav({ themeToggler }) {
  const [show, setShow] = useState(false)
  return (
    <div>
      <div className="row" >
       <nav className="navbar navbar-expand-lg navbar-dark  ">
          <div className="container">
            <div className="logo col-sm-6 col-md-5 col-lg-6 " style={{ marginLeft: "2%" }}>
              <Link
                to="/home"
                style={{ textDecoration: "none", fontSize: "28px" }}
              >
                Full Stack Developer
              </Link>
            </div>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={{ backgroundColor: "deeppink" }}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="col-sm-6 navbar-expand-lg">
              <div
                className="collapse navbar-collapse  "
                id="navbarSupportedContent"
              >
                <ul
                  className="navbar-nav d-flex  flex-grow-1 pe-3 "
                  style={{
                    fontSize: "18px",
                    display: "flex",
                    justifyContent: "space-evenly",
                    textDecoration: "none",
                  }}
                >
                  <li className="nav-item">
                    {show ? (
                      <button className="btn border-0" onClick={() => themeToggler()}>
                        <BsSunFill />
                      </button>
                    ) : (
                      <button className='btn border-0' onClick={() => themeToggler()}>
                        <MdOutlineDarkMode />
                      </button>)}
                  </li>
                  <li className="nav-item">
                    <Link to="/home" style={{ textDecoration: "none" }}>
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/about" style={{ textDecoration: "none" }}>
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/skills" style={{ textDecoration: "none" }}>
                      Skills
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/project" style={{ textDecoration: "none" }}>
                      Project
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/contact" style={{ textDecoration: "none" }}>
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
