import { BrowserRouter as Router, Link } from "react-router-dom";
import {FaChevronDown,FaChevronRight} from 'react-icons/fa';
import MobileOffcanvas from "../mobileOffcanvas/MobileOffcanvas";

const Navbar = () => {
  return (
    <Router>
       
      <nav className="navbar navbar-expand-lg navbar-dark bg-light py-3">
        <div className="container d-flex justify-content-between align-items-baseline">
          <div className="mobile-view py-2">
            <Link className="navbar-brand text-white" to="/">
              <h4 className="fw-bold">Impact</h4>
            </Link>
            <button
              className="navbar-toggler btn"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
              aria-expanded="false"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div
            className=" offcanvas offcanvas-end"
            aria-labelledby="offcanvasRightLabel"
            id="offcanvasRight"
          >
            <div className="offcanvas-header w-100 d-flex justify-content-end">
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>

            <div className="offcanvas-body">
              <span className="mobile-offcanvas"><MobileOffcanvas /></span>
              <ul className="list-unstyled d-flex justify-content-end w-100">
                <li className="px-3">
                  <Link to="/" className="text-white text-decoration-none">
                    Home
                  </Link>
                </li>
                <li className="dropdown px-3 pop-over">
                  <Link className=" text-white text-decoration-none" to="/">
                    Dropdown 
                    <span className="ps-2"><FaChevronDown /></span>
                  </Link>
                  <ul
                    className=" content list-unstyled pt-3 ps-3"
                  >
                    <li className="py-2">
                      <Link to="/" className="content-item text-decoration-none text-dark ">Menu One</Link>
                    </li>

                    <li className="py-2 pop-over2">
                      <Link to="/" className="content-item text-decoration-none text-dark ">Menu Two
                      <span className="ps-5"><FaChevronRight /></span>
                      </Link>

                      <ul className="content2 shadow-sm list-unstyled pt-3 ps-3">
                        <li className="py-2">
                          <Link to='/' className="content-item text-decoration-none text-dark">Sub Menu One</Link>
                        </li>
                        <li className="py-2">
                          <Link to='/' className="content-item text-decoration-none text-dark">Sub Menu Two</Link>
                        </li>
                        <li className="py-2">
                          <Link to='/' className="content-item text-decoration-none text-dark">Sub Menu Three</Link>
                        </li>
                      
                      </ul>

                    </li>

                    <li className="py-2">
                      <Link to="/" className="content-item text-decoration-none text-dark ">Menu Three</Link>
                    </li>
                  </ul>
                </li>
                <li className="px-3">
                  <Link to="/" className="text-white text-decoration-none">
                    Services
                  </Link>
                </li>
                <li className="px-3">
                  <Link to="/" className="text-white text-decoration-none">
                    Blog
                  </Link>
                </li>
                <li className="px-3">
                  <Link to="/" className="text-white text-decoration-none">
                    About
                  </Link>
                </li>
                <li className="px-3">
                  <Link to="/" className="text-white text-decoration-none">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </Router>
  );
};

export default Navbar;
