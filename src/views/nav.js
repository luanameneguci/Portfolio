import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.css";

function SecNav(){

    return(
        
    <section>
    <nav class="navbar navbar-light justify-content-center mt-5">
      <form class="form-inline">
        <Link to="/">
        <button class="btn btn-lg" type="button">
          <a
            class="link-secondary link-opacity-10-hover text-decoration-none"
           
          >
            All
          </a>
        </button>
        </Link>
        <Link to="/group">
        <button class="btn btn-sm" type="button">
          <a
            class="link-secondary link-opacity-10-hover text-decoration-none"
           
          >
            Group
          </a>
        </button>
        </Link>
        <Link to="/individual">
        <button class="btn btn-sm" type="button">
          <a
            class="link-secondary link-opacity-10-hover text-decoration-none"
            href="#"
          >
            Individual
          </a>
        </button>
        </Link>
      </form>
    </nav>
  </section>
    )
}

export default SecNav;