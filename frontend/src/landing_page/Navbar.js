import React from "react";

function Navbar() {
  return (
    <div className=" container p-2">
      <nav class="navbar navbar-expand-lg border-bottom" style={{ backgroundColor: "#FFF" }}>
        <a class="navbar-brand" href="#">
          <img src="media/images/logo.svg"  style={{ width: "25%" }} alt="Logo" />
        </a>
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
              <a class="nav-link active" href="#">
                Signup <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item ">
              <a class="nav-link active" href="#">
                About
              </a>
            </li>
            <li class="nav-item ">
              <a class="nav-link active" href="#">
                Products <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item ">
              <a class="nav-link active" href="#">
                Pricing <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item ">
              <a class="nav-link active" href="#">
                Support <span class="sr-only">(current)</span>
              </a>
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
