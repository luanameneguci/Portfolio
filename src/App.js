import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import ListIndividual from "./views/individual";
import ListGroup from "./views/group";
import ListAll from "./views/all";
import AboutMe from "./views/aboutMe";
import Contact from "./views/contact";

function App() {
  return (
    <Router>
      <div className="App d-flex flex-column min-vh-100">
        <nav class="navbar navbar-fixed-top navbar-expand-lg navbar-light bg-light mb-5 py-4">
          <a class="navbar-brand ms-5" href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-moon"
              viewBox="0 0 16 16"
            >
              <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286" />
            </svg>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <Link class ="text-decoration-none" to="/aboutMe">
              <li class="nav-item mx-3 ms-4">              
                <a class="nav-link">
                  <p class="h5">About me</p>
                </a>
              
              </li>
              </Link>
              <Link class ="text-decoration-none" to="/contact">
              <li class="nav-item mx-3 ms-4">              
                <a class="nav-link">
                  <p class="h5">Contact</p>
                </a>
              
              </li>
              </Link>
            </ul>
          </div>
        </nav>

        <section class="mt-4 mb-3">
          <h1 className="text text-secondaryd-flex justify-content-center ms-3 mt-5">
            Luana Meneguci
          </h1>
          <h6 className="text d-flex justify-content-center">
            Web Developer | Student
          </h6>
        </section>

        {/* <div className="container gallery col-12 mt-0 d-flex flex-row d-inline-block">
          <div class="row"> */}
            <Routes>
              <Route path="/" element={<ListAll />} />
              <Route path="/group" element={<ListGroup />}></Route>
              <Route path="/individual" element={<ListIndividual />} />
              <Route path="/aboutMe" element={<AboutMe />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
       {/*    </div>
        </div> */}
      </div>

      <footer class="mt-5 bg-light text-center py-2">
        <div class="container">
            <div class="row">
                <div class="col-md-4 mb-3 mb-md-0">
                <ul class="list-unstyled d-flex">
                <Link class="text-decoration-none" to="/aboutMe">
                        <li><a class="mx-3 text-secondary link-opacity-10-hover">About me</a></li>
                </Link>
                <Link class="text-decoration-none" to="/contact">
                        <li><a class="mx-3 text-secondary link-opacity-10-hover">Contact</a></li>
                </Link>
                    </ul>                    
                    
                </div>
                <div class="col-md-4 mb-3 mb-md-0">
                                  
                </div>
                <div class="col-md-4">
                    <a href="https://www.facebook.com/LuuMeneguci/" target="_blank" class="text-white mr-2"><img style={{width:2+"vw"}} src="https://img.icons8.com/?size=100&id=118466&format=png&color=707071"/></a>
                    <a href="https://www.instagram.com/luanameneguci" target="_blank" class="text-white mr-2"><img style={{width:2+"vw"}} src="https://img.icons8.com/?size=100&id=59813&format=png&color=707071"/></a>
                    <a href="#!" class="text-white"><img style={{width:2+"vw"}} src="https://img.icons8.com/?size=100&id=123922&format=png&color=707071"/></a>
                </div>
            </div>
            <div class="mt-3">
            <p class="small mb-0"> This website was built by me using JavaScript and React. </p>
                <p class="small">&copy; 2024 Luana Meneguci. All rights reserved.</p>
            </div>
        </div>
    </footer>
    </Router>
  );
}

export default App;
