import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className=" container p-2">
      <nav class="navbar navbar-expand-lg border-bottom" style={{ backgroundColor: "#FFF" }}>
        <Link class="navbar-brand" to="/">
          <img src="media/images/logo.svg"  style={{ width: "25%" }} alt="Logo" />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item ">
              <Link class="nav-link active" to="/Signup">
                Signup <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li class="nav-item ">
              <Link class="nav-link active" to="/Aboutpage">
                About
              </Link>
            </li>
            <li class="nav-item ">
              <Link class="nav-link active" to="/ProductsPage">
                Products <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li class="nav-item ">
              <Link class="nav-link active" to="/PricingPage">
                Pricing <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li class="nav-item ">
              <Link class="nav-link active" to="/SupportPage">
                Support <span class="sr-only">(current)</span>
              </Link>
            </li>
            
          </ul>
          <form class="form-inline my-2 my-lg-0">
            
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
