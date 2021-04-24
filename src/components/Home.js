import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__description">
          <p>
            upload an image and get its link straight away & use it forever!
          </p>
        </div>
        <div className="home__divider">
          <span></span>
        </div>
        <div className="home__steps">
          <div className="home__step">
            <p>
              step-1 <b>upload</b> image
            </p>
          </div>
          <div className="home__step">
            <p>
              step-2 get the <span>link</span>
            </p>
          </div>
          <div className="home__step">
            <p>
              step-3 use it anywhere & <b>enjoy</b>!
            </p>
          </div>
        </div>
        <div className="home__dots">
          <img src="dots.png" alt="" />
        </div>
        <div className="home__geturl">
          <Link to="/get_url">
            <button>let's go</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
